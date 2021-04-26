import { render, h } from "preact";
import Game from "./game";
import { initialState, reducer } from "./reducer";
import { PreduxProvider } from "./predux";

window.addEventListener("load", () => {
  const root = document.getElementById("root");
  render(h(PreduxProvider, { initialState, reducer }, h(Game, null)), root);
});
