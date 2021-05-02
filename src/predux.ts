import { h, createContext, FunctionComponent } from "preact";
import { useReducer, useContext } from "preact/hooks";

import { State, getInitialState, reducer } from "./reducer";
import { Dispatch } from "./actions";

const Predux = createContext<[State, Dispatch]>([null, null]);

export const PreduxProvider: FunctionComponent<any> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, getInitialState());
  return h(Predux.Provider, { value: [state, dispatch], children });
};

export const usePredux = () => useContext(Predux);

export const useState = () => useContext(Predux)[0];
export const useDispatch = () => useContext(Predux)[1];
