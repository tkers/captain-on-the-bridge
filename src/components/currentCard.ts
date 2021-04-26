import { h } from "preact";
import { useDispatch, useState } from "../predux";

const CurrentCard = () => {
  const { currentCard: card } = useState();
  if (!card) return null;

  const dispatch = useDispatch();

  if (card.type === "INFO") {
    return h(
      "div",
      { class: "card current" },
      h("strong", null, `☄️ ${card.name}`),
      h("p", null, card.flavor),
      h(
        "div",
        { class: "down" },
        h(
          "button",
          {
            class: "snd",
            onclick: () => {
              dispatch({ type: "TURN_CARD" });
            },
          },
          "OK"
        )
      )
    );
  } else if (card.type === "ENCOUNTER") {
    return h(
      "div",
      { class: "card current" },
      h("strong", null, `🛸 ${card.name}`),
      h("p", null, card.flavor),
      h("div", { class: "down" }, [
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
        ),
      ])
    );
  } else if (card.type === "ITEM") {
    return h(
      "div",
      { class: "card current" },
      h("strong", null, `⚡️ ${card.name}`),
      h("p", null, card.flavor),
      h("div", { class: "down" }, [
        h(
          "button",
          {
            onclick: () => {
              dispatch({ type: "INSTALL_ITEM", item: card.item });
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
        ),
      ])
    );
  } else if (card.type === "EVENT") {
    return h(
      "div",
      { class: "card current" },
      h("strong", null, `🪐 ${card.name}`),
      h("p", null, card.flavor),
      h("div", { class: "down" }, [
        h(
          "button",
          {
            onclick: () => {
              dispatch({ type: "MAKE_CHOICE", choice: card.options[0] });
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
            },
          },
          card.options[1].name
        ),
      ])
    );
  }
};

export default CurrentCard;
