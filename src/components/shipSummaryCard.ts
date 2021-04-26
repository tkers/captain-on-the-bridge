import { h } from "preact";
import ModuleCard from "./ModuleSummaryCard";
import { useState } from "../predux";

const ShipSummaryCard = ({ ship }) => {
  const hpbar = [];
  for (let i = 0; i < ship.maxHealth; i++) {
    hpbar.push(
      h("div", {
        class: `bar ${
          i < ship.health ? (ship.health === 1 ? "warn" : "on") : ""
        }`,
        style: `animation-delay: ${i * 0.25}s; transition-delay: ${
          (ship.maxHealth - i) * 0.05
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
