import { Product } from "../interface";
import Products from "./Products";

const Home = ({
  products,
  loading,
  error,
  addToCart,
  cartItems,
}: {
  products: Product[];
  loading: boolean;
  error: null | string;
  addToCart: (item: Product) => void;
  cartItems: Product[];
}) => {
  return (
    <>
      <Products
        products={products}
        loading={loading}
        error={error}
        addToCart={addToCart}
        cartItems={cartItems}
      />
    </>
  );
};

export default Home;
