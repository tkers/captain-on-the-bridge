import { h, createContext } from "preact";
import { useReducer, useContext } from "preact/hooks";

const Predux = createContext();

export const PreduxProvider = ({ initialState, reducer, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return h(Predux.Provider, { value: [state, dispatch] }, children);
};

export const usePredux = () => useContext(Predux);

export const useState = () => useContext(Predux)[0];
export const useDispatch = () => useContext(Predux)[1];
