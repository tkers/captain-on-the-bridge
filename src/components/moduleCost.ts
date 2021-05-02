import { h, FunctionComponent } from "preact";
import { useState, useDispatch } from "../predux";

const DiceCost: FunctionComponent<any> = ({ dice, onclick, current }) => {
  if (current) {
    return h("div", { class: "dice placed" }, current);
  }
  switch (dice.kind) {
    case "ALL":
      return h("div", { class: "dice", onclick }, " ");
    case "EQL":
      return h("div", { class: "dice", onclick }, dice.amount);
    case "ODD":
      return h("div", { class: "dice", onclick }, "ODD");
    case "EVEN":
      return h("div", { class: "dice", onclick }, "EVEN");
    case "MIN":
      return h("div", { class: "dice", onclick }, [dice.amount, "+"]);
    case "MAX":
      return h("div", { class: "dice", onclick }, [dice.amount, "-"]);
  }
};

const fits = (dice, req) => {
  switch (req.kind) {
    case "ALL":
      return true;
    case "EQL":
      return dice === req.amount;
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

const ModuleCost: FunctionComponent<any> = ({ module, index }) => {
  const { dice, selectedDice } = useState();
  const dispatch = useDispatch();

  const placeDice = (ix) => {
    if (selectedDice === null) return;

    if (module.cost.kind === "TOTAL") {
      dispatch({ type: "ASSIGN_DICE", moduleIndex: index, diceIndex: ix });
    } else if (fits(dice[selectedDice], module.cost.values[ix])) {
      dispatch({ type: "ASSIGN_DICE", moduleIndex: index, diceIndex: ix });
    }
  };

  return module.cost.kind === "TOTAL"
    ? [
        h("div", { class: "dice", onclick: () => placeDice(0) }, "+"),
        " ",
        Math.max(0, module.cost.amount - module.cost.assigned),
        " remaining",
      ]
    : module.cost.values.map((v, ix) =>
        h(DiceCost, {
          dice: v,
          onclick: () => placeDice(ix),
          current: module.cost.assigned[ix],
        })
      );
};

export default ModuleCost;
