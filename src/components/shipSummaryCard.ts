import { h } from "preact";
import { ModuleCard } from "./ModuleSummaryCard";

const ShipSummaryCard = ({ ship }) => {
  // return h("section", null, [
  return [
    h("h2", null, ["Spacecraft: ", h("strong", null, ship.name)]),
    h("div", { id: "ship-health" }, [
      h("div", { class: "bar on", style: "animation-delay: 0s" }),
      h("div", { class: "bar on", style: "animation-delay: 0.2s" }),
      h("div", { class: "bar on", style: "animation-delay: 0.4s" }),
      h("div", { class: "bar on", style: "animation-delay: 0.6s" }),
      h("div", { class: "bar" }),
      h("div", { class: "bar" }),
    ]),
    h(
      "div",
      { id: "ship-modules" },
      ship.modules.map((m) => h(ModuleCard, { module: m }))
    ),
  ];
  // ]);
};

export default ShipSummaryCard;
