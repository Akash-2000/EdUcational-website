import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();
console.log(StateContext)
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
console.log(StateProvider)
export const useStateValue = () => useContext(StateContext);
console.log(useStateValue)
