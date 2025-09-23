import UserProductCard from "@/components/shop/UserProductCard";
import UserProductDetails from "@/components/shop/UserProductDetails";
import MyAppContext from "@/context/Context";
import React, { useContext } from "react";

const Shop = () => {
  const { userProducts, openProductDialog, setOpenProductDialog, location } =
    useContext(MyAppContext);

  console.log(location.pathname);

  return (
    <section className="pt-10 flex flex-col">
      <div className="fixed z-1000 flex justify-between w-full px-5 bg-green-100 items-center">
        <h1 className="">Our Products</h1>
        <div className="sticky top-20  z-40 p-3 border-b">sam chris mboya</div>
      </div>
      <aside className="fixed top-22 left-0 w-40 bg-green-50 p-5 rounded-r-lg h-[calc(100vh-7rem)] overflow-y-auto">
        <h1>Sort by categories</h1>
        <label className="flex items-center gap-2">
          <input type="checkbox" /> Electronics
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" /> Fashion
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" /> Beauty
        </label>
      </aside>

      <main className="ml-40 mt-10 p-4 grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4">
        {userProducts?.length > 0 &&
          userProducts &&
          userProducts.map((product) => (
            <UserProductCard product={product} key={product?.id} />
          ))}
      </main>

      <UserProductDetails
        openProductDialog={openProductDialog}
        setOpenProductDialog={setOpenProductDialog}
      />
    </section>
  );
};

export default Shop;
