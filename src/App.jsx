import { Route, Routes } from "react-router-dom";
import Home from "./pages/shop/Home";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Navbar from "./components/shop/Navbar";
import { Fragment, useContext } from "react";
import Footer from "./components/shop/Footer";
import MyAppContext from "./context/Context";
import AdminLayout from "./pages/admin/AdminLayout";
import Dashboard from "./components/admin/Dashboard";
import Orders from "./components/admin/Orders";
import Products from "./components/admin/Products";
import AddNewProduct from "./components/admin/AddNewProduct";

const App = () => {
  const { location } = useContext(MyAppContext);

  const displayNavAndFooter =
    location.pathname.includes("/auth") || location.pathname.includes("/admin");

  return (
    <Fragment>
      {!displayNavAndFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth">
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="add-new-product" element={<AddNewProduct />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
      {!displayNavAndFooter && <Footer />}
    </Fragment>
  );
};

export default App;
