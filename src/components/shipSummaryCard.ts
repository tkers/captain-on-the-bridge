import { h } from "preact";

const ShipSummaryCard = ({ ship }) => {
  return h("section", null, [
    h("h2", null, ["Spacecraft: ", h("strong", null, ship.name)]),
    h("div", { id: "ship-health" }, [
      h("div", { class: "bar on", style: "animation-delay: 0s" }),
      h("div", { class: "bar on", style: "animation-delay: 0.2s" }),
      h("div", { class: "bar on", style: "animation-delay: 0.4s" }),
      h("div", { class: "bar on", style: "animation-delay: 0.6s" }),
      h("div", { class: "bar" }),
      h("div", { class: "bar" }),
    ]),
    h("p", null, ship.flavor),
    "Attack: ",
    h("strong", null, ship.attack),
    h("br", null),
    "Defense: ",
    h("strong", null, ship.defense),
    h("br", null),
    "Speed: ",
    h("strong", null, ship.speed),
  ]);
};

export default ShipSummaryCard;
