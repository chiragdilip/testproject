import React, { useReducer } from "react";
import { createContext } from "react";
const initalState = {
  start: false,
  traingle: true,
  circle: true,
  square: true,
  direction: "stop",
};
export const gameContext = createContext({
  state: initalState,
  dispatch: () => {},
});
function reducer(state, action) {
  switch (action) {
    case "start":
      return { ...state, start: true };
    case "toggleTraingle":
      return { ...state, traingle: !state.traingle };
    case "toggleCircle":
      return { ...state, circle: !state.circle };
    case "toggleSquare":
      return { ...state, square: !state.square };
    case "forward":
      return {
        ...state,
        direction: state.direction === "stop" ? "forward" : "stop",
      };
    case "reset":
      return initalState;
    case "reverse":
      return {
        ...state,
        direction: state.direction === "stop" ? "reverse" : "stop",
      };
    default:
      return initalState;
  }
}
export function GameProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initalState);
  return (
    <gameContext.Provider value={{ state: state, dispatch: dispatch }}>
      {children}
    </gameContext.Provider>
  );
}
