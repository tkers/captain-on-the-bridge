import { h } from "preact";
import { useState } from "preact/hooks";

import { fighter, intercepter, cruiser } from "./ships";

const ShipSelectCard = ({ ship, onSelect }) => {
  return h("div", { class: "card" }, [
    h("strong", null, ship.name),
    h("p", null, ship.flavor),
    h("table", null, [
      h("tr", null, [
        h("th", null, "ATK"),
        h("th", null, "DEF"),
        h("th", null, "SPD"),
      ]),
      h("tr", null, [
        h("td", null, ship.attack),
        h("td", null, ship.defense),
        h("td", null, ship.speed),
      ]),
    ]),
    h("button", { class: "snd", onclick: () => onSelect(ship) }, "Launch!"),
  ]);
};

const ShipSummaryCard = ({ ship }) => {
  return h("section", null, [
    h("h2", null, ["Spacecraft: ", h("strong", null, ship.name)]),
    h("div", { id: "ship-health" }, [
      h("div", { class: "bar on", style: "animation-delay: 0s" }),
      h("div", { class: "bar on", style: "animation-delay: 0.2s" }),
      h("div", { class: "bar on", style: "animation-delay: 0.4s" }),
      h("div", { class: "bar on", style: "animation-delay: 0.6s" }),
      h("div", { class: "bar" }),
      h("div", { class: "bar" }),
    ]),
    h("p", null, ship.flavor),
    "Attack: ",
    h("strong", null, ship.attack),
    h("br", null),
    "Defense: ",
    h("strong", null, ship.defense),
    h("br", null),
    "Speed: ",
    h("strong", null, ship.speed),
  ]);
};

const DiceCost = ({ dice }) => {
  switch (dice.kind) {
    case "ALL":
      return h("div", { class: "dice" }, "*");
    case "ODD":
      return h("div", { class: "dice" }, "ODD");
    case "EVEN":
      return h("div", { class: "dice" }, "EVEN");
    case "MIN":
      return h("div", { class: "dice" }, [dice.amount, ">"]);
    case "MAX":
      return h("div", { class: "dice" }, [dice.amount, "<"]);
  }
};

const ModuleCard = ({ module }) => {
  const cost =
    module.cost.kind === "TOTAL"
      ? [h("div", { class: "dice" }, "+"), module.cost.amount, " remaining"]
      : module.cost.values.map((v) => h(DiceCost, { dice: v }));
  return h("div", { class: "card" }, [
    h("strong", null, module.name),
    h("p", null, module.flavor),
    cost,
  ]);
};

const ModuleSummaryCard = ({ ship }) => {
  return h("section", null, [
    h("h2", null, [
      "Modules ",
      h("strong", null, ship.modules.length),
      "/",
      ship.moduleLimit,
    ]),
    h(
      "div",
      { id: "ship-modules" },
      ship.modules.map((m) => h(ModuleCard, { module: m }))
    ),
  ]);
};

const Game = () => {
  const [myShip, selectShip] = useState(null);
  if (!myShip) {
    return [
      h("h2", null, "Choose your starship:"),
      h("center", null, [
        h(ShipSelectCard, { ship: fighter, onSelect: selectShip }),
        h(ShipSelectCard, { ship: intercepter, onSelect: selectShip }),
        h(ShipSelectCard, { ship: cruiser, onSelect: selectShip }),
      ]),
    ];
  } else {
    return [
      h(ShipSummaryCard, { ship: myShip }),
      h(ModuleSummaryCard, { ship: myShip }),
    ];
  }
};

export default Game;
