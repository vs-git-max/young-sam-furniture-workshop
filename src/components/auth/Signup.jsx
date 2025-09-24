import Form from "@/common/Form";
import { registerFormControls } from "@/helper";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const initialFormData = {
    username: "",
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const onSubmit = () => {};

  return (
    <div>
      <Form
        formControls={registerFormControls}
        buttonText="Signup"
        onSubmit={onSubmit}
        formData={formData}
        setFormData={setFormData}
      />

      <p className="">
        Already have an account <Link to={"/auth/login"}>Login</Link>
      </p>
    </div>
  );
};

export default Signup;
