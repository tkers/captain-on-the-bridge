import { h } from "preact";
import { useDispatch, useState } from "../predux";

const CurrentCard = () => {
  const { currentCard: card } = useState();
  if (!card) return null;

  const dispatch = useDispatch();

  if (card.type === "ENCOUNTER") {
    return h(
      "div",
      { class: "card current" },
      h("strong", null, `🛸 ${card.name}`),
      h("p", null, card.flavor),
      h("button", null, "Battle stations!"),
      h(
        "button",
        {
          class: "snd",
          onclick: () => {
            dispatch({ type: "TURN_CARD" });
          },
        },
        "Attempt escape"
      )
    );
  } else if (card.type === "ITEM") {
    return h(
      "div",
      { class: "card current" },
      h("strong", null, `⚡️ ${card.name}`),
      h("p", null, card.flavor),
      h(
        "button",
        {
          onclick: () => {
            dispatch({ type: "INSTALL_ITEM", item: card.item });
            dispatch({ type: "TURN_CARD" });
          },
        },
        "Install"
      ),
      h(
        "button",
        {
          class: "snd",
          onclick: () => {
            dispatch({ type: "TURN_CARD" });
          },
        },
        "Leave it"
      )
    );
  } else if (card.type === "EVENT") {
    return h(
      "div",
      { class: "card current" },
      h("strong", null, `🪐 ${card.name}`),
      h("p", null, card.flavor),
      h(
        "button",
        {
          onclick: () => {
            dispatch({ type: "MAKE_CHOICE", choice: card.options[0] });
            dispatch({ type: "TURN_CARD" });
          },
        },
        card.options[0].name
      ),
      h(
        "button",
        {
          class: "snd",
          onclick: () => {
            dispatch({ type: "MAKE_CHOICE", choice: card.options[1] });
            dispatch({ type: "TURN_CARD" });
          },
        },
        card.options[1].name
      )
    );
  }
};

export default CurrentCard;
