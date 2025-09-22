import { useLocation, useNavigate } from "react-router-dom";
import MyAppContext from "./Context";
import { useEffect, useState } from "react";
import { products } from "@/helper";

const MyAppProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = {
    role: "admin",
  };
  const isAuthenticated = false;
  const [adminProducts, setAdminProducts] = useState([]);
  const [userProducts, setUserProducts] = useState([]);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [filters, setFilters] = useState("All");
  const [productDetails, setProductDetails] = useState(null);
  const [openProductDialog, setOpenProductDialog] = useState(false);

  const filteredProducts =
    filters === "All"
      ? userProducts
      : userProducts.filter((product) => product.category === filters);

  useEffect(() => {
    setAdminProducts(products);
    setUserProducts(products);
  }, [setAdminProducts]);

  return (
    <MyAppContext.Provider
      value={{
        location,
        user,
        navigate,
        productDetails,
        setProductDetails,
        filteredProducts,
        filters,
        openProductDialog,
        setOpenProductDialog,
        isAuthenticated,
        adminProducts,
        userProducts,
        openMobileMenu,
        setFilters,
        setOpenMobileMenu,
        setAdminProducts,
      }}
    >
      {children}
    </MyAppContext.Provider>
  );
};

export default MyAppProvider;
