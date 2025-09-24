import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="w-screen flex h-screen ">
      <div className="hidden lg:flex items-center justify-center flex-1/2 bg-green-950">
        <h1 className="">Furnisort</h1>
      </div>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
