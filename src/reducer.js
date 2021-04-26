export const initialState = {
  ship: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SELECT_SHIP":
      return { ...state, ship: action.ship };
    case "RESET":
      return initialState;
    default:
      throw new Error(`Unexpected action type ${action.type}`);
  }
};
