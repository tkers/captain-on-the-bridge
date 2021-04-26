import { h } from "preact";
import { useDispatch, useState } from "../predux";
import { intersperse } from "../utils";

const CurrentCard = () => {
  const { currentCard: card, currentEnemy } = useState();
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
    if (currentEnemy === null) {
      return h(
        "div",
        { class: "card current" },
        h("strong", null, `🛸 ${card.name}`),
        h("p", null, card.flavor),
        h("div", { class: "down" }, [
          h(
            "button",
            {
              onclick: () => {
                dispatch({ type: "BATTLE_STATIONS", enemy: card });
              },
            },
            "Battle stations!"
          ),
          h(
            "button",
            {
              class: "snd",
              onclick: () => {
                dispatch({ type: "ATTEMPT_ESCAPE", enemy: card });
              },
            },
            "Attempt escape"
          ),
        ])
      );
    } else {
      const moves = [];
      let dice = [];
      card.moves.forEach((m, i) => {
        dice.push(i + 1);
        if (!m) return;
        moves.push([dice, m]);
        dice = [];
      });

      const abbrevStat = (stat) => {
        switch (stat) {
          case "ATTACK":
            return "ATK";
          case "DEFENSE":
            return "DEF";
          case "SPEED":
            return "SPD";
          case "HEALTH":
            return "HP";
        }
      };

      const movelist = moves.map(([d, m]) => {
        const effect = m.effect.map((e) => {
          if (e.self) {
            if (e.stat === "HEALTH") {
              return `[${e.diff.amount || ""}${
                e.diff.amount && e.diff.stat ? "+" : ""
              }${e.diff.stat ? abbrevStat(e.diff.stat) : ""} HP]`;
            }
          } else {
            if (e.stat === "HEALTH") {
              return `[${e.diff.amount || ""}${
                e.diff.amount && e.diff.stat ? "+" : ""
              }${e.diff.stat ? abbrevStat(e.diff.stat) : ""} DMG]`;
            }
          }
        });

        return h("tr", null, [
          h("th", null, intersperse(d, h("br", null))),
          h("td", null, [
            h("strong", null, m.name),
            " ",
            m.flavor,
            " ",
            h("strong", null, effect),
          ]),
        ]);
      });

      return h(
        "div",
        { class: "card current" },
        h("strong", null, `🛸 ${card.name}`),
        h("table", { class: "movelist" }, movelist),
        h("div", { class: "down" }, [
          "Health: ",
          h("strong", null, currentEnemy),
          "/",
          card.health,
        ])
      );
    }
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
