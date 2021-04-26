import { h } from "preact";
import { useDispatch } from "../predux";

const amount = 12;
const margin = 8;

const WorldDeck = () => {
  const dispatch = useDispatch();
  const turnCard = () => dispatch({ type: "TURN_CARD" });
  const stack = [];
  const offset = (amount - 1) * margin;
  for (let i = 0; i < amount; i++) {
    stack.push(
      h(
        "div",
        {
          class: "card stack",
          style: `position:absolute; top: ${offset - i * margin}px`,
          onclick: i === amount - 1 ? turnCard : undefined,
        },
        "world"
      )
    );
  }
  return h("div", { style: "position:relative" }, stack);
};

export default WorldDeck;
