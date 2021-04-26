import { h } from "preact";
import { ModuleCard } from "./ModuleSummaryCard";
import { useState } from "../predux";

const ShipSummaryCard = ({ ship }) => {
  const { hp } = useState();

  const hpbar = [];
  for (let i = 0; i < ship.health; i++) {
    hpbar.push(
      h("div", {
        class: `bar ${i < hp ? (hp === 1 ? "warn" : "on") : ""}`,
        style: `animation-delay: ${i * 0.25}s; transition-delay: ${
          (ship.health - i) * 0.05
        }s`,
      })
    );
  }

  return [
    h("h2", null, ["Spacecraft: ", h("strong", null, ship.name)]),
    h("div", { id: "ship-health" }, hpbar),
    h(
      "div",
      { id: "ship-modules" },
      ship.modules.map((m) => h(ModuleCard, { module: m }))
    ),
  ];
  // ]);
};

export default ShipSummaryCard;
