let initialState = {
  selections: [],
  loading: false,
  error: "",
};

export const selectionReduser = (state = initialState, action) => {
  // console.log(action.payload);
  switch (action.type) {
    case "CREATE_SELECTION":
      return {
        ...state,
        selections: [...state.selections, action.payload],
      };
    case "GET_SELECTION":
      return {
        ...state,
        selections: action.payload,
      };
    case "REMOVE_SELECTION":
      return {
        ...state,
        selections: [],
      };

    default:
      return state;
  }
};
