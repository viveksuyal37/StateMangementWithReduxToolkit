import "./App.css";
import ListProducts from "./Components/ListProducts/ListProducts";

import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, getAllProducts } from "./features/productSlice";
import { useEffect } from "react";
import Nav from "./Components/Nav/Nav";

function App() {
  const dispatch = useDispatch();
  const { status } = useSelector(getAllProducts);

  useEffect(() => {
    if (status !== "success") {
      dispatch(fetchProducts());
    }
  }, []);

  return (
    <>
      <Nav />
      <ListProducts />
    </>
  );
}

export default App;
