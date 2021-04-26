import { Deck, Card, spacePirate, rustyLaser, niftyTechnician } from "./cards";
import { Spacecraft } from "./ships";

type State = {
  ship?: Spacecraft;
  hp: number;
  worldDeck: Deck;
  currentCard?: Card;
  currentEnemy?: number;
};

export const initialState: State = {
  ship: null,
  hp: 0,
  worldDeck: [{ ...rustyLaser }, { ...spacePirate }, { ...niftyTechnician }],
  currentCard: null,
  currentEnemy: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SELECT_SHIP":
      return { ...state, ship: action.ship, hp: action.ship.health };
    case "TURN_CARD":
      return {
        ...state,
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
        hp: state.hp - 1,
        currentCard: {
          type: "INFO",
          name: "Narrow escape",
          flavor: `You managed to get away from the ${action.enemy.name}, but not before they managed to hit you with a laser beam.`,
        },
      };
    case "BATTLE_STATIONS":
      return { ...state, currentEnemy: action.enemy.health };
    case "RESET":
      return initialState;
    default:
      throw new Error(`Unexpected action type ${action.type}`);
  }
};
