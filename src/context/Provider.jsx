import { useLocation } from "react-router-dom";
import MyAppContext from "./Context";
import { useEffect, useState } from "react";
import { products } from "../helper";

const MyAppProvider = ({ children }) => {
  const location = useLocation();
  const user = null;
  const isAuthenticated = false;
  const [adminProducts, setAdminProducts] = useState([]);

  return (
    <MyAppContext.Provider
      value={{
        location,
        user,
        isAuthenticated,
        adminProducts,
        setAdminProducts,
      }}
    >
      {children}
    </MyAppContext.Provider>
  );
};

export default MyAppProvider;
