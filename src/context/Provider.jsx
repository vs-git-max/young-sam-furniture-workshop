import { useLocation } from "react-router-dom";
import MyAppContext from "./Context";

const MyAppProvider = ({ children }) => {
  const location = useLocation();
  const user = null;
  const isAuthenticated = false;

  return (
    <MyAppContext.Provider value={{ location, user, isAuthenticated }}>
      {children}
    </MyAppContext.Provider>
  );
};

export default MyAppProvider;
