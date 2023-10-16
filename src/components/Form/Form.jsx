import React, { useState } from "react";
import Input from "../Input/Input";
import Button from "../Input/Button";
import styles from "./Form.module.css";
import { Link, useNavigate } from "react-router-dom";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    userName: "",
    email: "",
    mobile: "",
    checkbox: false,
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, userName, email, mobile, checkbox } = formData;
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!userName.trim()) {
      newErrors.userName = "Username is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!mobile.trim()) {
      newErrors.mobile = "Mobile is required";
    }

    if (!checkbox) {
      newErrors.checkbox = "You must accept the terms";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      const formDataToSave = { name, userName, email, mobile };
      localStorage.setItem("formData", JSON.stringify(formDataToSave));

      console.log("Form submitted successfully!");
      console.log("Name:", name);
      console.log("Username:", userName);
      console.log("Email:", email);
      console.log("Mobile:", mobile);
      navigate("/category");
    }
  };

  const { name, userName, email, mobile, checkbox } = formData;

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.super}>
        <h1>Super app</h1>
        <p>Create your new account</p>
      </div>
      <div className={styles.formin}>
        <div className={styles.inputContainer}>
          <Input
            placeholder={"Name"}
            type={"text"}
            value={name}
            onChange={handleChange}
            name="name"
          />
          {errors.name && <div className={styles.error}>{errors.name}</div>}
        </div>

        <div className={styles.inputContainer}>
          <Input
            placeholder={"UserName"}
            type={"text"}
            value={userName}
            onChange={handleChange}
            name="userName"
          />
          {errors.userName && (
            <div className={styles.error}>{errors.userName}</div>
          )}
        </div>

        <div className={styles.inputContainer}>
          <Input
            placeholder={"Email"}
            type={"email"}
            value={email}
            onChange={handleChange}
            name="email"
          />
          {errors.email && <div className={styles.error}>{errors.email}</div>}
        </div>

        <div className={styles.inputContainer}>
          <Input
            placeholder={"Mobile"}
            type={"number"}
            value={mobile}
            onChange={handleChange}
            name="mobile"
          />
          {errors.mobile && <div className={styles.error}>{errors.mobile}</div>}
        </div>

        <div className={styles.check}>
          <input type="checkbox" onChange={handleChange} name="checkbox" />
          <p>Share my registration data with Superapp</p>
        </div>
        {errors.checkbox && (
          <div className={styles.error}>{errors.checkbox}</div>
        )}

        <Button children={"SIGN UP"} type={"submit"} />

        <div className={styles.disclaimer}>
          <div>
            <p>
              By clicking on sign up, you agree to Superapp
              <span>
                Terms and <br /> Conditions of Use
              </span>
            </p>
          </div>

          <div>
            <p>
              To learn more about how Superapp collects, uses, shares, and{" "}
              <br />
              protects your personal data, please read Superapp's
              <span>
                Privacy <br /> Policy
              </span>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
