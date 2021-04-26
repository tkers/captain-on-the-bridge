import { h } from "preact";

const DiceCost = ({ dice }) => {
  switch (dice.kind) {
    case "ALL":
      return h("div", { class: "dice" }, "*");
    case "ODD":
      return h("div", { class: "dice" }, "ODD");
    case "EVEN":
      return h("div", { class: "dice" }, "EVEN");
    case "MIN":
      return h("div", { class: "dice" }, [dice.amount, ">"]);
    case "MAX":
      return h("div", { class: "dice" }, [dice.amount, "<"]);
  }
};

const ModuleCost = ({ module }) => {
  return module.cost.kind === "TOTAL"
    ? [h("div", { class: "dice" }, "+"), module.cost.amount, " remaining"]
    : module.cost.values.map((v) => h(DiceCost, { dice: v }));
};

export default ModuleCost;
