import React, { useState, useEffect, useContext, useReducer } from "react";
import { data } from "./data";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
  propertyData: data,
  searchedData: [],
  favouritesData: [],
  isModalOpen: false,
  modalContent: "",
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const AddToFavourites = (newItem) => {
    dispatch({ type: "ADD_TO_FAVOURITES", payload: newItem });
  };
  const RemoveFromFavorites = (id) => {
    dispatch({ type: "REMOVE_FROM_FAVOURITES", payload: id });
  };
  const EmptyFields = () => {
    dispatch({ type: "EMPTY_FIELDS" });
  };
  const InvalidValues = () => {
    dispatch({ type: "INVALID_VALUES" });
  };
  return (
    <AppContext.Provider
      value={{
        ...state,
        AddToFavourites,
        RemoveFromFavorites,
        EmptyFields,
        InvalidValues,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
