import { h } from "preact";

import ModuleCost from "./moduleCost";

const ModuleCard = ({ module }) => {
  return h("div", { class: "card" }, [
    h("strong", null, module.name),
    h("p", null, module.flavor),
    h(ModuleCost, { module: module }),
  ]);
};

const ModuleSummaryCard = ({ ship }) => {
  return h("section", null, [
    h("h2", null, [
      "Modules ",
      h("strong", null, ship.modules.length),
      "/",
      ship.moduleLimit,
    ]),
    h(
      "div",
      { id: "ship-modules" },
      ship.modules.map((m) => h(ModuleCard, { module: m }))
    ),
  ]);
};

export default ModuleSummaryCard;
