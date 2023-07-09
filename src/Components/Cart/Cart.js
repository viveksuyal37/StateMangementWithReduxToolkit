import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "../../features/cartSlice";

const Cart = ({ cart, toggleCart }) => {
  const cartState = useSelector(getCart);
  const dispatch=useDispatch()
  const { items, checkoutPrice } = cartState;
  // console.log(items);

  let classes = cart ? "top-0 right-0 sm:w-[50vw] lg:w-[25vw]" : "top-0 right-[-200vw]";
  return (
    <div className={`fixed ${classes} bg-blue-200  h-full z-20 `}>
      <h1 className="text-3xl font-bold mt-7 text-center">My Cart</h1>
      <i
        title="close cart"
        onClick={() => {
          toggleCart(!cart);
        }}
        className="absolute top-4 cursor-pointer right-5 text-2xl fa-solid fa-circle-xmark"
      ></i>

      {items.length === 0 && cart ? (
        <div className="flex flex-col items-center mt-10">
          <i className="fa-regular text-5xl text-bold fa-face-frown-open"></i>
          <h2 className="text-2xl px-4 mt-4">
            {" "}
            No items are available in the cart. Please add some products to
            view.
          </h2>
        </div>
      ) : (
        <div className="container mt-5 ">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="py-2 px-4 text-center bg-gray-100">Title</th>
                <th className="py-2 px-4 text-center bg-gray-100">Quantity</th>
                <th className="py-2 px-4 text-center bg-gray-100">Price</th>
              </tr>
            </thead>
            <tbody>
              {items?.map((item) => {
                return (
                  <tr key={item.id} className="text-center">
                    <td className="py-2 px-4 text-left border-b">
                      {item.title}
                    </td>
                    <td className="py-2 px-4 border-b">{item.quantity}</td>
                    <td className="py-2 px-4 border-b">${item.price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="flex mt-8 items-center justify-between mx-4">
            <h1 className="text-bold text-[18px]">
              Total Amount: $ {checkoutPrice}
            </h1>
            <button className="bg-black text-white px-3 rounded-lg py-2">
              Checkout
            </button>
          </div>
          <button title="clear cart items" className=" mx-4 mt-5 bg-blue-700 text-white px-3 rounded-lg py-2" onClick={()=>{dispatch(clearCart())}}>Clear Cart</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
