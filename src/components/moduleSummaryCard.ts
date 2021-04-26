import { h } from "preact";

import ModuleCost from "./moduleCost";

const ModuleCard = ({ module }) => {
  return h("div", { class: "card" }, [
    h("strong", null, module.name),
    h("p", null, module.flavor),
    h("div", { class: "down" }, h(ModuleCost, { module: module })),
  ]);
};

export default ModuleCard;
