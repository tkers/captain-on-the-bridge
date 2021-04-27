import { render, h } from "preact";
import Game from "./game";
import { getInitialState, reducer } from "./reducer";
import { PreduxProvider } from "./predux";

window.addEventListener("load", () => {
  const root = document.getElementById("root");
  const initialState = getInitialState();
  render(h(PreduxProvider, { initialState, reducer }, h(Game, null)), root);
});
