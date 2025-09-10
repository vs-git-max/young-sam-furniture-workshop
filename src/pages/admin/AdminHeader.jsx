import { LogOut } from "lucide-react";

const AdminHeader = () => {
  return (
    <div className="shadow py-2 px-4 flex w-full items-center justify-between ">
      <div className="">Logo</div>
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
