```javascript
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

const weeklyGrid = document.getElementById("weeklyGrid");
const menuToggle = document.getElementById("menuToggle");
const menuDropdown = document.getElementById("menuDropdown");

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getWeeklyTools() {
  return tools
    .filter((tool) => tool.isNew)
    .slice(0, 4);
}

function createWeeklyCard(tool) {
  const toolUrl = tool.link || "vault.html";
  const actionLabel = tool.type === "premium" ? "Explore pick" : "View tool";

  return `
    <article class="weekly-card">
      <span class="weekly-badge">${escapeHtml(tool.badge || "Fresh Find")}</span>
      <p class="mini-label">${escapeHtml(tool.category || "Tool")}</p>
      <h3>${escapeHtml(tool.name || "Curated Tool")}</h3>
      <p class="weekly-summary">${escapeHtml(tool.bestFor || "")}</p>
      <p class="weekly-support">${escapeHtml(tool.editorNote || tool.helpsWith || "")}</p>

      <div class="weekly-footer">
        <span>${escapeHtml(tool.beginner ? "Beginner friendly" : "Power pick")}</span>
        <a href="${escapeHtml(toolUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(actionLabel)}</a>
      </div>
    </article>
  `;
}

function renderWeeklyTools() {
  if (!weeklyGrid) return;

  const weeklyTools = getWeeklyTools();

  if (!weeklyTools.length) {
    weeklyGrid.innerHTML = `
      <article class="weekly-card">
        <span class="weekly-badge">Coming Soon</span>
        <p class="mini-label">Weekly Drop</p>
        <h3>Fresh finds are being curated.</h3>
        <p class="weekly-summary">Check back soon for the next FlowCache edit.</p>
      </article>
    `;
    return;
  }

  weeklyGrid.innerHTML = weeklyTools.map(createWeeklyCard).join("");
}

function closeMenu() {
  if (!menuDropdown || !menuToggle) return;
  menuDropdown.classList.remove("show");
  menuToggle.setAttribute("aria-expanded", "false");
}

function initMenu() {
  if (!menuToggle || !menuDropdown) return;

  menuToggle.addEventListener("click", (event) => {
    event.stopPropagation();

    const isOpen = menuDropdown.classList.toggle("show");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.addEventListener("click", (event) => {
    const clickedInsideMenu = menuDropdown.contains(event.target);
    const clickedButton = menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedButton) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  menuDropdown.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

function init() {
  initMenu();
  renderWeeklyTools();
}

document.addEventListener("DOMContentLoaded", init);

```
