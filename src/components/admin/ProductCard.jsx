import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="py-4 px-3  shadow-md rounded-2xl min-h-auto ">
      <div className="w-64 relative">
        <img
          src={product?.image}
          alt=""
          className="object-cover rounded-2xl aspect-square w-full"
        />
        {product?.inStock && (
          <h1 className="absolute top-1 right-1 bg-orange-600 rounded-2xl py-1 px-1.5 text-white font-bold">
            in stock
          </h1>
        )}
      </div>
      <h1 className="text-xl font-bold tracking-tight text-green-950 my-2">
        {product?.name}
      </h1>
      <div className="flex w-full justify-between">
        <p className="text-green-950 font-medium text-lg">
          ${product?.salesPrice}
        </p>
        <p
          className={` ${
            product?.salesPrice >= 0 ? "line-through" : ""
          } text-green-950 font-medium text-lg`}
        >
          ${product?.price}
        </p>
      </div>

      <div className="flex w-full justify-between">
        <button className="bg-green-950 py-2 px-3 mt-3 rounded-full font-bold text-sm cursor-pointer text-orange-500 ">
          edit product
        </button>
        <button className="text-white py-2 px-3 mt-3 rounded-full font-bold text-sm cursor-pointer bg-orange-700">
          delete product
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
