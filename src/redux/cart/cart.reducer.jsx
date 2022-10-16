const INITIAL_STATE = {
  data: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_CART":
      return {
        ...state,
        data: [...state.data, action.value],
      };

    case "DELETE_CART":
      return {
        ...state,
        data: state.data.filter((item) => item !== action.value),
      };

    case "EDIT_QUANTITY":
      return {
        ...state,
        data: state.data.map((item) =>
          item.id === action.id ? { ...item, quantity: action.value } : item
        ),
      };

    default:
      return state;
  }
};

export default reducer;
