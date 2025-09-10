import { useState } from "react";
import Form from "../../common/Form";
import { addProductsFormControls } from "../../helper";

const initialFormData = {};

const AddNewProduct = () => {
  const [formData, setFormData] = useState(initialFormData);

  return (
    <div className="max-h-screen w-full">
      <div className="flex w-full justify-between md:flex-row  flex-col gap-2 items-center">
        <div className="flex flex-col gap-3 md:flex-1/2 flex-1">
          <Form
            formControls={addProductsFormControls}
            formData={formData}
            setFormData={setFormData}
            buttonText="Add new item"
          />
        </div>
        <div className="flex flex-col gap-3 md:flex-1/2 flex-1">chris</div>
      </div>
    </div>
  );
};

export default AddNewProduct;
