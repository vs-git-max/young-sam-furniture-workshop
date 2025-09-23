import { useContext } from "react";
import MyAppContext from "../context/Context";

const CheckAuth = ({ children }) => {
  const { user, isAuthenticated, location, navigate } =
    useContext(MyAppContext);

  if (
    user?.role !== "admin" &&
    (isAuthenticated || !isAuthenticated) &&
    location.pathname.includes("/admin")
  ) {
    navigate("/");
  }

  return children;
};

export default CheckAuth;
