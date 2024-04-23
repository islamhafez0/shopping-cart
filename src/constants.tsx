import { CartAction, CartState, Product } from "./interface";

export const actionTypes = {
  SUCCESS: "SUCCESS",
  FAILED: "FAILED",
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  UPDATE_QUANTITY: "UPDATE_QUANTITY",
};
export const cartReducer = (state: CartState, action: CartAction) => {
  switch (action.type) {
    case actionTypes.SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };

    case actionTypes.FAILED:
      return {
        ...state,
        data: [],
        loading: false,
        error: action.payload,
      };

    case actionTypes.ADD_TO_CART:
      const newItem = action.payload;
      const existingItem = state.cart.find((item) => item?.id === newItem.id);
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === newItem.id
              ? { ...item, quantity: item?.quantity + 1 }
              : item
          ),
        };
      } else {
        return { ...state, cart: [...state.cart, { ...newItem, quantity: 1 }] };
      }

    case actionTypes.REMOVE_FROM_CART:
      const removerId = action.payload;
      const updatedCartItems = state.cart.filter(
        (item) => item.id !== removerId
      );
      return {
        ...state,
        cart: updatedCartItems,
      };

    default:
      return state;
  }
};
export const initialState = {
  data: [],
  loading: true,
  error: null,
  cart: [],
};

export const saveCartItemToLoacalStorage = (cart: Product[]) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};
