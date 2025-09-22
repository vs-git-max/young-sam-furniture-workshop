import Logo from "@/components/shop/Logo";
import MyAppContext from "@/context/Context";
import { LogOut, Menu } from "lucide-react";
import { useContext } from "react";

const AdminHeader = () => {
  const { openMobileMenu, setOpenMobileMenu } = useContext(MyAppContext);
  return (
    <div className="shadow py-2 px-4 flex w-full items-center justify-between ">
      <div className="lg:hidden block">
        <button
          className="shadow py-1.5 px-3 bg-green-950 text-white rounded-sm"
          onClick={() => setOpenMobileMenu(!openMobileMenu)}
        >
          <Menu className="w-7 " />
        </button>
      </div>
      <div className="">
        <h1 className="text-orange-600 font-bold text-xl">
          Furni<span className="text-green-950">sort</span>
        </h1>
      </div>
      <div className="">
        <button className="bg-green-950 py-2 px-4 rounded-full font-bold text-white cursor-pointer flex items-center gap-2 hover:opacity-95">
          <LogOut className="size-5 " />
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminHeader;
