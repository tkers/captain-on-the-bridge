import { h, FunctionComponent } from "preact";
import { useState } from "preact/hooks";
import { useState as usePreduxState, useDispatch } from "../predux";

const rollDice = (num) => {
  const dice = [];
  for (let i = 0; i < num; i++) {
    const roll = Math.floor(Math.random() * 6) + 1;
    dice.push(roll);
  }
  return dice;
};

const offsetDice = (num) => {
  const dice = [];
  for (let i = 0; i < num; i++) {
    const x = Math.floor(Math.random() * 16) - 8;
    const y = Math.floor(Math.random() * 16) - 8;
    const r = Math.floor(Math.random() * 120) - 60;
    dice.push({ x, y, r });
  }
  return dice;
};

const Dice: FunctionComponent<any> = ({
  value,
  onclick,
  isSelected,
  offset,
}) => {
  return h(
    "div",
    {
      class: `dice rolled ${isSelected ? "selected" : ""}`,
      onclick,
      style: `transform: translate(${offset ? offset.x : 0}px, ${
        offset ? offset.y : 0
      }px) rotate(${offset ? offset.r : 0}deg)`,
    },
    value
  );
};

const ROLL_TIME = 1600;
const ROLL_SPEED = 200;

const DiceSection: FunctionComponent = ({}) => {
  const { canRoll, maxDice, dice, selectedDice } = usePreduxState();
  const dispatch = useDispatch();

  const [isRolling, setIsRolling] = useState(false);
  const [animatingDice, setAnimatingDice] = useState([]);
  const [animatingOffsets, setAnimatingOffsets] = useState([]);

  const rollButton = h(
    "div",
    { class: "down" },
    h(
      "button",
      {
        disabled: isRolling,
        onclick: isRolling
          ? undefined
          : () => {
              setIsRolling(true);
              setAnimatingDice(rollDice(maxDice));
              setAnimatingOffsets(offsetDice(maxDice));
              let n = 0;
              const rollInterval = setInterval(() => {
                n++;
                if (n < ROLL_TIME / ROLL_SPEED) {
                  setAnimatingDice(rollDice(maxDice));
                  setAnimatingOffsets(offsetDice(maxDice));
                } else {
                  clearInterval(rollInterval);
                  dispatch({ type: "ROLL_DICE", dice: rollDice(maxDice) });
                  setIsRolling(false);
                }
              }, ROLL_SPEED);
            },
      },
      "Roll Dice"
    )
  );

  const endButton = h(
    "div",
    { class: "down" },
    h(
      "button",
      {
        class: "snd",
        onclick: () => dispatch({ type: "END_TURN" }),
      },
      "End Turn"
    )
  );

  const selectDice = (ix) => dispatch({ type: "SELECT_DICE", index: ix });

  const displayedDice = isRolling ? animatingDice : dice;

  return h("section", { class: "dicearea" }, [
    h("strong", null, "Your Turn"),
    h("br", null),
    h("br", null),
    displayedDice.map((val, ix) =>
      h(Dice, {
        value: val,
        onclick: () => selectDice(ix),
        isSelected: ix === selectedDice,
        offset: isRolling ? animatingOffsets[ix] : undefined,
      })
    ),
    canRoll ? rollButton : endButton,
  ]);
};

export default DiceSection;
