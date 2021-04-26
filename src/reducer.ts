import {
  Deck,
  Card,
  rustyTurret,
  spacePirate,
  rustyLaser,
  niftyTechnician,
} from "./cards";
import { Spacecraft } from "./ships";

type State = {
  ship?: Spacecraft;
  isDead: boolean;
  score: number;
  worldDeck: Deck;
  currentCard?: Card;
  inBattle: boolean;
  myTurn: boolean;
  canRoll: boolean;
  maxDice: number;
  dice: Array<1 | 2 | 3 | 4 | 5 | 6>;
  selectedDice?: number;
};

export const initialState: State = {
  ship: null,
  isDead: false,
  score: 0,
  worldDeck: [
    { ...rustyLaser },
    { ...rustyTurret },
    { ...niftyTechnician },
    { ...spacePirate },
  ],
  currentCard: null,
  inBattle: false,
  myTurn: true,
  canRoll: false,
  maxDice: 3,
  dice: [],
  selectedDice: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SELECT_SHIP":
      return { ...state, ship: action.ship };
    case "TURN_CARD":
      return {
        ...state,
        score: state.score + 1,
        currentCard: state.worldDeck[0],
        worldDeck: state.worldDeck.slice(1),
      };
    case "INSTALL_ITEM":
      return {
        ...state,
        ship: { ...state.ship, modules: [action.item, ...state.ship.modules] },
        currentCard: {
          type: "INFO",
          name: "Ship upgraded",
          flavor: `You installed the ${action.item.name}.`,
        },
      };
    case "MAKE_CHOICE": {
      const newShip = action.choice.effect.reduce((ship, effect) => {
        const stat = effect.stat.toLowerCase();
        const buff = effect.diff.stat
          ? state.ship[effect.diff.stat.toLowerCase()]
          : 0;
        return {
          ...ship,
          [stat]: state.ship[stat] + effect.diff.amount + buff,
        };
      }, state.ship);

      return {
        ...state,
        ship: newShip,
        currentCard: {
          type: "INFO",
          name: state.currentCard.name,
          flavor: action.choice.flavor,
        },
      };
    }
    case "ATTEMPT_ESCAPE":
      return {
        ...state,
        ship: { ...state.ship, health: state.ship.health - 1 },
        currentCard: {
          type: "INFO",
          name: "Narrow escape",
          flavor: `You managed to get away from the ${action.enemy.name}, but not before they managed to hit you with a laser beam.`,
        },
      };
    case "BATTLE_STATIONS":
      return {
        ...state,
        inBattle: true,
        canRoll: true,
        myTurn: true,
      };
    case "ROLL_DICE":
      return {
        ...state,
        dice: action.dice,
        canRoll: false,
        selectedDice: null,
      };
    case "SELECT_DICE":
      return { ...state, selectedDice: action.index };
    case "END_TURN":
      return { ...state, myTurn: false, dice: [], selectedDice: null };
    case "ENEMY_MOVE": {
      const newShip = action.move.effect
        .filter((e) => !e.self)
        .reduce((ship, effect) => {
          const stat = effect.stat.toLowerCase();
          const buff = effect.diff.stat
            ? state.currentCard[effect.diff.stat.toLowerCase()]
            : 0;
          return {
            ...ship,
            [stat]: state.ship[stat] + effect.diff.amount + buff,
          };
        }, state.ship);

      const newCurrentCard = action.move.effect
        .filter((e) => e.self)
        .reduce((enemy, effect) => {
          const stat = effect.stat.toLowerCase();
          const buff = effect.diff.stat
            ? state.currentCard[effect.diff.stat.toLowerCase()]
            : 0;
          return {
            ...enemy,
            [stat]: state.currentCard[stat] + effect.diff.amount + buff,
          };
        }, state.currentCard);

      const gameover =
        newShip.health > 0
          ? {}
          : {
              isDead: true,
              inBattle: false,
            };

      return {
        ...state,
        ship: newShip,
        currentCard: newCurrentCard,
        myTurn: true,
        canRoll: true,
        ...gameover,
      };
    }
    case "REPLAY":
      return initialState;
    default:
      throw new Error(`Unexpected action type ${action.type}`);
  }
};
