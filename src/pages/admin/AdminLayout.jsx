import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";

const AdminLayout = () => {
  return (
    <div className="max-w-screen max-h-screen pr-3 fixed top-0 left-0 right-0">
      <AdminHeader />

      <div className="flex gap-3 h-screen pb-20">
        <AdminSidebar />

        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
