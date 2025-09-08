import { useLocation } from "react-router-dom";
import MyAppContext from "./Context";

const MyAppProvider = ({ children }) => {
  const location = useLocation();

  return (
    <MyAppContext.Provider value={{ location }}>
      {children}
    </MyAppContext.Provider>
  );
};

export default MyAppProvider;
