const Form = ({
  onSubmit,
  formData,
  setFormData,
  buttonText,
  //   isButtonDisabled,
  formControls,
}) => {
  const renderInputsByControlType = (getControlItem) => {
    let element = null;
    const value = formData[getControlItem.name] || "";

    switch (getControlItem.component) {
      case "input":
        element = (
          <input
            className="bg-green-50 border-green-950 border-2 rounded-full py-1 px-3 font-medium outline-0 text-green-950 flex-1"
            type={getControlItem.type}
            placeholder={getControlItem.placeholder}
            name={getControlItem.name}
            id={getControlItem.id}
            value={value}
            onChange={(e) =>
              setFormData({
                ...formData,
                [getControlItem.name]: e.target.value,
              })
            }
          />
        );
        break;
      case "textarea":
        element = (
          <textarea
            type={getControlItem.type}
            className="min-h-64 outline-0 border-2 border-green-950 rounded-2xl py-2 px-3 text-lg font-semibold"
            placeholder={getControlItem.placeholder}
            name={getControlItem.name}
            id={getControlItem.id}
            value={value}
            onChange={(e) =>
              setFormData({
                ...formData,
                [getControlItem.name]: e.target.value,
              })
            }
          />
        );
        break;

      case "select":
        element = (
          <select
            className="bg-green-50 w-full border-green-950 border-2 rounded-full py-1 px-3 font-medium outline-0 text-green-950"
            name={getControlItem.id}
            id={getControlItem.id}
            value={value}
            onChange={(e) =>
              setFormData({
                ...formData,
                [getControlItem.id]: e.target.value,
              })
            }
          >
            <option value="">Select {getControlItem.label}</option>
            {getControlItem.options?.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        );
        break;

      case "checkbox":
        element = (
          <input
            type="checkbox"
            name={getControlItem.id}
            id={getControlItem.id}
            checked={!!formData[getControlItem.id]}
            onChange={(e) =>
              setFormData({
                ...formData,
                [getControlItem.id]: e.target.checked,
              })
            }
          />
        );
        break;

      default:
        element = (
          <input
            type={getControlItem.type}
            placeholder={getControlItem.placeholder}
            name={getControlItem.name}
            id={getControlItem.id}
            value={value}
            onChange={(e) =>
              setFormData({
                ...formData,
                [getControlItem.name]: e.target.value,
              })
            }
          />
        );
        break;
    }

    return element;
  };

  return (
    <form onSubmit={onSubmit} className="px-5 bg-green-50 py-4">
      <div className="flex flex-col gap-2 mt-2 mb-3">
        {formControls.map((item) => (
          <div key={item.id} className="flex flex-col gap-3">
            <label
              htmlFor=""
              className="mb-2 text-green-950 font-semibold text-lg"
            >
              {item.label}
            </label>
            {renderInputsByControlType(item)}
          </div>
        ))}
      </div>
      <button
        className="w-full bg-green-950 text-white font-bold rounded-full text-lg cursor-pointer"
        type="submit"
      >
        {buttonText || "submit"}
      </button>
    </form>
  );
};

export default Form;
