import { useContext, useEffect, useState } from "react";
import MyAppContext from "../../context/Context";
import { categories, products } from "../../helper";
import ProductCard from "./ProductCard";

const Products = () => {
  const [filterParam, setFilterParam] = useState("All");
  const { adminProducts, setAdminProducts } = useContext(MyAppContext);

  const handleClick = (getValue) => {
    setFilterParam(getValue);
  };

  const filteredProducts =
    filterParam === "All"
      ? adminProducts
      : adminProducts.filter((product) => product.category === filterParam);

  useEffect(() => {
    setAdminProducts(products);
  }, [setAdminProducts]);

  return (
    <div className="">
      <div className="">
        <h1 className="text-2xl font-extrabold tracking-wide text-green-950 underline">
          Admin Products
        </h1>
      </div>
      <div className="flex items-center gap-3 lg:gap-5 mt-4 lg:mt-6">
        {categories.map((category) => (
          <button
            className={`${
              filterParam === category.value
                ? "text-green-50 bg-green-950"
                : "text-green-950 bg-green-50"
            }  font-bold text-sm lg:text-lg rounded-full py-1 lg:py-0.5 px-3 lg:px-4 `}
            key={category.label}
            onClick={() => handleClick(category.value)}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 lg:gap-5 md:gap-4   md:grid-cols-3 lg:grid-cols-5">
        {filteredProducts.length > 0 &&
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Products;
