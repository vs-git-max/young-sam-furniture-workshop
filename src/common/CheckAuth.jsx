// import React, { useContext } from "react";
import MyAppContext from "../context/Context";

const CheckAuth = ({ children }) => {
  // const {user,isAuthenticated,location} = useContext(MyAppContext)

  // if(user?.role !== 'admin' && isAuthenticated)

  return children;
};

export default CheckAuth;
