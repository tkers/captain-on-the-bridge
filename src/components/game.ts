import { h, Fragment, FunctionComponent } from "preact";

import { useState, useDispatch } from "../predux";
import { fighter, intercepter, cruiser } from "../ships";

import ShipSelectCard from "./shipSelectCard";
import ShipSummaryCard from "./shipSummaryCard";
import WorldDeck from "./worldDeck";
import CurrentCard from "./currentCard";
import DiceSection from "./diceSection";
import EnemyDiceSection from "./enemyDiceSection";

const View: FunctionComponent = () => {
  const { ship: myShip, inBattle, myTurn } = useState();
  if (!myShip) {
    return h(Fragment, null, [
      h("h2", null, "Choose your starship:"),
      h("div", { class: "row" }, [
        h(ShipSelectCard, { ship: fighter() }),
        h(ShipSelectCard, { ship: intercepter() }),
        h(ShipSelectCard, { ship: cruiser() }),
      ]),
    ]);
  } else {
    return h(Fragment, null, [
      h(ShipSummaryCard, { ship: myShip }),
      h("div", { class: "row" }, [
        h(WorldDeck, null),
        h(CurrentCard, null),
        inBattle
          ? myTurn
            ? h(DiceSection, null)
            : h(EnemyDiceSection, null)
          : null,
      ]),
    ]);
  }
};

const Footer = () => {
  return h(
    "center",
    null,
    h("footer", null, [
      "Captain on the Bridge ",
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

const Game: FunctionComponent = () => {
  const { inBattle, myTurn } = useState();
  return h(Fragment, null, [
    h("nav", { class: inBattle ? (myTurn ? "warn" : "alert") : "safe" }),
    h("main", null, h(View, null)),
    h(Footer, null),
  ]);
};

export default Game;
