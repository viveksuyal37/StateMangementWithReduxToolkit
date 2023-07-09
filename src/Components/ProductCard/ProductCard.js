import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { id, title, price, image, category } = product;
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link
        to={`/product/${id}`}
        className="block relative h-48 rounded overflow-hidden"
      >
        <img alt="product" className="mx-auto h-full block" src={image} />
      </Link>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {category}
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {title}
        </h2>
        <p className="mt-1">$ {price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
