# FlowCache Supabase Setup Guide

## Step 1: Set Up Authentication

1. Go to your Supabase project dashboard
2. Navigate to **Auth** → **Providers**
3. Enable **Email Provider** (for magic link authentication)
4. Configure authentication settings as needed

## Step 2: Create the Profiles Table

1. Go to **SQL Editor** in your Supabase dashboard
2. Click **New Query**
3. Copy and paste the following SQL into the editor:

```sql
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text unique not null,
  is_owner boolean not null default false,
  vault_access boolean not null default false,
  plan text not null default 'free',
  subscription_status text not null default 'inactive',
  lemon_customer_id text,
  lemon_subscription_id text,
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy "Users can read their own profile"
on public.profiles
for select
using (auth.uid() = id);

create policy "Users can update their own profile"
on public.profiles
for update
using (auth.uid() = id);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
as $$
begin
  insert into public.profiles (id, email)
  values (new.id, new.email)
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;

create trigger on_auth_user_created
after insert on auth.users
for each row
execute procedure public.handle_new_user();
```

4. Click **Run** to execute the SQL

## Step 2b: Grant Owner Access (Optional)

To make your account an owner, run this query in the SQL Editor:

```sql
update public.profiles
set is_owner = true,
    vault_access = true,
    plan = 'owner',
    subscription_status = 'active'
where email = 'YOUR_EMAIL_HERE@gmail.com';
```

Replace `YOUR_EMAIL_HERE@gmail.com` with your actual email address.

## What This SQL Does

### profiles table
- **id**: Links to Supabase Auth users (auto-deleted if user is removed)
- **email**: User's email address (unique)
- **is_owner**: Boolean flag for owner/admin access
- **vault_access**: Boolean flag for vault membership
- **plan**: Current plan level (free, starter, full)
- **subscription_status**: Subscription state (inactive, active, cancelled)
- **lemon_customer_id**: Lemon Squeezy customer ID for payment tracking
- **lemon_subscription_id**: Lemon Squeezy subscription ID
- **updated_at**: Timestamp of last update

### Row Level Security (RLS)
- Users can only read their own profile
- Users can only update their own profile

### Trigger
- Automatically creates a profile entry when a new user signs up
- Prevents profile creation errors on first login

## Step 3: Update Your Code

Replace the Supabase credentials in your code:

### login.html
```javascript
const SUPABASE_URL = "YOUR_SUPABASE_URL";
const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY";
```

### vault.html
```javascript
const SUPABASE_URL = "YOUR_SUPABASE_URL";
const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY";
```

Get these values from your Supabase project:
1. Go to **Project Settings** → **API**
2. Copy the **Project URL** (paste as `SUPABASE_URL`)
3. Copy the **anon public** key (paste as `SUPABASE_ANON_KEY`)

## Step 4: Grant Vault Access

Once users sign up, you can grant them access by going to **Supabase Dashboard** → **Database** → **profiles** table and updating:
- `vault_access = true` for paid members
- `is_owner = true` for admin/owner accounts

Or manage it programmatically when users complete a purchase in Lemon Squeezy.

## Step 5: Set Up Lemon Squeezy Webhook Handler

This webhook handler automatically updates user access in Supabase when they purchase a subscription through Lemon Squeezy.

### Create the Webhook Endpoint

Create a new file `api/webhooks/lemonsqueezy.js` (or deploy to Vercel/Netlify):

```javascript
import crypto from "node:crypto";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method not allowed");
  }

  const secret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET;
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!secret || !supabaseUrl || !supabaseServiceKey) {
    return res.status(500).send("Missing environment variables");
  }

  const rawBody =
    typeof req.body === "string" ? req.body : JSON.stringify(req.body);

  const signature = Buffer.from(req.headers["x-signature"] || "", "hex");
  const hmac = Buffer.from(
    crypto.createHmac("sha256", secret).update(rawBody).digest("hex"),
    "hex"
  );

  if (
    signature.length === 0 ||
    hmac.length === 0 ||
    !crypto.timingSafeEqual(hmac, signature)
  ) {
    return res.status(400).send("Invalid signature");
  }

  const payload = JSON.parse(rawBody);
  const eventName = payload?.meta?.event_name;
  const attributes = payload?.data?.attributes || {};

  const userEmail =
    attributes.user_email ||
    attributes.customer_email ||
    attributes.email;

  if (!userEmail) {
    return res.status(200).send("No email to match");
  }

  let update = null;

  if (
    eventName === "subscription_created" ||
    eventName === "subscription_updated" ||
    eventName === "subscription_payment_success"
  ) {
    update = {
      vault_access: true,
      plan:
        String(attributes.variant_name || "").toLowerCase().includes("starter")
          ? "starter"
          : "full",
      subscription_status: attributes.status || "active",
      lemon_customer_id: attributes.customer_id
        ? String(attributes.customer_id)
        : null,
      lemon_subscription_id: payload?.data?.id ? String(payload.data.id) : null,
      updated_at: new Date().toISOString()
    };
  }

  if (
    eventName === "subscription_cancelled" ||
    eventName === "subscription_expired" ||
    eventName === "subscription_paused"
  ) {
    update = {
      vault_access: false,
      subscription_status: attributes.status || "inactive",
      updated_at: new Date().toISOString()
    };
  }

  if (!update) {
    return res.status(200).send("Event ignored");
  }

  const response = await fetch(`${supabaseUrl}/rest/v1/profiles?email=eq.${encodeURIComponent(userEmail.toLowerCase())}`, {
    method: "PATCH",
    headers: {
      apikey: supabaseServiceKey,
      Authorization: `Bearer ${supabaseServiceKey}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal"
    },
    body: JSON.stringify(update)
  });

  if (!response.ok) {
    const text = await response.text();
    return res.status(500).send(text);
  }

  return res.status(200).send("OK");
}
```

### Environment Variables to Set

```
LEMONSQUEEZY_WEBHOOK_SECRET=your_webhook_secret_from_lemon_squeezy
SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

### What This Webhook Does

- **Verifies webhook signature** from Lemon Squeezy (security check)
- **Tracks subscription events**:
  - `subscription_created`: Grants vault access
  - `subscription_updated`: Updates plan and status
  - `subscription_payment_success`: Maintains active status
  - `subscription_cancelled`: Revokes vault access
  - `subscription_expired`: Revokes vault access
  - `subscription_paused`: Revokes vault access
- **Identifies users** by email address
- **Updates Supabase profiles** with:
  - Plan type (starter/full)
  - Subscription status
  - Lemon Squeezy customer and subscription IDs
  - Timestamp of update

### Deployment Options

**Option A: Vercel (Recommended)**
1. Create a Vercel project connected to your GitHub repo
2. Add the webhook handler to `api/webhooks/lemonsqueezy.js`
3. Set environment variables in Vercel dashboard
4. Webhook URL: `https://your-vercel-domain.vercel.app/api/webhooks/lemonsqueezy`

**Option B: Netlify Functions**
1. Create `netlify/functions/lemonsqueezy.js`
2. Set environment variables in Netlify dashboard
3. Webhook URL: `https://your-netlify-site.netlify.app/.netlify/functions/lemonsqueezy`

**Option C: Custom Node.js Server**
Deploy to your own server and register the endpoint with Lemon Squeezy.

### Register Webhook in Lemon Squeezy

1. Go to Lemon Squeezy Dashboard → **Webhooks**
2. Add new webhook with:
   - **URL**: Your endpoint from above
   - **Events**: Select all subscription events
3. Copy the **Webhook Secret** and add to your environment variables
