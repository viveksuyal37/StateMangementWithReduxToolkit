import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  searchProduct,
  sort,
} from "../../features/productSlice";
import Loader from "../Loader/Loader";

const ListProducts = () => {
  //i hv not imlemented infinite scroll due to less products.
  const { products, status, filterState } = useSelector(getAllProducts);
  const dispatch = useDispatch();
  // console.log(products, status);
  return (
    <>
      {status === "success" ? (
        <section className="text-gray-600 body-font">
          <div className="flex flex-col md:flex-row gap-5 items-center justify-between mx-[8vw] mt-10 ">
            <h1 className="text-4xl  font-bold ">All Products</h1>
            {/* right filter ui */}
            <div className="flex items-center gap-3">
              <input
                type="text"
                className="border px-2 py-1 rounded-md border-solid border-blue-400"
                placeholder="Search product"
                onChange={(e) => {
                  dispatch(searchProduct(e.target.value));
                }}
              ></input>
              <select
                onChange={(e) => {
                  dispatch(sort(e.target.value));
                }}
                className=" outline-none cursor-pointer"
              >
                <option value="Default">Default</option>
                <option value="Price">Price</option>
                <option value="Name">Name</option>
              </select>
            </div>
          </div>
          <div className="container px-5 py-14 mx-auto">
            <div className="flex flex-wrap -m-4">
              {!filterState &&
                products[0]?.map((el) => {
                  return <ProductCard key={el.id} product={el} />;
                })}
              {filterState &&
                filterState?.map((el) => {
                  return <ProductCard key={el.id} product={el} />;
                })}
            </div>
          </div>
        </section>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default ListProducts;
