import { render, h } from "preact";
import Game from "./game";
import { PreduxProvider } from "./predux";

window.addEventListener("load", () => {
  const root = document.getElementById("root");
  render(h(PreduxProvider, null, h(Game, null)), root);
});
