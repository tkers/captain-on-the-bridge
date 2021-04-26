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
      };
    case "MAKE_CHOICE": {
      return action.choice.effect.reduce((s, effect) => {
        const stat = effect.stat.toLowerCase();
        const buff = effect.diff.stat
          ? s.ship[effect.diff.stat.toLowerCase()]
          : 0;
        return {
          ...s,
          ship: { ...s.ship, [stat]: s.ship[stat] + effect.diff.amount + buff },
        };
      }, state);
    }
    case "RESET":
      return initialState;
    default:
      throw new Error(`Unexpected action type ${action.type}`);
  }
};
