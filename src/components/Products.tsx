import { Product } from "../interface";
import Loader from "./Loader";
import ProductCard from "./ProductCard";

const Products = ({
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
    <div className="products-container">
      {error && (
        <p className="error">Something went wrong please try again later.</p>
      )}
      {loading && <Loader />}
      <ul className="products">
        <>
          {products.map((product: Product) => (
            <ProductCard
              product={product}
              addToCart={addToCart}
              key={product.id}
              cartItems={cartItems}
            />
          ))}
        </>
      </ul>
    </div>
  );
};

export default Products;
