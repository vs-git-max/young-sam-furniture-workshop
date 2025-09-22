import React, { useContext } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import MyAppContext from "@/context/Context";
import StarRating from "./StarRating"; // adjust path as needed

const UserProductDetails = () => {
  const {
    productDetails,
    setProductDetails,
    openProductDialog,
    setOpenProductDialog,
  } = useContext(MyAppContext);

  const handleOnOpenChange = () => {
    setOpenProductDialog(false);
    setProductDetails(null);
  };

  return (
    <Dialog open={openProductDialog} onOpenChange={handleOnOpenChange}>
      <DialogContent>
        {productDetails ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-center font-bold text-xl text-green-950">
                {productDetails.name}
              </DialogTitle>
            </DialogHeader>

            <div className="flex items-center flex-col gap-3">
              <div className="w-64 h-auto">
                <img
                  src={productDetails.image}
                  alt={productDetails.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex gap-2 w-full items-center justify-between">
                <div className="flex flex-col gap-1 items-center shadow-xs p-0.5 rounded-lg shadow-orange-900">
                  <p className="text-sm font-bold text-green-900 px-3">Price</p>
                  <p
                    className={`${
                      productDetails.salesPrice > 0 ? "line-through" : ""
                    } text-green-950 font-bold text-sm`}
                  >
                    {productDetails.price}
                  </p>
                </div>

                <div className="flex flex-col items-center gap-0.5 ">
                  <h1 className="text-green-900 font-bold text-lg">Rating</h1>
                  <p className="font-semibold text-sm text-green-800">
                    {productDetails?.reviewsCount}
                  </p>
                  <StarRating rating={productDetails.rating} />
                </div>

                {productDetails.salesPrice > 0 && (
                  <div className="flex flex-col gap-1 items-center shadow-xs p-0.5 rounded-lg shadow-green-900">
                    <p className="text-sm font-bold text-orange-700 text-center">
                      Sales price
                    </p>
                    <p className="text-green-950 font-bold text-sm">
                      {productDetails.salesPrice}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </>
        ) : (
          <p className="text-center text-gray-500">Loading product...</p>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default UserProductDetails;
