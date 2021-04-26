import { h } from "preact";
import { useState, useDispatch } from "../predux";

const WorldDeck = () => {
  const { worldDeck } = useState();
  const dispatch = useDispatch();

  return h(
    "div",
    {
      class: "card stack",
      onclick: () => {
        dispatch({ type: "TURN_CARD" });
      },
    },
    worldDeck.length
  );
};

export default WorldDeck;
