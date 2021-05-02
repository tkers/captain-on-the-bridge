import { h, FunctionComponent } from "preact";
import { useState } from "preact/hooks";
import { useState as usePreduxState, useDispatch } from "../predux";

const rollDice = () => {
  return Math.floor(Math.random() * 6) + 1;
};

const offsetDice = () => {
  const x = Math.floor(Math.random() * 16) - 8;
  const y = Math.floor(Math.random() * 16) - 8;
  const r = Math.floor(Math.random() * 120) - 60;
  return { x, y, r };
};

const Dice: FunctionComponent<any> = ({ value, offset }) => {
  return h(
    "div",
    {
      class: `dice rolled enemy`,
      style: `transform: translate(${offset ? offset.x : 0}px, ${
        offset ? offset.y : 0
      }px) rotate(${offset ? offset.r : 0}deg)`,
    },
    value
  );
};

const ROLL_TIME = 1600;
const ROLL_SPEED = 200;

const getMove = (enemy, dice) => {
  for (let i = dice - 1; i < 6; i++) {
    if (enemy.moves[i]) {
      return enemy.moves[i];
    }
  }
};

const EnemyDiceSection: FunctionComponent = ({}) => {
  const dispatch = useDispatch();

  const { currentCard } = usePreduxState();

  const [isRolling, setIsRolling] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [animatingDice, setAnimatingDice] = useState(0);
  const [animatingOffsets, setAnimatingOffsets] = useState({
    x: 0,
    y: 0,
    r: 0,
  });

  const doRoll = () => {
    setIsRolling(true);
    setAnimatingDice(rollDice());
    setAnimatingOffsets(offsetDice());
    let n = 0;
    const rollInterval = setInterval(() => {
      n++;
      if (n < ROLL_TIME / ROLL_SPEED) {
        setAnimatingDice(rollDice());
        setAnimatingOffsets(offsetDice());
      } else {
        const finalValue = rollDice();
        setAnimatingDice(finalValue);
        setAnimatingOffsets({ x: 0, y: 0, r: 0 });
        clearInterval(rollInterval);
        setIsRolling(false);
        setIsDone(true);
      }
    }, ROLL_SPEED);
  };

  return h("section", { class: "dicearea" }, [
    h("strong", null, "Enemy Turn"),
    h("br", null),
    h("br", null),
    animatingDice > 0 &&
      h(Dice, {
        value: animatingDice,
        offset: animatingOffsets,
      }),
    h("div", { class: "down" }, [
      !isDone &&
        h(
          "button",
          { onClick: isRolling ? undefined : doRoll, disabled: isRolling },
          "Roll"
        ),
      isDone &&
        h(
          "button",
          {
            class: "snd",
            onClick: () => {
              dispatch({
                type: "ENEMY_MOVE",
                move: getMove(currentCard, animatingDice),
              });
            },
          },
          getMove(currentCard, animatingDice).name
        ),
    ]),
  ]);
};

export default EnemyDiceSection;
