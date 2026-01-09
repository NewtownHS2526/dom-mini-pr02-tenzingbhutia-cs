console.log("Space Launch Dash running");

const moveTo = (item, spot) =>
  spot <= 6 ? item.style.setProperty("grid-column", spot) : null;

let apollo_spot = 1;
let nebula_spot = 1;
let comet_spot  = 1;

// Query Selectors 
const apolloBtn = document.querySelector("#apollo-btn");
const nebulaBtn = document.querySelector("#nebula-btn");
const cometBtn  = document.querySelector("#comet-btn");

const apolloRocket = document.querySelector("#apollo-rocket");
const nebulaRocket = document.querySelector("#nebula-rocket");
const cometRocket  = document.querySelector("#comet-rocket");


const winnerBox = document.querySelector("#winner");

// Click Handlers
const boostApollo = () => {
  apollo_spot += 1;
  moveTo(apolloRocket, apollo_spot);
  checkWinner(apollo_spot, "Apollo");
};

const boostNebula = () => {
  nebula_spot += 1;
  moveTo(nebulaRocket, nebula_spot);
  checkWinner(nebula_spot, "Nebula");
};

const boostComet = () => {
  comet_spot += 1;
  moveTo(cometRocket, comet_spot);
  checkWinner(comet_spot, "Comet");
};

// Winners
const checkWinner = (spot, name) => {
  if (spot === 6) {
    winnerBox.innerHTML = `${name} wins the launch! 🚀`;
    disableButtons();
  }
};


const disableButtons = () => {
  apolloBtn.disabled = true;
  nebulaBtn.disabled = true;
  cometBtn.disabled = true;
};

// Events
apolloBtn.addEventListener("click", boostApollo);
nebulaBtn.addEventListener("click", boostNebula);
cometBtn.addEventListener("click", boostComet);
