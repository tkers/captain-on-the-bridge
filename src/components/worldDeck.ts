import { h, FunctionComponent } from "preact";
import { useState, useDispatch } from "../predux";

const WorldDeck: FunctionComponent = () => {
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
    worldDeck.length,
    h(
      "div",
      { class: "down", style: "line-height: initial; font-size: 60%" },
      "Unexplored Space"
    )
  );
};

export default WorldDeck;
