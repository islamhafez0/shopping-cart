import { Link } from "react-router-dom";
import { Product } from "../interface";
import { BsCartCheck, BsCartPlus } from "react-icons/bs";
import { useState } from "react";

const ProductCard = ({
  product,
  addToCart,
  cartItems,
}: {
  product: Product;
  addToCart: (item: Product) => void;
  cartItems: Product[];
}) => {
  const isProductInCart = cartItems.some((item) => item.id === product.id);
  const [addedToCart, setAddedToCart] = useState(isProductInCart);

  const handleAddingToCart = (product: Product) => {
    addToCart(product);
    setAddedToCart(true);
    setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
  };

  return (
    <li className="product">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-info">
        <Link to={`/product/${product.id}`}>{product.title}</Link>
        <p>{product.description}</p>
        <div className="product-cart-info">
          <span>${product.price}</span>
          <button
            onClick={() => handleAddingToCart(product)}
            data-product-id={product.id}
          >
            {addedToCart ? <BsCartCheck size={22} /> : <BsCartPlus size={22} />}
          </button>
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
