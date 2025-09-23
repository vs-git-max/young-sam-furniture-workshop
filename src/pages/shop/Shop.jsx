import UserProductCard from "@/components/shop/UserProductCard";
import UserProductDetails from "@/components/shop/UserProductDetails";
import MyAppContext from "@/context/Context";
import React, { useContext } from "react";

const Shop = () => {
  const { userProducts, openProductDialog, setOpenProductDialog, location } =
    useContext(MyAppContext);

  console.log(location.pathname);

  return (
    <section className="py-12 w-full min-h-screen overflow-hidden px-3 relative">
      <div className="flex items-center justify-between w-full px-8 ">
        <h1 className="text-3xl text-green-900 font-bold  lg:text-5xl text-center">
          Our Products
        </h1>
        <p className="text-orange-600 font-semibold text-lg">
          {userProducts?.length}{" "}
          <span className="text-green-950">Products</span>{" "}
        </p>
      </div>
      <div className="flex items-center justify-end ">.Sort by</div>
      <div className="flex gap-3 ">
        <div className=" bg-green-100 w-32  h-screen fixed ">
          <h2 className="">Shop By Category</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 lg:grid-cols-4 gap-3 lg:gap-4 pl-32">
          {userProducts.length > 1 &&
            userProducts &&
            userProducts.map((product) => (
              <UserProductCard product={product} key={product?.id} />
            ))}
        </div>
      </div>
      <UserProductDetails
        openProductDialog={openProductDialog}
        setOpenProductDialog={setOpenProductDialog}
      />
    </section>
  );
};

export default Shop;
