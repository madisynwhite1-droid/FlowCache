const tools = [
  {name:"Perplexity",category:"Research",type:"free"},
  {name:"Claude",category:"Writing",type:"free"},
  {name:"Taskade",category:"Productivity",type:"free"},
  {name:"Framer",category:"Design",type:"free"},
  {name:"Beehiiv",category:"Marketing",type:"free"},
];

const grid = document.getElementById("toolGrid");
const weekly = document.getElementById("weeklyGrid");

function render() {
  grid.innerHTML = tools.map(t=>`
    <div class="vault-card">
      <h3>${t.name}</h3>
      <p>${t.category}</p>
    </div>
  `).join("");

  weekly.innerHTML = tools.slice(0,3).map(t=>`
    <div class="vault-card">
      <h3>${t.name}</h3>
    </div>
  `).join("");
}

render();

/* RANDOM USERS */
setInterval(()=>{
  document.getElementById("liveUsers").innerText =
    Math.floor(120 + Math.random()*80);
},3000);
