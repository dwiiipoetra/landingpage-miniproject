export const addProductCart = (data) => {
  return {
    type: "ADD_CART",
    value: data,
  };
};

export const deleteProductCart = (data) => {
  return {
    type: "DELETE_CART",
    value: data,
  };
};

export const editQuantityCart = (data) => {
  return {
    type: "EDIT_CART",
    value: data,
  };
};
