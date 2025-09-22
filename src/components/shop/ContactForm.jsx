import Logo from "./Logo";
import React, { useState } from "react";

const ContactForm = () => {
  const initialFormData = {
    email: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  console.log(formData);

  return (
    <div className=" absolute  lg:inset-20 flex items-center justify-between  w-full lg:max-w-5xl mx-auto bg-green-950  py-12 px-8 lg:shadow-sm lg:shadow-green-50 rounded-2xl lg:w-2/3 lg:max-h-5/12 lg:h-auto gap-5">
      <div className="flex-1/2">
        <Logo />
        <p className="text-green-50 font-bold text-sm">
          We design modern furniture that balances style and function, offering
          durable, affordable, and beautiful pieces made to suit your lifestyle
          perfectly.
        </p>
      </div>
      <div className="flex-1/2 flex flex-col gap-5">
        <h1 className="text-xl lg:text-2xl text-center font-bold text-orange-700">
          Subscribe to our news letter
        </h1>
        <form
          onSubmit={onSubmit}
          action=""
          className="min-w-full flex flex-col gap-5"
        >
          <input
            value={formData.email}
            onChange={(e) => setFormData(e.target.value)}
            type="email"
            placeholder="Enter your email..."
            className="w-full bg-green-50 rounded-xl py-2 px-4 outline-none caret-green-950 text-md font-semibold text-green-950"
          />
          <button
            type="submit"
            className="w-full tracking-wider bg-orange-700 rounded-full py-1 font-bold text-green-950 text-lg"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
