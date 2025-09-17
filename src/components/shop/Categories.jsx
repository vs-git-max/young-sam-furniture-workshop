import { categories } from "@/helper";
import React, { useContext } from "react";
import { Separator } from "../ui/separator";
import MyAppContext from "@/context/Context";

const Categories = () => {
  const { setFilters, filters } = useContext(MyAppContext);

  return (
    <section className="max-w-7xl mx-auto px-3 mt-8" id="categories">
      <h1 className="mb-3 text-center text-transparent font-bold bg-gradient-to-r from-green-950 to-green-700 bg-clip-text text-4xl lg:text-6xl underline">
        Categories
      </h1>
      <div className="grid grid-cols-3 gap-5 lg:gap-3 md:grid-cols-5  lg:grid-cols-10 mt-6">
        {categories.map((category) => (
          <button
            onClick={() => setFilters(category.value)}
            key={category.id}
            className={`${
              category.value === filters
                ? "bg-green-900 text-green-50 hover:bg-green-950"
                : "bg-green-50 text-green-900 hover:bg-green-100"
            }  font-bold py-1 px-3 rounded-full text-md cursor-pointers  duration-300 transition-all cursor-pointer`}
          >
            {category.label}
          </button>
        ))}
      </div>
      <Separator className="mb-3 mt-8 bg-green-950" />
    </section>
  );
};

export default Categories;
