import { h, FunctionComponent } from "preact";
import { useDispatch } from "../predux";

const ShipSelectCard: FunctionComponent<any> = ({ ship }) => {
  const dispatch = useDispatch();
  const onLaunch = () => dispatch({ type: "SELECT_SHIP", ship });

  return h("div", { class: "card" }, [
    h("strong", null, ship.name),
    h("p", null, ship.flavor),
    h("div", { class: "down" }, [
      h("table", null, [
        h("tr", null, [
          h("th", null, "HP"),
          h("th", null, "ATK"),
          h("th", null, "DEF"),
          h("th", null, "SPD"),
        ]),
        h("tr", null, [
          h("td", null, ship.health),
          h("td", null, ship.attack),
          h("td", null, ship.defense),
          h("td", null, ship.speed),
        ]),
      ]),
      h("button", { class: "snd", onclick: onLaunch }, "Launch!"),
    ]),
  ]);
};

export default ShipSelectCard;
