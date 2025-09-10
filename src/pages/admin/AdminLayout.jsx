import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";

const AdminLayout = () => {
  return (
    <div className="max-w-screen max-h-screen pr-3">
      <AdminHeader />

      <div className="flex gap-3 h-screen">
        <AdminSidebar />

        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
