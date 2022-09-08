const reducer = (state, action) => {
  if (action.type === "ADD_TO_FAVOURITES") {
    console.log(action.payload);

    const newData = state.propertyData.map((obj) => {
      if (obj.id === action.payload.id)
        return {
          ...obj,
          favourite: true,
        };
      return obj;
    });

    return {
      ...state,
      propertyData: newData,
      favouritesData: [...state.favouritesData, action.payload],
    };
  }

  if (action.type === "REMOVE_FROM_FAVOURITES") {
    console.log(action.payload);

    const newList = state.favouritesData.filter(
      (item) => item.id !== action.payload
    );
    const newData = state.propertyData.map((obj) => {
      if (obj.id === action.payload)
        return {
          ...obj,
          favourite: false,
        };
      return obj;
    });
    return {
      ...state,
      propertyData: newData,
      favouritesData: newList,
    };
  }

  if (action.type === "EMPTY_FIELDS") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "Empty Fields",
    };
  }

  if (action.type === "INVALID_VALUES") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "Enter Valid Values",
    };
  }

  return state;
};

export default reducer;
