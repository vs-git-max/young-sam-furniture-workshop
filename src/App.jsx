import { Route, Routes } from "react-router-dom";
import Home from "./pages/shop/Home";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Navbar from "./components/shop/Navbar";
import { Fragment } from "react";
import Footer from "./components/shop/Footer";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth">
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default App;
