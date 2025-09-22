import ContactForm from "./ContactForm";
import Logo from "./Logo";
import { footerNav, socialLinks } from "@/helper";

const Footer = () => {
  return (
    <footer className=" w-full lg:mx-auto relative max-h-screen mt-12 bg-green-950  min-h-[1260px]  overflow-hidden">
      <div className="absolute inset-0 w-full bg-green-50 origin-top-left -skew-y-12 h-5/12"></div>
      <ContactForm />
      <div className="lg:my-12 absolute bottom-5  top-[50%] left-0 right-0  px-2">
        <div className="flex flex-col items-center">
          <Logo />
          <p className="text-green-50 font-bold text-sm max-w-3xl text-center">
            We design modern furniture that balances style and function,
            offering durable, affordable, and beautiful pieces made to suit your
            lifestyle perfectly.
          </p>
          <div className="flex items-center gap-5 mt-5">
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
        </div>
        <div className="flex mt-12  w-full justify-between items-start lg:max-w-7xl mx-auto">
          {footerNav.map((foot) => (
            <div key={foot.title} className="">
              <h1 className="text-orange-600 font-bold text-lg">
                {foot.title}
              </h1>
              <div className="flex flex-col items-start  gap-3">
                {foot.links.map((footLink) => (
                  <a
                    key={footLink.name}
                    href={footLink.href}
                    className="text-green-50 font-semibold hover:underline hover:text-green-200 transition-all duration-150 "
                  >
                    {footLink.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-green-600 pt-8 absolute bottom-0 right-0 left-0">
        <p className="text-center text-green-200 text-sm">
          ©{new Date().getFullYear()} Furnisort. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
