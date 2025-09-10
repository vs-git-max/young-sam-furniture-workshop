import {
  ArrowUpDown,
  ChartNoAxesCombined,
  Plus,
  ShoppingBasket,
} from "lucide-react";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  const adminSidebarLinks = [
    { label: "Dashboard", link: "/admin/dashboard", icon: ChartNoAxesCombined },
    { label: "Products", link: "/admin/products", icon: ShoppingBasket },
    { label: "Add New Product", link: "/admin/add-new-product", icon: Plus },
    { label: "Orders", link: "/admin/orders", icon: ArrowUpDown },
  ];

  return (
    <div className="hidden lg:block rounded-r-2xl bg-green-950 w-64 h-full ">
      <div className="flex flex-col gap-3 mt-4">
        {adminSidebarLinks.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              className="flex items-center gap-2 p-2 text-[#f0f8ff] font-bold hover:bg-green-900 rounded-2xl duration-300 "
              key={link.label}
              to={link.link}
            >
              <Icon className="size-6" />
              <span>{link.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AdminSidebar;
