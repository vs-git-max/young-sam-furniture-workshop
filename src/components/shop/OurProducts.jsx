import MyAppContext from "@/context/Context";
import React, { useContext, useState } from "react";
import UserProductCard from "./UserProductCard";
import UserProductDetails from "./UserProductDetails";

const OurProducts = () => {
  const {
    filteredProducts,
    navigate,
    openProductDialog,
    setOpenProductDialog,
  } = useContext(MyAppContext);
  const [numberOfItems, setNumberOfItems] = useState(5);

  const handleIncreasePageProducts = () => {
    setNumberOfItems((prev) => prev + 5);
    if (numberOfItems === filteredProducts.length) navigate("/shop");
  };

  return (
    <section className="px-12 my-20 ">
      <h1 className="mb-3 text-center text-transparent font-bold bg-gradient-to-r from-green-950 to-green-700 bg-clip-text text-4xl lg:text-6xl underline">
        Our Products
      </h1>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 lg:gap-5 md:gap-4  md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5">
        {filteredProducts.length > 1 &&
          filteredProducts &&
          filteredProducts
            .slice(0, numberOfItems)
            .map((product) => (
              <UserProductCard key={product.id} product={product} />
            ))}
      </div>
      {numberOfItems < filteredProducts.length ? (
        <button
          onClick={() => handleIncreasePageProducts()}
          className="mt-10 bg-green-50 text-green-950 py-2 px-5 rounded-lg font-bold text-lg cursor-pointer"
        >
          Load More Products
        </button>
      ) : (
        <button
          onClick={() => handleIncreasePageProducts()}
          className="mt-10 bg-green-50 text-green-950 py-2 px-5 rounded-lg font-bold text-lg cursor-pointer"
        >
          Go to Shop Page
        </button>
      )}

      <UserProductDetails
        openProductDialog={openProductDialog}
        setOpenProductDialog={setOpenProductDialog}
      />
    </section>
  );
};

export default OurProducts;
