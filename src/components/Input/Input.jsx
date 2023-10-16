import React from "react";
import "./input.css";

const Input = (
  { type, placeholder, className = "input", checked, name, ...props },
  ref
) => {
  const inputProps = {
    type: type,
    placeholder: placeholder,
    className: className,
    ...props,
  };

  if (type === "checkbox") {
    delete inputProps.type;
  }

  return (
    <div className="input-field">
      {type === "checkbox" ? (
        <label>
          <input {...inputProps} type="checkbox" checked="checked" />
          {placeholder}
        </label>
      ) : (
        <input {...inputProps} name={name} />
      )}
    </div>
  );
};

export default React.forwardRef(Input);
