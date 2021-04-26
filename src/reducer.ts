export const initialState = {
  ship: null,
  worldDeck: [{ text: "A" }, { text: "B" }, { text: "C" }, { text: "D" }],
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
    case "RESET":
      return initialState;
    default:
      throw new Error(`Unexpected action type ${action.type}`);
  }
};
