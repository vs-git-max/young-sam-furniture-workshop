import { useLocation, useNavigate } from "react-router-dom";
import MyAppContext from "./Context";
import { useState } from "react";

const MyAppProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = {
    role: "admin",
  };
  const isAuthenticated = false;
  const [adminProducts, setAdminProducts] = useState([]);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <MyAppContext.Provider
      value={{
        location,
        user,
        navigate,
        isAuthenticated,
        adminProducts,
        openMobileMenu,
        setOpenMobileMenu,
        setAdminProducts,
      }}
    >
      {children}
    </MyAppContext.Provider>
  );
};

export default MyAppProvider;
