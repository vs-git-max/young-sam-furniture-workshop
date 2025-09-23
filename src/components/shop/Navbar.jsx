import { navLinks, socialLinks } from "@/helper";
import Logo from "./Logo";
import { useContext, useState } from "react";
import MyAppContext from "@/context/Context";
import { Menu, ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";

const Navbar = () => {
  const { navigate, location, openUserMobileMenu, setOpenUserMobileMenu } =
    useContext(MyAppContext);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleNavClick = (link) => {
    if (link.startsWith("#")) {
      const section = document.getElementById(link.replace("#", ""));
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(link);
    }
  };

  return (
    <div className="max-w-screen bg-green-950 fixed left-0 right-0 z-1000">
      <div className=" items-center justify-between w-full flex  px-2 py-2">
        <Logo />
        <div className=" block lg:hidden ">
          <Menu
            className="text-green-950 bg-green-50 size-6 "
            onClick={() => setOpenUserMobileMenu(!openUserMobileMenu)}
          />
        </div>
        <div className="lg:flex space-x-6 hidden ">
          {navLinks.map((link) => (
            <div
              className=" relative group"
              key={link.id}
              onMouseEnter={() => link.subMenu && setOpenDropdown(link.id)}
              onMouseLeave={() => link.subMenu && setOpenDropdown(null)}
            >
              <button
                className={` cursor-pointer text-green-100 lg:font-semibold font-medium py-1 text-sm   `}
                onClick={() => !link.subMenu && handleNavClick(link.link)}
              >
                {link.label}
                <span
                  className={`  ${
                    location.pathname.includes(link.link) ? "w-full" : ""
                  }  cursor-pointer absolute w-0 h-0.5 bg-orange-600 bottom-0 left-0 group-hover:w-full transition-all duration-300`}
                ></span>
              </button>

              {link.subMenu && openDropdown === link.id && (
                <div className="rounded-md shadow-lg p-2 z-50 w-56 left-0 mt-1 bg-white text-black  absolute space-x-3 space-y-3">
                  {link.subMenu.map((sub) => (
                    <button
                      key={sub.label}
                      className="text-sm font-bold text-green-950 py-0.5 px-1.5 rounded-2xl bg-green-50 cursor-pointer hover:bg-green-100 duration-300 transition-all"
                      onClick={() => handleNavClick(sub.link)}
                    >
                      {sub.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="space-x-2 flex">
          <button
            onClick={() => navigate("/cart")}
            className="bg-white py-0.5 px-2 rounded-4xl font-bold text-sm tracking-wider text-green-950 hover:opacity-95 cursor-pointer flex items-center gap-2"
          >
            <ShoppingCart className="size-5" />
            cart
          </button>
          <button
            onClick={() => navigate("/auth/login")}
            className="bg-orange-600  text-green-950 py-0.5 px-2 rounded-4xl font-bold text-sm hover:opacity-95 cursor-pointer"
          >
            Signup
          </button>
        </div>
      </div>
      <Sheet open={openUserMobileMenu} onOpenChange={setOpenUserMobileMenu}>
        <SheetContent side="left" className="bg-green-50 w-80">
          <SheetHeader>
            <SheetTitle>
              <Logo />
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-3 items-start w-full">
            {navLinks.map((link) => (
              <a
                href={link.link}
                onClick={() => setOpenUserMobileMenu(false)}
                className="bg-green-950 text-green-100 w-full rounded-2xl px-4 py-2 font-bold text-xl"
              >
                {link.label}
              </a>
            ))}
          </div>

          <SheetFooter className="bg-green-950">
            <div className="flex  items-center w-full justify-between mb-5">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    href={link.href}
                    key={link.id}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-100 flex flex-col items-center gap-2 font-medium"
                  >
                    <Icon className="text-orange-600 " />
                    {link.name}
                  </a>
                );
              })}
            </div>
            <SheetDescription className="px-3 font-medium text-sm text-orange-600 text-center">
              We design modern furniture that balances style and function,
              offering durable, affordable, and beautiful pieces made to suit
              your lifestyle perfectly.
            </SheetDescription>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Navbar;
