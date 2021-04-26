import { h } from "preact";
import { useState } from "preact/hooks";
import { useState as usePreduxState } from "../predux";

const DiceCost = ({ dice, onclick, current }) => {
  if (current) {
    return h("div", { class: "dice placed" }, current);
  }
  switch (dice.kind) {
    case "ALL":
      return h("div", { class: "dice", onclick }, "*");
    case "ODD":
      return h("div", { class: "dice", onclick }, "ODD");
    case "EVEN":
      return h("div", { class: "dice", onclick }, "EVEN");
    case "MIN":
      return h("div", { class: "dice", onclick }, [dice.amount, ">"]);
    case "MAX":
      return h("div", { class: "dice", onclick }, [dice.amount, "<"]);
  }
};

const fits = (dice, req) => {
  switch (req.kind) {
    case "ALL":
      return true;
    case "ODD":
      return dice % 2 === 1;
    case "EVEN":
      return dice % 2 === 0;
    case "MIN":
      return dice >= req.amount;
    case "MAX":
      return dice <= req.amount;
  }
};

const ModuleCost = ({ module }) => {
  const [connectedDice, setConnectedDice] = useState({});
  const { dice, selectedDice } = usePreduxState();

  const placeDice = (ix) => {
    if (selectedDice === null) return;

    if (module.cost.kind === "TOTAL") {
    } else if (fits(dice[selectedDice], module.cost.values[ix])) {
      setConnectedDice({ [ix]: dice[selectedDice] });
    }
  };

  return module.cost.kind === "TOTAL"
    ? [h("div", { class: "dice" }, "+"), module.cost.amount, " remaining"]
    : module.cost.values.map((v, ix) =>
        h(DiceCost, {
          dice: v,
          onclick: () => placeDice(ix),
          current: connectedDice[ix],
        })
      );
};

export default ModuleCost;
