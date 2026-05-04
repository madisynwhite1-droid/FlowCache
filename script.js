const tools = [
  {name:"Perplexity", link:"https://perplexity.ai"},
  {name:"Claude", link:"https://claude.ai"},
  {name:"Taskade", link:"https://taskade.com"},
  {name:"Framer", link:"https://framer.com"},
  {name:"Beehiiv", link:"https://beehiiv.com"}
];

const toolGrid = document.getElementById("toolGrid");
const weeklyGrid = document.getElementById("weeklyGrid");
const search = document.getElementById("toolSearch");

function renderTools(){
  const val = search.value.toLowerCase();

  toolGrid.innerHTML = tools
    .filter(t => t.name.toLowerCase().includes(val))
    .map(t => `
      <div class="card">
        <h3>${t.name}</h3>
        <a href="${t.link}" target="_blank">Visit</a>
      </div>
    `).join("");
}

function renderWeekly(){
  weeklyGrid.innerHTML = tools.slice(0,3).map(t=>`
    <div class="card">
      <h3>${t.name}</h3>
    </div>
  `).join("");
}

search.addEventListener("input", renderTools);

renderTools();
renderWeekly();
