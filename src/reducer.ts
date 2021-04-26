import { Deck, Card, spacePirate, rustyLaser, niftyTechnician } from "./cards";
import { Spacecraft } from "./ships";

type State = {
  ship?: Spacecraft;
  worldDeck: Deck;
  currentCard?: Card;
};

export const initialState: State = {
  ship: null,
  worldDeck: [{ ...rustyLaser }, { ...spacePirate }, { ...niftyTechnician }],
  currentCard: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SELECT_SHIP":
      return { ...state, ship: action.ship };
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
          name: action.choice.name,
          flavor: action.choice.flavor,
        },
      };
    }
    case "RESET":
      return initialState;
    default:
      throw new Error(`Unexpected action type ${action.type}`);
  }
};
