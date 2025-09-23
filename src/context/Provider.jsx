import { useLocation, useNavigate } from "react-router-dom";
import MyAppContext from "./Context";
import { useEffect, useState } from "react";
import { products } from "@/helper";

const MyAppProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = null;
  const isAuthenticated = false;
  const [filters, setFilters] = useState("All");
  const [userProducts, setUserProducts] = useState([]);
  const [adminProducts, setAdminProducts] = useState([]);
  const [productDetails, setProductDetails] = useState(null);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [openProductDialog, setOpenProductDialog] = useState(false);
  const [openUserMobileMenu, setOpenUserMobileMenu] = useState(false);

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
        openUserMobileMenu,
        setOpenUserMobileMenu,
        setOpenMobileMenu,
        setAdminProducts,
      }}
    >
      {children}
    </MyAppContext.Provider>
  );
};

export default MyAppProvider;
