import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import MyAppContext from "@/context/Context";
import {
  ArrowUpDown,
  ChartNoAxesCombined,
  Plus,
  ShoppingBasket,
} from "lucide-react";
import { useContext } from "react";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  const { openMobileMenu, setOpenMobileMenu } = useContext(MyAppContext);

  const adminSidebarLinks = [
    { label: "Dashboard", link: "/admin/dashboard", icon: ChartNoAxesCombined },
    { label: "Products", link: "/admin/products", icon: ShoppingBasket },
    { label: "Add New Product", link: "/admin/add-new-product", icon: Plus },
    { label: "Orders", link: "/admin/orders", icon: ArrowUpDown },
  ];

  return (
    <div className="hidden lg:block rounded-r-2xl bg-green-950 w-64 min-h-full fixed ">
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

      <Sheet open={openMobileMenu} onOpenChange={setOpenMobileMenu}>
        <SheetContent side="left" className="bg-green-950 w-64">
          <SheetHeader>
            <SheetTitle>Logo</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-3">
            {adminSidebarLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  className="flex items-center gap-2 p-2 text-[#f0f8ff] font-bold hover:bg-green-900 rounded-2xl duration-300 "
                  key={link.label}
                  to={link.link}
                  onClick={() => setOpenMobileMenu(false)}
                >
                  <Icon className="size-6" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>
          <SheetDescription>This is the admin panel</SheetDescription>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default AdminSidebar;
