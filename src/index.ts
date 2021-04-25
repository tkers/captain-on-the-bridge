import { Spacecraft, fighter, intercepter, cruiser } from "./ships";

const ensureArray = (x) => (x instanceof Array ? x : [x]);
const appendElems = (par, elems) =>
  ensureArray(elems).forEach((e) => par.appendChild(e));

const createCard = (html, onclick) => {
  const elem = document.createElement("div");
  elem.className = "card";
  elem.onclick = onclick;
  elem.innerHTML = html;
  return elem;
};

const selectShip = (ship: Spacecraft) => {
  document.getElementById("ship-name").textContent = ship.name;
  document.getElementById("ship-atk").textContent = `${ship.attack}`;
  document.getElementById("ship-def").textContent = `${ship.defense}`;
  document.getElementById("ship-spd").textContent = `${ship.speed}`;
};

const createShipCard = (ship: Spacecraft) => {
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
  const ship1 = createShipCard(fighter);
  const ship2 = createShipCard(intercepter);
  const ship3 = createShipCard(cruiser);
  const options = createdCentered([ship1, ship2, ship3]);
  setRootContent([title, options]);
}

let root;
function setRootContent(elems) {
  root.innerHTML = "";
  appendElems(root, elems);
}

export function start(_root: HTMLElement) {
  root = _root;
  pickShipPhase();
}
