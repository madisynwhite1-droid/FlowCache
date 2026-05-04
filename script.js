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
    link: "https://claude.ai",
    badge: "Writer Favorite"
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
    link: "https://www.taskade.com",
    badge: "Beginner Friendly"
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
    link: "https://www.framer.com",
    badge: "Luxury Look"
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
    link: "https://gumroad.com",
    badge: "Money Move"
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
    link: "https://www.canva.com",
    badge: "Easy Design"
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
    link: "https://www.loom.com/",
    badge: "Async Essential"
  },
  {
    name: "Gamma",
    category: "Design",
    type: "premium",
    isNew: true,
    beginner: true,
    pricing: "Free + Paid",
    bestFor: "AI-powered decks, docs, and polished presentations",
    helpsWith: "Presentations, reports, landing-style documents, pitch layouts",
    editorNote: "A strong visual tool for people who want clean content without designing from scratch.",
    link: "https://gamma.app",
    badge: "Featured Tool"
  },
  {
    name: "Make",
    category: "Business",
    type: "premium",
    isNew: true,
    beginner: false,
    pricing: "Free + Paid",
    bestFor: "Visual automations and backend workflows",
    helpsWith: "Connecting tools, automating repetitive work, systems building",
    editorNote: "Very strong once you start thinking like an operator instead of just a user.",
    link: "https://www.make.com",
    badge: "Power Tool"
  },
  {
    name: "Bardeen",
    category: "Business",
    type: "premium",
    isNew: false,
    beginner: false,
    pricing: "Free + Paid",
    bestFor: "Browser automation and repetitive web tasks",
    helpsWith: "Scraping, shortcuts, productivity flows",
    editorNote: "Best for people who spend a lot of time doing repetitive work online.",
    link: "https://www.bardeen.ai",
    badge: "Hidden Gem"
  },
  {
    name: "Elicit",
    category: "Research",
    type: "premium",
    isNew: true,
    beginner: true,
    pricing: "Free + Paid",
    bestFor: "Literature reviews and paper-based research workflows",
    helpsWith: "Paper search, summaries, evidence gathering, research organization",
    editorNote: "Feels more serious than surface-level searching when you want real research support.",
    link: "https://elicit.com/",
    badge: "Research Deep Dive"
  }
];

const FULL_VAULT_CHECKOUT_URL =
  "https://flowcache.lemonsqueezy.com/checkout/buy/da14bb04-717c-43fe-a4aa-21157b08c077";

const toolGrid = document.getElementById("toolGrid");
const weeklyGrid = document.getElementById("weeklyGrid");
const searchInput = document.getElementById("toolSearch");
const filterButtons = document.querySelectorAll(".filter-btn");
const menuToggle = document.getElementById("menuToggle");
const menuDropdown = document.getElementById("menuDropdown");

let currentCategory = "all";

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function normalizeValue(value) {
  return String(value || "").trim().toLowerCase();
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
    tool.editorNote
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(searchValue);
}

function matchesCategory(tool) {
  if (currentCategory === "all") return true;
  
   return normalizeValue(tool.category) === normalizeValue(currentCategory);
}
function getFreeTools() {
  const searchValue = normalizeValue(searchInput?.value);

  return tools
    .filter((tool) => tool.type === "free")
    .filter((tool) => matchesCategory(tool) && matchesSearch(tool, searchValue))
    .slice(0, 5);
}

function createToolCard(tool) {
  const isPremium = tool.type === "premium";
  const actionHref = isPremium ? FULL_VAULT_CHECKOUT_URL : tool.link;
  const actionLabel = isPremium ? "Unlock Access" : "Visit Tool";
  const actionClass = isPremium ? "locked-btn" : "visit-btn";

  return `
    <article class="tool-card ${isPremium ? "premium-card" : "free-card"}">
      <div class="tool-card-glow"></div>

      <div class="tool-card-status">
        <div class="tool-status-copy">
          <span class="tool-status-kicker">${isPremium ? "Paid Access" : "Free Preview"}</span>
          <span class="tool-status-note">
            ${isPremium ? "Preview the vault category" : "Open to explore now"}
          </span>
        </div>

        <div class="tool-status-right">
          <span class="tool-access ${isPremium ? "premium" : "free"}">
            ${isPremium ? "Paid" : "Free"}
          </span>
          <span class="tool-fresh-pill">
            ${tool.isNew ? "Fresh Find" : "Curated"}
          </span>
        </div>
      </div>

      <div class="tool-card-content">
        <div class="tool-card-top">
          <span class="tool-category">${escapeHtml(tool.category)}</span>
          <span class="luxury-badge">${escapeHtml(tool.badge || "Curated")}</span>
        </div>

        <div class="tool-card-middle">
          <h3>${escapeHtml(tool.name)}</h3>
          <p class="tool-summary">${escapeHtml(tool.bestFor || "")}</p>
        </div>

        <div class="tool-card-divider"></div>

        <div class="tool-card-bottom">
          <p class="tool-support">${escapeHtml(tool.helpsWith || "")}</p>
          <p class="editor-note">${escapeHtml(tool.editorNote || "")}</p>
        </div>
      </div>

      <div class="tool-card-action">
        <a
          href="${escapeHtml(actionHref)}"
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

function renderTools() {
  if (!toolGrid) return;

  const toolsToRender = getFreeTools();

  if (!toolsToRender.length) {
    toolGrid.innerHTML = `
      <div class="tool-card">
        <h3>No tools found</h3>
        <p>Try a different search or category.</p>
      </div>
    `;
    return;
  }

  toolGrid.innerHTML = toolsToRender.map(createToolCard).join("");
}

function renderWeeklyTools() {
  if (!weeklyGrid) return;

  const weeklyTools = tools.filter((tool) => tool.isNew).slice(0, 4);

  weeklyGrid.innerHTML = weeklyTools
    .map(
      (tool) => `
        <article class="tool-card weekly-card">
          <span class="weekly-badge">${escapeHtml(tool.badge || "Fresh Find")}</span>
          <p class="mini-label">${escapeHtml(tool.category)}</p>
          <h3>${escapeHtml(tool.name)}</h3>
          <p class="weekly-summary">${escapeHtml(tool.bestFor || "")}</p>
          <p class="weekly-support">${escapeHtml(tool.helpsWith || "")}</p>

          <div class="weekly-footer">
            <span>${tool.type === "free" ? "Free Preview" : "Paid Access"}</span>
            <span>${tool.beginner ? "Beginner Friendly" : "Power Pick"}</span>
          </div>
        </article>
      `
    )
    .join("");
}

function initFilters() {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      currentCategory = button.dataset.filter || "all";
      renderTools();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", renderTools);

    searchInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
      }
    });
  }
}

function initMenu() {
  if (!menuToggle || !menuDropdown) return;

  menuToggle.addEventListener("click", (event) => {
    event.stopPropagation();
    menuDropdown.classList.toggle("show");
  });

  document.addEventListener("click", (event) => {
    const clickedInsideMenu = menuDropdown.contains(event.target);
    const clickedButton = menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedButton) {
      menuDropdown.classList.remove("show");
    }
  });

  menuDropdown.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuDropdown.classList.remove("show");
    });
  });
}

function init() {
  initMenu();
  initFilters();
  renderTools();
  renderWeeklyTools();
}

document.addEventListener("DOMContentLoaded", init);
