import React from "react";
import "./input.css";
export default function Button({
  children,
  type = "button",
  className = "btn",

  ...props
}) {
  return (
    <button className={`${className}`} {...props}>
      {children}
    </button>
  );
}
