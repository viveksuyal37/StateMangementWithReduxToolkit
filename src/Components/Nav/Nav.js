import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCart } from "../../features/cartSlice";
import Cart from "../Cart/Cart";

const Nav = () => {
  const [showCart, setShowCart] = useState(false);
  const cartState = useSelector(getCart);
  const { items } = cartState;

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex  p-5  md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">E-shopping</span>
        </Link>

        <div className="ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:text-gray-900">
            Home
          </Link>
        </div>

        <div className="relative">
          <div
            title={items.length ? "click to view cart" : "No items available"}
            className="mr-5 cursor-pointer hover:text-gray-900"
          >
            <i
              onClick={() => {
                setShowCart(true);
              }}
              className="text-blue-500 text-xl fa-solid fa-cart-shopping"
            ></i>
          </div>
          {items.length > 0 && (
            <p className="absolute top-[-12px] left-[14px] bg-black text-white rounded-full px-2">
              {items.length}
            </p>
          )}
        </div>
      </div>
      <Cart cart={showCart} toggleCart={setShowCart} />
    </header>
  );
};

export default Nav;
