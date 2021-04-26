import { Spacecraft, Module, fighter, intercepter, cruiser } from "./ships";

const ensureArray = (x) => (x instanceof Array ? x : [x]);
const appendElems = (par, elems) =>
  ensureArray(elems).forEach((e) => par.appendChild(e));
const setElems = (par, elems) => {
  par.innerHTML = "";
  appendElems(par, elems);
};

const createCard = (html, onclick?) => {
  const elem = document.createElement("div");
  elem.className = "card";
  elem.onclick = onclick;
  elem.innerHTML = html;
  return elem;
};

const createSection = (html) => {
  const elem = document.createElement("section");
  elem.innerHTML = html;
  return elem;
};

const createDiceCost = (val) => {
  switch (val.kind) {
    case "ALL":
      return `<div class="dice">*</div>`;
    case "ODD":
      return `<div class="dice">ODD</div>`;
    case "EVEN":
      return `<div class="dice">EVEN</div>`;
    case "MIN":
      return `<div class="dice">${val.amount}&gt;</div>`;
    case "MAX":
      return `<div class="dice">${val.amount}&lt;</div>`;
  }
};

const createModuleCard = (module: Module) => {
  const cost =
    module.cost.kind === "TOTAL"
      ? `<div class="dice">+</div> (${module.cost.amount} remaining)`
      : module.cost.values.map(createDiceCost).join("");

  const html = `
    <strong>${module.name}</strong>
    <p>${module.flavor}</p>
    ${cost}
  `;
  const card = createCard(html);
  return card;
};

const createShipSummaryCard = (ship: Spacecraft) => {
  const html = `
    <h2>Spacecraft: <strong>${ship.name}</strong></h2>
    <div id="ship-health">
      <div class="bar on" style="animation-delay: 0s"></div>
      <div class="bar on" style="animation-delay: 0.2s"></div>
      <div class="bar on" style="animation-delay: 0.4s"></div>
      <div class="bar on" style="animation-delay: 0.6s"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
    <p>${ship.flavor}</p>
    Attack: <strong>${ship.attack}</strong><br />
    Defense: <strong>${ship.defense}</strong><br />
    Speed: <strong>${ship.speed}</strong>
  `;
  return createSection(html);
};

const createShipModulesCard = (ship: Spacecraft) => {
  const html = `
    <h2>
      Modules <strong id="ship-modules-count">${ship.modules.length}</strong>/<span>${ship.moduleLimit}</span>
    </h2>
  `;
  const sect = createSection(html);

  const mdiv = document.createElement("div");
  mdiv.id = "ship-modules";
  const modules = ship.modules.map((m) => createModuleCard(m));
  appendElems(mdiv, modules);

  appendElems(sect, mdiv);

  return sect;
};

const selectShip = (ship: Spacecraft) => {
  $ship = ship;

  setRootContent([createShipSummaryCard(ship), createShipModulesCard(ship)]);
  // document.getElementById("ship-name").textContent = $ship.name;
  // document.getElementById("ship-flavor").textContent = $ship.flavor;
  // document.getElementById("ship-atk").textContent = `${$ship.attack}`;
  // document.getElementById("ship-def").textContent = `${$ship.defense}`;
  // document.getElementById("ship-spd").textContent = `${$ship.speed}`;
  //
  // document.getElementById("ship-health").innerHTML = `
  // <div class="bar on" style="animation-delay: 0s"></div>
  // <div class="bar on" style="animation-delay: 0.2s"></div>
  // <div class="bar on" style="animation-delay: 0.4s"></div>
  // <div class="bar on" style="animation-delay: 0.6s"></div>
  // <div class="bar"></div>
  // <div class="bar"></div>
  // `;

  // document.getElementById(
  //   "ship-modules-count"
  // ).textContent = `${ship.modules.length}`;
  // document.getElementById(
  //   "ship-modules-max"
  // ).textContent = `${ship.moduleLimit}`;

  // const modules = ship.modules.map((m) => createModuleCard(m));
  // setElems(document.getElementById("ship-modules"), modules);
};

const createShipSelectionCard = (ship: Spacecraft) => {
  const html = `
    <strong>${ship.name}</strong>
    <p>${ship.flavor}</p>
    <table>
      <tr>
        <th>ATK</th>
        <th>DEF</th>
        <th>SPD</th>
      </tr>
      <tr>
        <td>${ship.attack}</td>
        <td>${ship.defense}</td>
        <td>${ship.speed}</td>
      </tr>
    </table>
    <button class="snd">Launch!</button>
  `;
  const card = createCard(html, () => selectShip(ship));
  return card;
};

function createTitle(text) {
  const head = document.createElement("h2");
  head.textContent = text;
  return head;
}

function createdCentered(elems) {
  const cent = document.createElement("center");
  appendElems(cent, elems);
  return cent;
}

function pickShipPhase() {
  const title = createTitle("Choose your starship:");
  const ship1 = createShipSelectionCard(fighter);
  const ship2 = createShipSelectionCard(intercepter);
  const ship3 = createShipSelectionCard(cruiser);
  const options = createdCentered([ship1, ship2, ship3]);
  setRootContent([title, options]);
}

let $root, $ship;
function setRootContent(elems) {
  setElems($root, elems);
}

export function start(root: HTMLElement) {
  $root = root;
  pickShipPhase();
}
