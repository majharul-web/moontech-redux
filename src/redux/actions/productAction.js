import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes/actionTypes";

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};
export const removeFromCart = (payload) => {
  return {
    type: REMOVE_FROM_CART,
    payload: payload,
  };
};
