import { render, h } from "preact";
import Game from "./game";

window.addEventListener("load", () => {
  const root = document.getElementById("root");
  render(h(Game, null), root);
});
