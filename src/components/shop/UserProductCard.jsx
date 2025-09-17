import { StarHalfIcon } from "lucide-react";
import React from "react";
import StarRating from "./StarRating";

const UserProductCard = ({ product }) => {
  return (
    <div className="py-2 px-1 shadow-green-950/20 shadow-xl rounded-2xl min-h-auto flex flex-col items-center gap-3">
      <div className="w-64 relative flex items-center justify-between flex-col gap-2">
        <img
          src={product.image}
          alt=""
          className="object-cover rounded-2xl aspect-square w-full"
        />
        <div className="absolute flex w-full items-center  p-3 justify-between">
          <p className="bg-green-100 rounded-full text-sm font-bold tracking-wider py-1 px-3 text-green-950 ">
            On discount
          </p>
          <p className="bg-orange-600 rounded-full text-sm font-bold tracking-wider py-1 px-3 text-green-950">
            In stock
          </p>
        </div>
        <p className="font-bold text-lg text-green-950">{product?.name}</p>
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col gap-1 items-center shadow-xs p-0.5 rounded-lg shadow-orange-900">
            <p className="text-sm font-bold text-green-900 px-3"> Price</p>
            <p
              className={`${
                product.salesPrice > 0 ? "line-through" : ""
              } text-green-950 font-bold text-sm`}
            >
              {product.price}
            </p>
          </div>
          <p>
            {" "}
            <StarRating rating={product.rating} />
          </p>
          {product.salesPrice > 0 && (
            <div className="flex flex-col gap-1 items-center shadow-xs p-0.5 rounded-lg shadow-green-900 ">
              <p className="text-sm font-bold text-orange-700">Sales price</p>
              <p className="text-green-950 font-bold text-sm">
                {product?.salesPrice}
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center justify-between w-full">
        <button className="bg-green-50 py-1 text-green-900 hover:text-green-950 px-3 rounded-3xl font-semibold lg:text-lg text-sm hover:bg-green-100 cursor-pointer">
          Product details
        </button>
        <button className="bg-orange-50 py-1 text-orange-900 hover:text-orange-950 px-3 rounded-3xl font-semibold lg:text-lg text-sm hover:bg-orange-100 cursor-pointer">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default UserProductCard;
