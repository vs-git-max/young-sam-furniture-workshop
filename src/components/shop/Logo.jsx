import MyAppContext from "@/context/Context";
import React, { useContext } from "react";

const Logo = () => {
  const { navigate } = useContext(MyAppContext);

  return (
    <h1
      onClick={() => navigate("/")}
      className=" text-orange-600 font-bold text-lg cursor-pointer"
    >
      Furni<span className="text-green-50">sort</span>
    </h1>
  );
};

export default Logo;
