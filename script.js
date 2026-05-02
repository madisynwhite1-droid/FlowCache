

const tools = [
  {
    name: "Perplexity",
    category: "Research",
    type: "free",
    isNew: true,
    beginner: true,
    pricing: "Free + Paid",
    bestFor: "Fast research and source-based answers",
    helpsWith: "Research, summaries, learning, quick discovery",
    editorNote: "Great when you want a faster research workflow instead of random searching.",
    whyInVault: "Useful for finding answers quickly with a more research-first feel.",
    link: "https://www.perplexity.ai",
    badge: "Best for Research"
  },
  {
    name: "Claude",
    category: "Writing",
    type: "free",
    isNew: true,
    beginner: true,
    pricing: "Free + Paid",
    bestFor: "Long-form writing and cleaner outputs",
    helpsWith: "Writing, rewriting, planning, thought organization",
    editorNote: "Strong for polished writing and thoughtful responses.",
    whyInVault: "A strong writing assistant for people who need depth and clarity.",
    link: "https://claude.ai",
    badge: "Writer Favorite"
  },
  {
    name: "Gamma",
    slug: "gamma",
    category: "Design",
    type: "premium",
    badge: "Featured Tool of the Week",
    link: "https://gamma.app",
  },
  {
    name: "Taskade",
    category: "Productivity",
    type: "free",
    isNew: true,
    beginner: true,
    pricing: "Free + Paid",
    bestFor: "Planning and lightweight workflows",
    helpsWith: "Task management, brainstorming, systems",
    editorNote: "Simple and smooth for people who want organization without overwhelm.",
    whyInVault: "A clean productivity tool that feels less heavy than bigger systems.",
    link: "https://www.taskade.com",
    badge: "Beginner Friendly"
  },
  {
    name: "Make",
    category: "Automation",
    type: "premium",
    accessLevel: "full",
    isNew: true,
    beginner: false,
    pricing: "Free + Paid",
    bestFor: "Visual automations and backend workflows",
    helpsWith: "Connecting tools, automating repetitive work, systems building",
    editorNote: "Very strong once you start thinking like an operator instead of just a user.",
    whyInVault: "A premium-feeling tool for building smarter workflows.",
    link: "https://www.make.com",
    badge: "Power Tool"
  },
  {
    name: "Bardeen",
    category: "Automation",
    type: "premium",
    accessLevel: "full",
    isNew: false,
    beginner: false,
    pricing: "Free + Paid",
    bestFor: "Browser automation and repetitive web tasks",
    helpsWith: "Scraping, shortcuts, productivity flows",
    editorNote: "Best for people who spend a lot of time doing repetitive work online.",
    whyInVault: "Useful for turning internet-heavy work into easier systems.",
    link: "https://www.bardeen.ai",
    badge: "Hidden Gem"
  },
  {
    name: "Browse AI",
    category: "Research",
    type: "premium",
    accessLevel: "full",
    isNew: true,
    beginner: false,
    pricing: "Free + Paid",
    bestFor: "Monitoring websites and extracting data",
    helpsWith: "Tracking changes, collecting site data, automating watchlists",
    editorNote: "A hidden-gem type tool for smart internet workflows.",
    whyInVault: "Feels like something most people don't know they need until they see it.",
    link: "https://www.browse.ai",
    badge: "Smart Find"
  },
  {
    name: "Leonardo AI",
    category: "Design",
    type: "premium",
    accessLevel: "starter",
    isNew: true,
    beginner: true,
    pricing: "Free + Paid",
    bestFor: "Visual creation and content design",
    helpsWith: "Mockups, graphics, visual ideas, branding concepts",
    editorNote: "Great for creators building visuals without a full design team.",
    whyInVault: "Useful for content, branding, and aesthetic ideation.",
    link: "https://leonardo.ai",
    badge: "Creator Pick"
  },
  {
    name: "Playground AI",
    category: "Hidden Gems",
    type: "premium",
    accessLevel: "full",
    isNew: true,
    beginner: true,
    pricing: "Free + Paid",
    bestFor: "Creative image experimentation",
    helpsWith: "Aesthetic exploration, concepts, content visuals",
    editorNote: "Feels more under-the-radar than the obvious image tools.",
    whyInVault: "Fits the hidden gem side of creative discovery.",
    link: "https://playground.com",
    badge: "Underrated"
  },
  {
    name: "Descript",
    category: "Video",
    type: "premium",
    accessLevel: "full",
    isNew: true,
    beginner: true,
    pricing: "Paid",
    bestFor: "Editing audio and video with ease",
    helpsWith: "Podcast clips, videos, captions, content editing",
    editorNote: "A clean creator tool that makes editing feel less intimidating.",
    whyInVault: "Strong for faceless brands and modern content workflows.",
    link: "https://www.descript.com",
    badge: "Editor Favorite"
  },
  {
    name: "Opus Clip",
    category: "Video",
    type: "premium",
    accessLevel: "full",
    isNew: true,
    beginner: true,
    pricing: "Free + Paid",
    bestFor: "Turning long videos into short clips",
    helpsWith: "Reels, TikToks, shorts, repurposing content",
    editorNote: "Great when one piece of content needs to become ten.",
    whyInVault: "Useful for creators and brands trying to scale short-form content.",
    link: "https://www.opus.pro",
    badge: "Growth Tool"
  },
  {
    name: "Pictory",
    category: "Video",
    type: "premium",
    accessLevel: "full",
    isNew: false,
    beginner: true,
    pricing: "Paid",
    bestFor: "Turning text into video content",
    helpsWith: "Faceless videos, content repurposing, visual storytelling",
    editorNote: "Helpful for beginners who want content without being on camera.",
    whyInVault: "Matches the faceless and scalable content angle really well.",
    link: "https://pictory.ai",
    badge: "Faceless Brand"
  },
  {
    name: "Framer",
    category: "Design",
    type: "free",
    isNew: true,
    beginner: false,
    pricing: "Free + Paid",
    bestFor: "Clean modern website design",
    helpsWith: "Landing pages, site building, brand presentation",
    editorNote: "A beautiful tool for people who care how their brand looks online.",
    whyInVault: "Good for founders who want polished websites fast.",
    link: "https://www.framer.com",
    badge: "Luxury Look"
  },
  {
    name: "Tella",
    category: "Marketing",
    type: "premium",
    accessLevel: "full",
    isNew: true,
    beginner: true,
    pricing: "Free + Paid",
    bestFor: "Recording polished product or screen videos",
    helpsWith: "Demos, tutorials, launches, visual storytelling",
    editorNote: "Very clean for showing off products and offers.",
    whyInVault: "A useful tool for online business and brand presentation.",
    link: "https://www.tella.tv",
    badge: "Launch Ready"
  },
  {
    name: "Beehiiv",
    category: "Marketing",
    type: "free",
    isNew: true,
    beginner: true,
    pricing: "Free + Paid",
    bestFor: "Newsletter growth and audience building",
    helpsWith: "Email marketing, newsletters, media-style growth",
    editorNote: "One of the stronger options if newsletters become a real part of the brand.",
    whyInVault: "Perfect for the weekly-drop side of FlowCache's model.",
    link: "https://www.beehiiv.com",
    badge: "Audience Builder"
  },
  {
    name: "Gumroad",
    category: "Business",
    type: "free",
    isNew: false,
    beginner: true,
    pricing: "Free to start",
    bestFor: "Selling digital products",
    helpsWith: "Downloads, guides, templates, starter offers",
    editorNote: "Simple enough to start monetizing without a huge setup.",
    whyInVault: "Good for creators and beginners testing digital income.",
    link: "https://gumroad.com",
    badge: "Money Move"
  },
  {
    name: "Durable",
    category: "Business",
    type: "premium",
    accessLevel: "full",
    isNew: true,
    beginner: true,
    pricing: "Paid",
    bestFor: "Fast business website setup",
    helpsWith: "Starter sites, service business presence, quick launch pages",
    editorNote: "Great for people who need something live quickly.",
    whyInVault: "Useful for small business owners and quick-launch operators.",
    link: "https://durable.co",
    badge: "Quick Launch"
  },
  {
    name: "Notion AI",
    category: "Productivity",
    type: "premium",
    accessLevel: "starter",
    isNew: true,
    beginner: true,
    pricing: "Free + Paid",
    bestFor: "Workspace writing and organization",
    helpsWith: "Notes, planning, docs, team organization",
    editorNote: "Good for people who want one space for ideas and execution.",
    whyInVault: "A staple for organized digital work.",
    link: "https://www.notion.so/product/ai",
    badge: "Workspace Pick"
  },
  {
    name: "Midjourney",
    category: "Design",
    type: "premium",
    accessLevel: "full",
    isNew: true,
    beginner: true,
    pricing: "Paid",
    bestFor: "Creative image generation and concept visuals",
    helpsWith: "Moodboards, concepts, branding, and visual ideation",
    editorNote: "A standout visual tool when you want premium-looking concepts fast.",
    whyInVault: "Fits the premium creative side of FlowCache really well.",
    link: "https://www.midjourney.com/",
    badge: "Creative Tool"
  },
  {
    name: "Tome",
    category: "Business",
    type: "premium",
    accessLevel: "starter",
    isNew: true,
    beginner: true,
    pricing: "Free + Paid",
    bestFor: "Narrative decks and visual storytelling",
    helpsWith: "Presentations, founder decks, sales visuals",
    editorNote: "Useful when you want a polished story without building slides from scratch.",
    whyInVault: "Fits the premium founder-tool angle.",
    link: "https://tome.app",
    badge: "Pitch Ready"
  },
  {
    name: "Runway",
    category: "Video",
    type: "premium",
    accessLevel: "full",
    isNew: true,
    beginner: false,
    pricing: "Free + Paid",
    bestFor: "AI-powered video workflows",
    helpsWith: "Editing, visuals, generative video, content production",
    editorNote: "A strong premium tool for creators who want modern editing power.",
    whyInVault: "One of the cleanest video power tools to have inside a serious vault.",
    link: "https://runwayml.com",
    badge: "Video Power"
  },
  {
    name: "Zapier",
    category: "Automation",
    type: "premium",
    accessLevel: "starter",
    isNew: false,
    beginner: true,
    pricing: "Free + Paid",
    bestFor: "Beginner-friendly automation",
    helpsWith: "App connections, repetitive tasks, workflow shortcuts",
    editorNote: "Easier for beginners than some heavier automation tools.",
    whyInVault: "Starter members should have at least one clear automation option.",
    link: "https://zapier.com",
    badge: "Automation Starter"
  },
  {
    name: "Canva",
    category: "Design",
    type: "free",
    isNew: false,
    beginner: true,
    pricing: "Free + Paid",
    bestFor: "Quick design and content visuals",
    helpsWith: "Posts, graphics, branding assets, presentations",
    editorNote: "Still one of the easiest visual tools for everyday use.",
    whyInVault: "Good free entry point before members move into deeper design tools.",
    link: "https://www.canva.com",
    badge: "Easy Design"
  },
  {
    name: "Jasper",
    category: "Writing",
    type: "premium",
    accessLevel: "starter",
    isNew: false,
    beginner: true,
    pricing: "Paid",
    bestFor: "Marketing copy and brand writing",
    helpsWith: "Ads, emails, content, product copy",
    editorNote: "More brand-focused than general AI writing tools.",
    whyInVault: "Useful for business users building offers and campaigns.",
    link: "https://www.jasper.ai",
    badge: "Marketing Copy"
  },
  {
    name: "Synthesia",
    category: "Video",
    type: "premium",
    accessLevel: "full",
    isNew: false,
    beginner: true,
    pricing: "Paid",
    bestFor: "AI avatar videos",
    helpsWith: "Explainers, faceless content, product communication",
    editorNote: "A good premium tool for scalable video content.",
    whyInVault: "Strong fit for modern online brands and info products.",
    link: "https://www.synthesia.io",
    badge: "Faceless Video"
  },
  {
    name: "Fathom",
    category: "Productivity",
    type: "free",
    isNew: true,
    beginner: true,
    pricing: "Free + Paid",
    bestFor: "AI meeting notes and instant summaries",
    helpsWith: "Meeting recaps, summaries, and follow-up clarity",
    editorNote: "Useful for teams that want clean notes without manual busywork.",
    whyInVault: "A practical meeting tool that saves time after every call.",
    link: "https://www.fathom.ai/",
    badge: "Vault"
  },
  {
    name: "Krisp",
    category: "Productivity",
    type: "free",
    isNew: true,
    beginner: true,
    pricing: "Free + Paid",
    bestFor: "Noise cancellation, transcripts, and meeting help",
    helpsWith: "Cleaner calls, transcripts, and communication quality",
    editorNote: "Strong pick for remote meetings where audio quality matters.",
    whyInVault: "Improves day-to-day call quality and documentation.",
    link: "https://krisp.ai/",
    badge: "Vault"
  },
  {
    name: "Read AI",
    category: "Productivity",
    type: "free",
    isNew: true,
    beginner: true,
    pricing: "Free + Paid",
    bestFor: "Meeting insights, summaries, and action tracking",
    helpsWith: "Follow-ups, accountability, and meeting visibility",
    editorNote: "Helpful when you need clear action items across a team.",
    whyInVault: "Turns meetings into actionable next steps faster.",
    link: "https://www.read.ai/",
    badge: "Vault"
  },
  {
    name: "tl;dv",
    category: "Productivity",
    type: "free",
    isNew: true,
    beginner: true,
    pricing: "Free + Paid",
    bestFor: "Record meetings and pull searchable highlights",
    helpsWith: "Call archives, timestamped notes, and searchable moments",
    editorNote: "Great for reviewing important moments without replaying full calls.",
    whyInVault: "Makes knowledge from meetings easy to find later.",
    link: "https://tldv.io/",
    badge: "Vault"
  },
  {
    name: "Superhuman",
    category: "Productivity",
    type: "premium",
    accessLevel: "starter",
    isNew: true,
    beginner: false,
    pricing: "Paid",
    bestFor: "Fast email workflow for power users",
    helpsWith: "Email triage, speed, and inbox management",
    editorNote: "Best for heavy email operators who value speed.",
    whyInVault: "A premium productivity upgrade for communication-heavy work.",
    link: "https://superhuman.com/",
    badge: "Vault"
  },
  {
    name: "Notta",
    category: "Productivity",
    type: "free",
    isNew: true,
    beginner: true,
    pricing: "Free + Paid",
    bestFor: "Transcription and meeting note organization",
    helpsWith: "Meeting transcripts, notes, and searchable records",
    editorNote: "Good fit for teams that need reliable transcript workflows.",
    whyInVault: "Keeps meeting knowledge organized and easy to revisit.",
    link: "https://www.notta.ai/",
    badge: "Vault"
  },
  {
    name: "Riverside",
    category: "Video",
    type: "premium",
    accessLevel: "starter",
    isNew: true,
    beginner: true,
    pricing: "Free + Paid",
    bestFor: "Studio-quality podcast and video recording",
    helpsWith: "Remote interviews, podcasts, and high-quality recordings",
    editorNote: "Reliable for creators who need pro-grade remote capture.",
    whyInVault: "A strong production tool for podcast and video workflows.",
    link: "https://riverside.fm/",
    badge: "Vault"
  },
  {
    name: "Podcastle",
    category: "Video",
    type: "free",
    isNew: true,
    beginner: true,
    pricing: "Free + Paid",
    bestFor: "Podcast, voice, and video creation in one place",
    helpsWith: "Recording, editing, and content production",
    editorNote: "A clean all-in-one creator option for audio and video.",
    whyInVault: "Great for creators who want one simple production hub.",
    link: "https://podcastle.ai/",
    badge: "Vault"
  },
  {
    name: "Captions",
    category: "Video",
    type: "free",
    isNew: true,
    beginner: true,
    pricing: "Free + Paid",
    bestFor: "Talking videos, edits, subtitles, and clips",
    helpsWith: "Subtitles, short clips, and fast social content editing",
    editorNote: "Handy for quick talking-head videos and short-form output.",
    whyInVault: "Speeds up publishing workflows for content teams.",
    link: "https://www.captions.ai/",
    badge: "Vault"
  },
  {
    name: "Kapwing",
    category: "Video",
    type: "free",
    isNew: true,
    beginner: true,
    pricing: "Free + Paid",
    bestFor: "Browser-based video editing and repurposing",
    helpsWith: "Clipping, resizing, and multi-platform content reuse",
    editorNote: "Useful for teams editing quickly without desktop software.",
    whyInVault: "Makes browser-native video workflows faster and easier.",
    link: "https://www.kapwing.com/",
    badge: "Vault"
  },
  {
    name: "Cleanvoice",
    category: "Video",
    type: "premium",
    accessLevel: "starter",
    isNew: true,
    beginner: true,
    pricing: "Paid",
    bestFor: "Clean up filler words and audio issues quickly",
    helpsWith: "Podcast cleanup and post-production polish",
    editorNote: "Great time saver for creators editing lots of audio.",
    whyInVault: "Adds fast cleanup to content production workflows.",
    link: "https://cleanvoice.ai/",
    badge: "Vault"
  },
  {
    name: "Luma AI",
    category: "Video",
    type: "premium",
    accessLevel: "full",
    isNew: true,
    beginner: false,
    pricing: "Free + Paid",
    bestFor: "Creative video and visual generation tools",
    helpsWith: "Generative visuals, creative video, and visual experiments",
    editorNote: "A modern creative pick for advanced visual workflows.",
    whyInVault: "Adds a cutting-edge creative tool for modern media work.",
    link: "https://lumalabs.ai/",
    badge: "Vault"
  },
  {
    name: "Beautiful.ai",
    category: "Design",
    type: "free",
    isNew: true,
    beginner: true,
    pricing: "Free + Paid",
    bestFor: "Presentation builder with polished smart layouts",
    helpsWith: "Slides, deck structure, and visual presentation quality",
    editorNote: "Good for polished decks with less manual formatting.",
    whyInVault: "Helps users produce cleaner presentations faster.",
    link: "https://www.beautiful.ai/",
    badge: "Vault"
  },
  {
    name: "Uizard",
    category: "Design",
    type: "free",
    isNew: true,
    beginner: true,
    pricing: "Free + Paid",
    bestFor: "Quick UI mockups and app screen concepts",
    helpsWith: "Wireframes, UI concepts, and rapid prototyping",
    editorNote: "Great for moving from idea to UI concept quickly.",
    whyInVault: "Useful for founders and teams sketching product ideas.",
    link: "https://uizard.io/",
    badge: "Vault"
  },
  {
    name: "Visily",
    category: "Design",
    type: "free",
    isNew: true,
    beginner: true,
    pricing: "Free + Paid",
    bestFor: "Wireframes and interface ideas without complexity",
    helpsWith: "Low-friction wireframes and design ideation",
    editorNote: "Beginner-friendly option for interface brainstorming.",
    whyInVault: "Makes wireframing approachable for non-designers.",
    link: "https://www.visily.ai/",
    badge: "Vault"
  },
  {
    name: "Spline",
    category: "Design",
    type: "free",
    isNew: true,
    beginner: false,
    pricing: "Free + Paid",
    bestFor: "Interactive 3D design for modern websites",
    helpsWith: "3D scenes, interactions, and visual web experiences",
    editorNote: "A standout tool when you want web visuals to feel modern.",
    whyInVault: "Adds advanced visual capability for modern web design.",
    link: "https://spline.design/",
    badge: "Vault"
  },
  {
    name: "Windsurf",
    category: "Development",
    type: "free",
    isNew: true,
    beginner: true,
    pricing: "Free + Paid",
    bestFor: "AI-native coding workspace for faster building",
    helpsWith: "Coding speed, project iteration, and developer flow",
    editorNote: "A modern coding environment focused on AI-assisted dev work.",
    whyInVault: "Gives builders a faster path from idea to shipped code.",
    link: "https://windsurf.com/",
    badge: "Vault"
  },
  {
    name: "Tabnine",
    category: "Development",
    type: "free",
    isNew: true,
    beginner: true,
    pricing: "Free + Paid",
    bestFor: "AI code completion and dev assistance",
    helpsWith: "Autocomplete, coding productivity, and dev acceleration",
    editorNote: "Good option for teams looking for coding assistants.",
    whyInVault: "A practical coding companion for everyday development.",
    link: "https://www.tabnine.com/",
    badge: "Vault"
  },
  {
    name: "CodeRabbit",
    category: "Development",
    type: "premium",
    accessLevel: "starter",
    isNew: true,
    beginner: false,
    pricing: "Free + Paid",
    bestFor: "AI-powered pull request reviews",
    helpsWith: "Code review speed, feedback quality, and team workflows",
    editorNote: "Useful for engineering teams with active PR review cycles.",
    whyInVault: "Improves collaboration and review velocity in dev teams.",
    link: "https://coderabbit.ai/",
    badge: "Vault"
  },
  {
    name: "Retool",
    category: "Development",
    type: "premium",
    accessLevel: "starter",
    isNew: true,
    beginner: false,
    pricing: "Free + Paid",
    bestFor: "Internal apps and dashboards for operations",
    helpsWith: "Ops tooling, internal dashboards, and admin workflows",
    editorNote: "Strong for teams shipping internal tools quickly.",
    whyInVault: "A high-impact builder tool for operational leverage.",
    link: "https://retool.com/",
    badge: "Vault"
  },
  {
    name: "Bubble",
    category: "Development",
    type: "free",
    isNew: true,
    beginner: true,
    pricing: "Free + Paid",
    bestFor: "No-code app building for web products",
    helpsWith: "MVPs, internal apps, and no-code product development",
    editorNote: "Good for building prototypes and products without code depth.",
    whyInVault: "Adds a proven no-code path for rapid product building.",
    link: "https://bubble.io/",
    badge: "Vault"
  },
  {
    name: "Appsmith",
    category: "Development",
    type: "free",
    isNew: true,
    beginner: true,
    pricing: "Free + Paid",
    bestFor: "Build admin panels and internal tools quickly",
    helpsWith: "Admin tools, dashboards, and internal software",
    editorNote: "Useful for quickly shipping operational interfaces.",
    whyInVault: "A fast route to internal tooling for growing teams.",
    link: "https://www.appsmith.com/",
    badge: "Vault"
  },
  {
    name: "n8n",
    category: "Automation",
    type: "free",
    isNew: true,
    beginner: false,
    pricing: "Free + Paid",
    bestFor: "Flexible workflow automation with AI support",
    helpsWith: "Multi-step automations, integrations, and process orchestration",
    editorNote: "Powerful option for technical users who want control.",
    whyInVault: "A flexible automation backbone for serious workflows.",
    link: "https://n8n.io/",
    badge: "Vault"
  },
  {
    name: "Pipedream",
    category: "Automation",
    type: "free",
    isNew: true,
    beginner: false,
    pricing: "Free + Paid",
    bestFor: "Connect APIs, automations, and custom workflows",
    helpsWith: "Event-driven automation and backend integrations",
    editorNote: "Great fit for API-heavy automations and custom logic.",
    whyInVault: "Adds developer-friendly automation for custom use cases.",
    link: "https://pipedream.com/",
    badge: "Vault"
  },
  {
    name: "Apify",
    category: "Automation",
    type: "premium",
    accessLevel: "starter",
    isNew: true,
    beginner: false,
    pricing: "Free + Paid",
    bestFor: "Actors, scraping, and automation at scale",
    helpsWith: "Data extraction, scraping pipelines, and web automations",
    editorNote: "Strong for teams that need repeatable data workflows.",
    whyInVault: "Extends automation options into scalable web data systems.",
    link: "https://apify.com/",
    badge: "Vault"
  },
  {
    name: "Rows",
    category: "Automation",
    type: "free",
    isNew: true,
    beginner: true,
    pricing: "Free + Paid",
    bestFor: "Spreadsheet workflows with live integrations",
    helpsWith: "Data workflows, connected sheets, and team reporting",
    editorNote: "Good for ops teams blending spreadsheets with live data.",
    whyInVault: "Makes spreadsheet-based workflows more dynamic and connected.",
    link: "https://rows.com/",
    badge: "Vault"
  },
  {
    name: "Hex",
    category: "Automation",
    type: "premium",
    accessLevel: "full",
    isNew: true,
    beginner: false,
    pricing: "Free + Paid",
    bestFor: "Collaborative data work and analysis workspace",
    helpsWith: "Analysis, collaboration, and data product workflows",
    editorNote: "Strong for teams that combine analytics and collaboration.",
    whyInVault: "Brings modern collaborative analytics into the vault.",
    link: "https://hex.tech/",
    badge: "Vault"
  },
  {
    name: "Attio",
    category: "Business",
    type: "free",
    isNew: true,
    beginner: true,
    pricing: "Free + Paid",
    bestFor: "Modern CRM for flexible pipelines and teams",
    helpsWith: "CRM management, pipelines, and contact workflows",
    editorNote: "A modern CRM option for agile teams.",
    whyInVault: "Useful for teams that need adaptable sales workflows.",
    link: "https://attio.com/",
    badge: "Vault"
  },
  {
    name: "Folk",
    category: "Business",
    type: "free",
    isNew: true,
    beginner: true,
    pricing: "Free + Paid",
    bestFor: "Relationship CRM for outreach and collaboration",
    helpsWith: "Outreach, contact tracking, and team collaboration",
    editorNote: "Good for relationship-driven growth and partnerships.",
    whyInVault: "Supports founder and team networking workflows.",
    link: "https://www.folk.app/",
    badge: "Vault"
  },
  {
    name: "Typeform",
    category: "Business",
    type: "free",
    isNew: true,
    beginner: true,
    pricing: "Free + Paid",
    bestFor: "Beautiful forms, quizzes, and lead capture",
    helpsWith: "Lead collection, surveys, and customer input",
    editorNote: "A polished form tool with strong user experience.",
    whyInVault: "Great for audience growth and lead generation.",
    link: "https://www.typeform.com/",
    badge: "Vault"
  },
  {
    name: "Tally",
    category: "Business",
    type: "free",
    isNew: true,
    beginner: true,
    pricing: "Free + Paid",
    bestFor: "Simple form builder with clean modern layouts",
    helpsWith: "Forms, intake workflows, and lightweight data capture",
    editorNote: "Fast and easy form option without heavy setup.",
    whyInVault: "Useful for quick forms and operational workflows.",
    link: "https://tally.so/",
    badge: "Vault"
  },
  {
    name: "Fillout",
    category: "Business",
    type: "free",
    isNew: true,
    beginner: true,
    pricing: "Free + Paid",
    bestFor: "Forms, surveys, quizzes, and smart embeds",
    helpsWith: "Interactive forms, onboarding, and data collection",
    editorNote: "Solid for advanced form flows with modern UX.",
    whyInVault: "Adds flexible form workflows for business use cases.",
    link: "https://www.fillout.com/",
    badge: "Vault"
  },
  {
    name: "Kit",
    category: "Business",
    type: "free",
    isNew: true,
    beginner: true,
    pricing: "Free + Paid",
    bestFor: "Email marketing and creator audience tools",
    helpsWith: "Email campaigns, creator monetization, and growth",
    editorNote: "Good for creators building audience and email revenue.",
    whyInVault: "Supports audience growth and creator business systems.",
    link: "https://kit.com/",
    badge: "Vault"
  },
  {
    name: "Futurepedia",
    category: "Research",
    type: "premium",
    accessLevel: "starter",
    isNew: true,
    beginner: true,
    pricing: "Free + Paid",
    bestFor: "Discovering AI tools by category",
    helpsWith: "Tool research, inspiration, market awareness",
    editorNote: "Useful when you want category-based discovery fast.",
    whyInVault: "Matches the discovery DNA of FlowCache.",
    link: "https://www.futurepedia.io",
    badge: "Directory Pick"
  },
  {
    name: "Elicit",
    category: "Research",
    type: "premium",
    accessLevel: "starter",
    isNew: true,
    beginner: true,
    pricing: "Free + Paid",
    bestFor: "Literature reviews and paper-based research workflows",
    helpsWith: "Paper search, summaries, evidence gathering, research organization",
    editorNote: "Feels much more serious than surface-level searching when you want actual research support.",
    whyInVault: "A strong premium research tool for people who want smarter sourcing and synthesis.",
    link: "https://elicit.com/",
    badge: "Research Deep Dive"
  },
  {
    name: "Scite",
    category: "Research",
    type: "premium",
    accessLevel: "full",
    isNew: true,
    beginner: false,
    pricing: "Paid",
    bestFor: "Checking whether research claims are supported or challenged",
    helpsWith: "Citations, literature validation, research discovery, claim checking",
    editorNote: "Very good for making the research section of the vault feel more credible and high-level.",
    whyInVault: "Adds a sharper citation-first tool that feels premium and intelligent.",
    link: "https://scite.ai/",
    badge: "Citation Intel"
  },
  {
    name: "Consensus",
    category: "Research",
    type: "premium",
    accessLevel: "starter",
    isNew: true,
    beginner: true,
    pricing: "Free + Paid",
    bestFor: "Finding answers inside peer-reviewed research fast",
    helpsWith: "Science-backed search, evidence summaries, faster topic understanding",
    editorNote: "A clean choice for users who want research answers without digging through messy results.",
    whyInVault: "Fits the polished research side of FlowCache really well.",
    link: "https://consensus.app/",
    badge: "Science Search"
  },
  {
    name: "Genspark",
    category: "Hidden Gems",
    type: "premium",
    accessLevel: "full",
    isNew: true,
    beginner: true,
    pricing: "Free + Paid",
    bestFor: "All-in-one AI workspace and agent-style task execution",
    helpsWith: "Research, docs, slides, meeting help, and multi-step work",
    editorNote: "Feels newer and more under-the-radar than the same obvious names everybody keeps listing.",
    whyInVault: "Great hidden-gem energy and matches the premium discovery vibe.",
    link: "https://www.genspark.ai/",
    badge: "Underwraps Pick"
  },
  {
    name: "Airtable",
    category: "Business",
    type: "premium",
    accessLevel: "starter",
    isNew: true,
    beginner: true,
    pricing: "Free + Paid",
    bestFor: "Building AI-powered workflows, apps, and business systems",
    helpsWith: "Operations, data organization, internal tools, AI workflows",
    editorNote: "This makes the vault feel more like serious business infrastructure, not just cool apps.",
    whyInVault: "A polished operations tool for founders and teams building real systems.",
    link: "https://www.airtable.com/",
    badge: "Ops Stack"
  },
  {
    name: "Loom",
    category: "Productivity",
    type: "free",
    isNew: true,
    beginner: true,
    pricing: "Free + Paid",
    bestFor: "Fast async screen recordings and AI-supported video messaging",
    helpsWith: "Walkthroughs, updates, handoffs, client communication, team clarity",
    editorNote: "One of those tools that instantly makes online work smoother.",
    whyInVault: "Adds a super practical communication tool people actually use all the time.",
    link: "https://www.loom.com/",
    badge: "Async Essential"
  },
  {
    name: "Manychat",
    category: "Marketing",
    type: "premium",
    accessLevel: "starter",
    isNew: true,
    beginner: true,
    pricing: "Free + Paid",
    bestFor: "Automating Instagram, WhatsApp, and messenger lead flows",
    helpsWith: "DM funnels, follower engagement, lead capture, chat automation",
    editorNote: "Very good for creators and brands trying to turn attention into actual leads.",
    whyInVault: "Brings a money-making marketing angle to the vault.",
    link: "https://manychat.com/",
    badge: "DM Automation"
  },
  {
    name: "Semrush",
    category: "Marketing",
    type: "premium",
    accessLevel: "full",
    isNew: true,
    beginner: false,
    pricing: "Paid",
    bestFor: "Brand visibility, SEO, AI search, and digital growth tracking",
    helpsWith: "Keyword research, site audits, competitor research, search visibility",
    editorNote: "A heavyweight platform that makes the vault feel more official and business-ready.",
    whyInVault: "Useful for serious growth, content strategy, and search visibility work.",
    link: "https://www.semrush.com/",
    badge: "Growth Intelligence"
  },
  {
    name: "Ahrefs",
    category: "Marketing",
    type: "premium",
    accessLevel: "full",
    isNew: true,
    beginner: false,
    pricing: "Paid",
    bestFor: "SEO research, content opportunities, and traffic intelligence",
    helpsWith: "Keywords, backlinks, audits, content planning, visibility tracking",
    editorNote: "Another serious operator tool that adds weight to the premium side of FlowCache.",
    whyInVault: "Strong fit for founders, marketers, and people building real traffic systems.",
    link: "https://ahrefs.com/",
    badge: "SEO Power"
  },
  {
    name: "v0",
    category: "Development",
    type: "premium",
    accessLevel: "full",
    isNew: true,
    beginner: false,
    pricing: "Free + Paid",
    bestFor: "Generating real code and fast product interfaces from prompts",
    helpsWith: "UI building, prototypes, full-stack ideas, design-to-code workflows",
    editorNote: "Makes the dev section feel much more current and premium.",
    whyInVault: "A strong modern builder tool for product-minded users.",
    link: "https://v0.dev/",
    badge: "UI Builder"
  },
  {
    name: "Bolt",
    category: "Development",
    type: "premium",
    accessLevel: "starter",
    isNew: true,
    beginner: true,
    pricing: "Free + Paid",
    bestFor: "Building websites, apps, and prototypes quickly with prompts",
    helpsWith: "Rapid prototyping, site creation, product demos, faster iteration",
    editorNote: "Clean option for people who want to build faster without getting buried in setup.",
    whyInVault: "Fits the modern builder/founder lane really well.",
    link: "https://bolt.new/",
    badge: "Fast Builder"
  },
  {
    name: "Lovable",
    category: "Development",
    type: "premium",
    accessLevel: "starter",
    isNew: true,
    beginner: true,
    pricing: "Free + Paid",
    bestFor: "Building apps and websites fast without deep coding skills",
    helpsWith: "MVPs, websites, app concepts, shipping product ideas faster",
    editorNote: "A nice fit for founder energy and fast-building users.",
    whyInVault: "Adds a current no-code-meets-AI builder that people will actually want to test.",
    link: "https://lovable.dev/",
    badge: "Vibe Builder"
  },
  {
    name: "Replit",
    category: "Development",
    type: "free",
    isNew: true,
    beginner: true,
    pricing: "Free + Paid",
    bestFor: "Prompting apps and websites into existence from the browser",
    helpsWith: "App building, testing, launching, coding without setup headaches",
    editorNote: "A very strong free-facing builder to balance the premium dev tools.",
    whyInVault: "Good bridge tool for beginners moving toward more advanced building.",
    link: "https://replit.com/",
    badge: "Build From Prompt"
  },
  {
    name: "Softr",
    category: "Business",
    type: "premium",
    accessLevel: "starter",
    isNew: true,
    beginner: true,
    pricing: "Free + Paid",
    bestFor: "Client portals, internal tools, and business apps without code",
    helpsWith: "Portals, internal dashboards, workflows, branded business tools",
    editorNote: "Really good for people building useful client-facing systems fast.",
    whyInVault: "Makes the business section feel more polished and service-based.",
    link: "https://www.softr.io/",
    badge: "Client Portal"
  },
  {
    name: "HeyGen",
    category: "Video",
    type: "premium",
    accessLevel: "full",
    isNew: true,
    beginner: true,
    pricing: "Free + Paid",
    bestFor: "Creating polished AI avatar and narrated brand videos",
    helpsWith: "Explainers, talking videos, multilingual content, faceless video workflows",
    editorNote: "Very clean premium video tool for modern online brands.",
    whyInVault: "Adds a sharp, high-converting video option to the premium library.",
    link: "https://www.heygen.com/",
    badge: "Avatar Studio"
  }
];

const toolGrid = document.getElementById("toolGrid");
const weeklyGrid = document.getElementById("weeklyGrid");
const featuredToolCard = document.getElementById("featuredToolCard");
const freePreviewGrid = document.getElementById("freePreviewGrid");
const searchInput = document.getElementById("toolSearch");
const filterButtons = document.querySelectorAll(".filter-btn");
const typeButtons = document.querySelectorAll(".type-btn");
const menuToggle = document.getElementById("menuToggle");
const menuDropdown = document.getElementById("menuDropdown");
const premiumVaultSection = document.getElementById("premiumVault");
const vaultGate = document.getElementById("vaultGate");
const vaultContent = document.getElementById("vaultContent");

const FULL_VAULT_CHECKOUT_URL =
  "https://flowcache.lemonsqueezy.com/checkout/buy/da14bb04-717c-43fe-a4aa-21157b08c077";
const STARTER_VAULT_CHECKOUT_URL =
  "https://flowcache.lemonsqueezy.com/checkout/buy/fd6eb8ba-1bcc-49be-bc7d-205867dd5f51";

let currentCategory = "all";
let currentType = "all";

function getUser() {
  return JSON.parse(localStorage.getItem("flowcache_user")) || {};
}

function hasVaultAccess() {
  const user = getStoredUser();
  return userHasStarterAccess(user);
}

function getStoredUser() {
  try {
    return JSON.parse(localStorage.getItem("flowcache_user")) || null;
  } catch {
    return null;
  }
}

function normalizeValue(value) {
  return String(value || "").trim().toLowerCase();
}

function getUserPlan(user = getStoredUser()) {
  return normalizeValue(user?.plan || "free");
}

function isUserActive(user = getStoredUser()) {
  const status = normalizeValue(user?.subscriptionStatus);
  return ["active", "paid", "trialing", "on_trial"].includes(status);
}

function userIsOwner(user = getStoredUser()) {
  return Boolean(user?.isOwner);
}

function userHasStarterAccess(user = getStoredUser()) {
  const plan = getUserPlan(user);
  return userIsOwner(user) || (isUserActive(user) && ["starter", "full", "owner"].includes(plan));
}

function userHasFullAccess(user = getStoredUser()) {
  const plan = getUserPlan(user);
  return userIsOwner(user) || (isUserActive(user) && ["full", "owner"].includes(plan));
}

function getCurrentPage() {
  const path = window.location.pathname.toLowerCase();
  if (path.includes("vault.html")) return "vault";
  if (path.includes("newsletter.html")) return "newsletter";
  if (path.includes("login.html")) return "login";
  return "home";
}

function applyUrlAccessFlags() {
  const pageParams = new URLSearchParams(window.location.search);

  if (pageParams.get("logout") === "true") {
    localStorage.removeItem("flowcache_user");
  }

  if (pageParams.get("access") === "true" || pageParams.get("owner") === "true") {
    const existingUser = getStoredUser() || {};

    localStorage.setItem(
      "flowcache_user",
      JSON.stringify({
        ...existingUser,
        hasAccess: true,
        isOwner: pageParams.get("owner") === "true" || existingUser.isOwner === true,
        plan:
          pageParams.get("owner") === "true"
            ? "owner"
            : existingUser.plan || "full",
        subscriptionStatus: "active"
      })
    );
  }
}

function canAccessTool(tool, user = getStoredUser()) {
  if (tool.type !== "premium") return true;
  if (userIsOwner(user)) return true;
  if (!isUserActive(user)) return false;

  const plan = getUserPlan(user);
  const accessLevel = normalizeValue(tool.accessLevel || "full");

  if (accessLevel === "starter") {
    return ["starter", "full", "owner"].includes(plan);
  }

  return ["full", "owner"].includes(plan);
}

function getToolCheckoutLink(tool) {
  return normalizeValue(tool.accessLevel || "full") === "starter"
    ? STARTER_VAULT_CHECKOUT_URL
    : FULL_VAULT_CHECKOUT_URL;
}

function getLockedButtonLabel(tool) {
  return normalizeValue(tool.accessLevel || "full") === "starter"
    ? "🔓 Unlock Starter Access"
    : "🔓 Unlock Full Vault";
}

function matchesSearch(tool, searchValue) {
  if (!searchValue) return true;

  const haystack = [
    tool.name,
    tool.category,
    tool.bestFor,
    tool.helpsWith,
    tool.badge,
    tool.pricing,
    tool.editorNote,
    tool.whyInVault
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(searchValue);
}

function matchesCategory(tool) {
  return currentCategory === "all" || tool.category === currentCategory;
}

function matchesType(tool, page) {
  if (currentType === "all") return true;
  if (currentType === "new") return Boolean(tool.isNew);
  if (currentType === "beginner") return Boolean(tool.beginner);
  if (currentType === "premium") return tool.type === "premium";
  if (currentType === "free") {
    if (page === "vault") return false;
    return tool.type === "free";
  }
  return true;
}

function getToolsForCurrentPage() {
  const page = getCurrentPage();
  const searchValue = normalizeValue(searchInput?.value);

  let sourceTools = [];

  if (page === "home") {
    sourceTools = tools.filter((tool) => tool.type === "free");
  } else if (page === "vault") {
    sourceTools = tools.filter((tool) => tool.type === "premium");
  } else {
    sourceTools = tools;
  }

  const filtered = sourceTools.filter((tool) => {
    return (
      matchesCategory(tool) &&
      matchesType(tool, page) &&
      matchesSearch(tool, searchValue)
    );
  });

  if (page === "home") {
    return filtered.slice(0, 5);
  }

  return filtered;
}

function getToolSummary(tool) {
  return tool.bestFor || tool.helpsWith || tool.editorNote || "";
}

function getToolSupportLine(tool) {
  return tool.helpsWith || tool.whyInVault || "";
}

function getWeeklyLabel(tool) {
  if (tool.badge && tool.badge !== "Vault") return tool.badge;
  if (tool.beginner) return "Beginner Friendly";
  if (tool.type === "premium") return "Premium Pick";
  return "New This Week";
}

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function createToolCard(tool, options = {}) {
  const { compact = false } = options;

  const isPremium = tool.type === "premium";
  const unlocked = canAccessTool(tool);
  const lockedByVault = isPremium && !unlocked;

  const category = tool.category || "Tool";
  const badge = tool.badge || (isPremium ? "Curated Drop" : "Featured Tool");
  const summary = getToolSummary(tool) || "Curated tool access inside FlowCache.";
  const supportLine =
    getToolSupportLine(tool) || "Selected for speed, usefulness, and modern work.";
  const editorNote = tool.editorNote || "";

  const cardStateClass = isPremium
    ? `premium-card ${unlocked ? "premium-open" : "premium-locked"} ${lockedByVault ? "locked-tool" : ""}`
    : "free-card";

  const actionHref =
    isPremium && !unlocked ? getToolCheckoutLink(tool) : tool.link;

  const actionLabel =
    isPremium && !unlocked ? getLockedButtonLabel(tool) : "Visit Tool";

  const actionClass =
    isPremium && !unlocked ? "locked-btn" : "visit-btn";

  return `
    <article class="tool-card ${compact ? "homepage-tool-card" : ""} ${cardStateClass}">
      <div class="tool-card-glow"></div>

      <div class="tool-card-status">
        <div class="tool-status-copy">
          <span class="tool-status-kicker">${isPremium ? "Paid Access" : "New Drop"}</span>
          <span class="tool-status-note">
            ${
              lockedByVault
                ? "Visible now, unlock to open"
                : isPremium
                ? "Included in your access"
                : "Open to explore now"
            }
          </span>
        </div>

        <div class="tool-status-right">
          <span class="tool-access ${isPremium ? "premium" : "free"}">
            ${isPremium ? "Paid" : "New Drop"}
          </span>
          <span class="tool-fresh-pill">
            ${tool.isNew ? "Fresh Find" : "Curated"}
          </span>
        </div>
      </div>

      <div class="tool-card-content">
        <div class="tool-card-top">
          <span class="tool-category">${escapeHtml(category)}</span>
          <span class="luxury-badge">${escapeHtml(badge)}</span>
        </div>

        <div class="tool-card-middle">
          <h3>${escapeHtml(tool.name)}</h3>
          <p class="tool-summary">${escapeHtml(summary)}</p>
        </div>

        <div class="tool-card-divider"></div>

        <div class="tool-card-bottom">
          <p class="tool-support">${escapeHtml(supportLine)}</p>
          ${
            editorNote && !compact
              ? `<p class="editor-note">${escapeHtml(editorNote)}</p>`
              : ""
          }
        </div>
      </div>

      ${
        lockedByVault
          ? `
        <div class="vault-lock-panel">
          <div class="vault-lock-core">
            <div class="vault-lock-icon"><span></span></div>
            <p class="vault-lock-title">Premium Access</p>
            <p class="vault-lock-text">Blurred preview only until unlocked.</p>
          </div>
        </div>
      `
          : ""
      }

      <div class="tool-card-action">
        <a
          href="${escapeHtml(actionHref || "#")}"
          target="_blank"
          rel="noopener noreferrer"
          class="${actionClass}"
        >
          ${escapeHtml(actionLabel)}
        </a>
      </div>
    </article>
  `;
}

function bindLockedPremiumCardHandlers() {
  if (hasVaultAccess()) return;

  const premiumCards = toolGrid?.querySelectorAll(".tool-card.premium-card.premium-locked") || [];

  premiumCards.forEach((card) => {
    card.addEventListener("click", (e) => {
      const clickedButton = e.target.closest(".locked-btn");
      if (!clickedButton) {
        e.preventDefault();
      }
    });
  });
}

function renderTools() {
  if (!toolGrid) return;

  const page = getCurrentPage();
  const toolsToRender = getToolsForCurrentPage();

  if (!toolsToRender.length) {
    toolGrid.innerHTML = `
      <div class="vault-empty">
        <h3>No tools found</h3>
        <p>${
          page === "vault" && currentType === "free"
            ? "Free tools live in the section above. This grid is for premium tools."
            : "Try a different search or category."
        }</p>
      </div>
    `;
    return;
  }

  toolGrid.innerHTML = toolsToRender
    .map((tool) =>
      createToolCard(tool, {
        compact: page === "home"
      })
    )
    .join("");

  bindLockedPremiumCardHandlers();
}

function renderWeeklyTools() {
  if (!weeklyGrid) return;

  const weeklyTools = tools
    .filter((tool) => tool.isNew)
    .slice(0, 4);

  weeklyGrid.innerHTML = weeklyTools
    .map(
      (tool) => `
        <article class="weekly-card weekly-editorial-card">
          <div>
            <span class="weekly-badge">${getWeeklyLabel(tool)}</span>
            <p class="mini-label">${tool.category}</p>
            <h3>${tool.name}</h3>
            <p class="weekly-summary">${tool.bestFor}</p>
            <p class="weekly-support">${tool.helpsWith}</p>
          </div>

          <div class="weekly-footer">
            <span class="weekly-footer-tag">${tool.type === "free" ? "New Drop" : "Paid Access"}</span>
            <span class="weekly-footer-note">${tool.beginner ? "Easy Start" : "Power Pick"}</span>
          </div>
        </article>
      `
    )
    .join("");
}

function renderFeaturedTool() {
  if (!featuredToolCard) return;

  const featured =
    tools.find((tool) => tool.name === "Perplexity") || tools[0];

  featuredToolCard.innerHTML = `
    <div class="featured-meta">
      <span>${featured.category}</span>
      <span>${featured.type === "free" ? "Free Access" : "Premium Access"}</span>
    </div>
    <span class="luxury-badge">${featured.badge || "Editor Pick"}</span>
    <h3>${featured.name}</h3>
    <p class="tool-summary">${featured.bestFor || ""}</p>
    <p class="tool-support">${featured.helpsWith || ""}</p>
    <p class="editor-note">${featured.editorNote || ""}</p>
  `;
}

function renderFreePreview() {
  if (!freePreviewGrid) return;

  const freePreviewTools = tools
    .filter((tool) => tool.type === "free")
    .slice(0, 5);

  freePreviewGrid.innerHTML = freePreviewTools
    .map((tool) => createToolCard(tool, { compact: false }))
    .join("");
}

function initFilters() {
  if (filterButtons.length) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
        currentCategory = button.dataset.filter;
        renderTools();
      });
    });
  }

  if (typeButtons.length) {
    typeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        typeButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
        currentType = button.dataset.type;
        renderTools();
      });
    });
  }

  if (searchInput) {
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
      }
    });

    searchInput.addEventListener("input", () => {
      const currentScroll = window.scrollY;
      renderTools();
      window.scrollTo(0, currentScroll);
    });
  }
}

function initMenu() {
  if (!menuToggle || !menuDropdown) return;

  menuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    menuDropdown.classList.toggle("show");
  });

  document.addEventListener("click", (e) => {
    const clickedInsideMenu = menuDropdown.contains(e.target);
    const clickedButton = menuToggle.contains(e.target);

    if (!clickedInsideMenu && !clickedButton) {
      menuDropdown.classList.remove("show");
    }
  });

  const dropdownLinks = menuDropdown.querySelectorAll("a");
  dropdownLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuDropdown.classList.remove("show");
    });
  });
}

function init() {
  applyUrlAccessFlags();
  initMenu();
  initFilters();
  renderFreePreview();
  renderTools();
  renderWeeklyTools();
  renderFeaturedTool();
  applyVaultState();
}

document.addEventListener("DOMContentLoaded", init);

// ==========================
// APPLY VAULT STATE
// ==========================
function applyVaultState() {
  const hasAccess = hasVaultAccess();

  document.body.classList.toggle("vault-locked", !hasAccess);
  document.body.classList.toggle("vault-member", hasAccess);

  if (vaultContent) {
    vaultContent.style.display = "block";
  }

  if (vaultGate) {
    vaultGate.style.display = hasAccess ? "none" : "flex";
  }

  if (premiumVaultSection) {
    premiumVaultSection.classList.toggle("locked-vault", !hasAccess);
    premiumVaultSection.classList.toggle("unlocked-vault", hasAccess);
  }
}

document.addEventListener("DOMContentLoaded", applyVaultState);
