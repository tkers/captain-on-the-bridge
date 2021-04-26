import { h } from "preact";
import { useState } from "../predux";

const CurrentCard = () => {
  const { currentCard } = useState();
  return currentCard
    ? h(
        "div",
        { class: "card stack", style: "position:relative; left: 250px" },
        currentCard.text
      )
    : null;
};

export default CurrentCard;
