import Form from "@/common/Form";
import MyAppContext from "@/context/Context";
import { registerFormControls } from "@/helper";
import { signup } from "@/store/auth/auth.slice";
import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Signup = () => {
  const dispatch = useDispatch();
  const { navigate } = useContext(MyAppContext);

  const initialFormData = {
    username: "",
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const onSubmit = (e) => {
    e.preventDefault();
    setFormData(initialFormData);

    dispatch(signup(formData)).then((data) => {
      if (data?.payload?.success) {
        toast.success(data?.payload?.message);
        navigate("/auth/login");
      } else {
        console.log(data);
        toast.error(data?.payload?.message);
      }
    });
  };

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
