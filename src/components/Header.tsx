import { SetStateAction, useEffect, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = ({
  setShowCart,
  numberOfItems,
}: {
  setShowCart: React.Dispatch<SetStateAction<boolean>>;
  numberOfItems: number;
}) => {
  const [scrolled, setScrolled] = useState(false);
  console.log(numberOfItems);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <Link to="/">Shopping Cart</Link>
      <button onClick={() => setShowCart((prev) => !prev)}>
        <IoCartOutline size={22} />
        {numberOfItems !== 0 && (
          <span className="numberOfCartItems">{numberOfItems}</span>
        )}
      </button>
    </header>
  );
};

export default Header;
