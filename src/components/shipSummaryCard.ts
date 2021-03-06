import { h, Fragment, FunctionComponent } from "preact";
import ModuleCard from "./ModuleCard";
import { useState } from "../predux";

const ShipSummaryCard: FunctionComponent<any> = ({ ship }) => {
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

  return h(Fragment, null, [
    h("h2", null, ["Spacecraft: ", h("strong", null, ship.name)]),
    h("div", { id: "ship-health" }, hpbar),
    h(
      "div",
      { class: "ship-modules row" },
      ship.modules.map((m, ix) => h(ModuleCard, { module: m, index: ix }))
    ),
  ]);
};

export default ShipSummaryCard;
