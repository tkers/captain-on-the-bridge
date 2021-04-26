import { h } from "preact";
import { useState, useDispatch } from "../predux";

const WorldDeck = () => {
  const { worldDeck, currentCard } = useState();
  const dispatch = useDispatch();

  return h(
    "div",
    {
      class: "card stack",
      onclick: () => {
        if (!currentCard) {
          dispatch({ type: "TURN_CARD" });
        }
      },
    },
    worldDeck.length
  );
};

export default WorldDeck;
