import { h } from "preact";

import { useState, useDispatch } from "./predux";
import { fighter, intercepter, cruiser } from "./ships";

import ShipSelectCard from "./components/shipSelectCard";
import ShipSummaryCard from "./components/shipSummaryCard";
import WorldDeck from "./components/worldDeck";
import CurrentCard from "./components/currentCard";
import DiceSection from "./components/diceSection";
import EnemyDiceSection from "./components/enemyDiceSection";

const View = () => {
  const { ship: myShip, inBattle, myTurn } = useState();
  if (!myShip) {
    return [
      h("h2", null, "Choose your starship:"),
      h(ShipSelectCard, { ship: fighter() }),
      h(ShipSelectCard, { ship: intercepter() }),
      h(ShipSelectCard, { ship: cruiser() }),
    ];
  } else {
    return [
      h(ShipSummaryCard, { ship: myShip }),
      h(WorldDeck, null),
      h(CurrentCard, null),
      inBattle ? (myTurn ? h(DiceSection, null) : h(EnemyDiceSection)) : null,
    ];
  }
};

const LDFooter = () => {
  return h(
    "center",
    null,
    h("footer", null, [
      "Captain on the Bridge ",
      h("strong", null, "•"),
      " LD48 version ",
      h("strong", null, "•"),
      " ",
      h(
        "a",
        { href: "https://github.com/tkers/captain-on-the-bridge" },
        "Source"
      ),
    ])
  );
};

const Game = () => {
  const { inBattle, myTurn } = useState();
  return [
    h("nav", { class: inBattle ? (myTurn ? "warn" : "alert") : "safe" }),
    h("main", null, h(View, null)),
    h(LDFooter, null),
  ];
};

export default Game;
