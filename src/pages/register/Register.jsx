import React from "react";
import Form from "../../components/Form/Form";
import "./register.css";

const Register = () => {
  return (
    <>
      <div className="register">
        <div className="image">
          <img src="/register.png" alt="register" />
          <h2>Discover new things on Superapp</h2>
        </div>
        <div className="imagee">
          <Form />
        </div>
      </div>
    </>
  );
};

export default Register;
