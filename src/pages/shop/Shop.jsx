import UserProductCard from "@/components/shop/UserProductCard";
import UserProductDetails from "@/components/shop/UserProductDetails";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import MyAppContext from "@/context/Context";
import { sortOptions } from "@/helper";
import { DropdownMenuContent } from "@radix-ui/react-dropdown-menu";
import { ArrowUpDownIcon } from "lucide-react";
import React, { useContext, useState } from "react";

const Shop = () => {
  const { userProducts, openProductDialog, setOpenProductDialog, location } =
    useContext(MyAppContext);
  const [sort, setSort] = useState(null);

  const handleSort = () => {};

  console.log(location.pathname);

  return (
    <section className="pt-10 flex flex-col">
      <div className="fixed z-1000 flex justify-between w-full px-5 bg-green-100 items-center">
        <h1 className="">Our Products</h1>
        <div className="sticky top-20  z-40 p-3 border-b">
          {" "}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <ArrowUpDownIcon className="size-4" />
                <span>Sort by</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-[200px] bg-green-100 rounded-xl"
            >
              <DropdownMenuRadioGroup value={sort} onValueChange={handleSort}>
                {sortOptions.map((item) => (
                  <DropdownMenuRadioItem
                    value={item.id}
                    key={item.id}
                    className="text-green-950 font-semibold text-sm hover:bg-green-50 rounded-xl"
                  >
                    {item.label}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <aside className="fixed top-22 left-0 w-40 bg-green-50 p-5 rounded-r-lg h-[calc(100vh-7rem)] overflow-y-auto">
        sam chris mboya
      </aside>

      <main className="ml-40 mt-10 p-4 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
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
