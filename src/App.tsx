import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { useEffect, useReducer, useState } from "react";
import Cart from "./components/Cart";
import { actionTypes, cartReducer, initialState } from "./constants";
import axios from "axios";
import { Product } from "./interface";
import ProductDetails from "./components/ProductDetails";

export default function App() {
  const [showCart, setShowCart] = useState(false);
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        dispatch({ type: actionTypes.SUCCESS, payload: data });
      } catch (error) {
        dispatch({ type: actionTypes.FAILED, payload: error });
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const addToCart = (item: Product) => {
    dispatch({ type: actionTypes.ADD_TO_CART, payload: item });
    setShowCart(true);
  };

  const removeFromCart = (id: number) => {
    dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: id });
  };

  return (
    <>
      <Header setShowCart={setShowCart} numberOfItems={state?.cart?.length} />
      <Cart
        showCart={showCart}
        cartItems={state.cart}
        setShowCart={setShowCart}
        removeFromCart={removeFromCart}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              products={state.data}
              error={state.error}
              loading={state.loading}
              addToCart={addToCart}
              cartItems={state.cart}
            />
          }
        />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}
