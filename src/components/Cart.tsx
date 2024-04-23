import { SetStateAction } from "react";
import { IoMdClose } from "react-icons/io";
import { Product } from "../interface";

const Cart = ({
  showCart,
  setShowCart,
  cartItems,
  removeFromCart,
}: {
  showCart: boolean;
  setShowCart: React.Dispatch<SetStateAction<boolean>>;
  cartItems: Product[];
  removeFromCart: (id: number) => void;
}) => {
  const totalPrice = cartItems.reduce(
    (total, item: Product) => total + (item.quantity || 0) * item.price,
    0
  );
  return (
    <div
      className={`cart-container ${showCart ? "cart-opened" : "cart-closed"}`}
    >
      <div className={`cart`}>
        <div className="cart-header">
          <h3>Cart Items</h3>
          <button onClick={() => setShowCart((prev) => !prev)}>
            <IoMdClose size={22} />
          </button>
        </div>
        <ul className="cart-items">
          {cartItems.length === 0 && (
            <p className="message">Your cart is empty</p>
          )}
          {cartItems.map(({ id, image, title, price, quantity }) => (
            <li className="cart-item" key={id}>
              <img src={image} alt={title} />
              <div className="cart-item-info">
                <h5>{title}</h5>
                <span className="price">${price}</span>
                <div>
                  <span className="QY">
                    <b>QY: </b>
                    {quantity}
                  </span>
                  <button
                    onClick={() => removeFromCart(id)}
                    className="remove-from-cart"
                  >
                    remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="checkout">
        <p>
          Total Price: <b>${totalPrice.toFixed(2)}</b>
        </p>
        <button
          className={`${cartItems.length === 0 && "disabled"}`}
          disabled={cartItems.length === 0}
        >
          Chekout
        </button>
      </div>
    </div>
  );
};

export default Cart;
