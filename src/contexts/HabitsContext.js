import React, { createContext, useReducer, useState } from "react";
import { habits } from "../data/data";

export const HabitsContext = createContext();

const HabitsContextProvider = ({ children }) => {
  const habitsDataRecuder = (state, { type, payload }) => {
    console.log(type);
    switch (type) {
      case "ADD_HABBIT": {
        return [...state, payload];
      }
      case "EDIT_HABBIT": {
        const index = state.findIndex(({ _id }) => _id === payload._id);
        state[index] = payload;
        return [...state];
      }
      case "ARCHIVE": {
        const index = state.findIndex(({ _id }) => _id === payload._id);
        state[index].archived = true;
        return [...state];
      }
      case "UNARCHIVE": {
        const index = state.findIndex(({ _id }) => _id === payload._id);
        state[index].archived = false;
        return [...state];
      }
      case "DELETE": {
        return state.filter(({ _id }) => _id !== payload._id);
      }
      default: {
        return [...state];
      }
    }
  };

  const [habitsData, dispatchHabitsData] = useReducer(
    habitsDataRecuder,
    habits
  );
  //items[Math.floor(Math.random()*items.length)];

  console.log(habitsData);
  return (
    <HabitsContext.Provider value={{ dispatchHabitsData, habitsData }}>
      {" "}
      {children}
    </HabitsContext.Provider>
  );
};

export default HabitsContextProvider;
