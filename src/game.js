import { h } from "preact";

import { useState, useDispatch } from "./predux";
import { fighter, intercepter, cruiser } from "./ships";

import ShipSelectCard from "./components/shipSelectCard";
import ShipSummaryCard from "./components/shipSummaryCard";
import WorldDeck from "./components/worldDeck";
import CurrentCard from "./components/currentCard";

const Game = () => {
  const { ship: myShip } = useState();
  if (!myShip) {
    return [
      h("h2", null, "Choose your starship:"),
      // h("center", null, [
      h(ShipSelectCard, { ship: fighter }),
      h(ShipSelectCard, { ship: intercepter }),
      h(ShipSelectCard, { ship: cruiser }),
      // ]),
    ];
  } else {
    return [
      h(ShipSummaryCard, { ship: myShip }),
      h(WorldDeck, null),
      h(CurrentCard, null),
    ];
  }
};

export default Game;
