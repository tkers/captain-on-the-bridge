import { h, FunctionComponent } from "preact";
import { useDispatch } from "../predux";
import ModuleCost from "./moduleCost";

const isModuleReady = (module) => {
  if (module.cost.kind === "TOTAL") {
    return module.cost.assigned >= module.cost.amount;
  } else {
    return module.cost.values.every((v, ix) => !!module.cost.assigned[ix]);
  }
};

const getEffect = (module) => {
  const attr = module.damage ? "DMG" : "HP";
  const x = module.damage || module.repair;
  const amount = x.kind === "SUM" ? "*" : x.amount;
  return h("p", null, ["[", h("strong", null, [amount, " ", attr]), "]"]);
};

const ModuleCard: FunctionComponent<any> = ({ module, index }) => {
  const dispatch = useDispatch();
  return h("div", { class: "card" }, [
    h("strong", null, module.name),
    h("p", null, module.flavor),
    h("br", null),
    getEffect(module),
    h("div", { class: "down" }, [
      h(ModuleCost, { module: module, index: index }),
      h("br", null),
      h("br", null),
      h(
        "button",
        {
          disabled: !isModuleReady(module),
          onclick: () => {
            if (isModuleReady(module)) {
              dispatch({ type: "USE_WEAPON", index });
            }
          },
        },
        "Use"
      ),
    ]),
  ]);
};

export default ModuleCard;
