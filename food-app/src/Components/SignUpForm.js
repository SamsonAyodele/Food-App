import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Logo from "../assets/lillieslogo.svg";

const SignUpForm = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sessionStorage.setItem("user", JSON.stringify(inputs));
    toast.success(`Successfully signed up`);

    setInterval(() => {
      window.location = "/login";
    }, 2000);
  };

  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className="sign--form">
      <ToastContainer />
      <h1>Welcome to Lilies!</h1>
      {
        <Link to={"/"}>
          <img src={Logo} alt="logo"></img>
        </Link>
      }
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={inputs.name || ""}
          placeholder="Your First Name"
          onChange={handleChange}
        />{" "}
        {/* <br /> */}
        <input
          type="text"
          name="email"
          value={inputs.email || ""}
          placeholder="Your email address"
          onChange={handleChange}
        />{" "}
        {/* <br /> */}
        <input
          type={show ? "text" : "password"}
          name="password"
          value={inputs.password || ""}
          placeholder="Your password"
          onChange={handleChange}
        />
        <span className="show--fields" onClick={handleClick}>
          {show ? "Hide" : "Show"}
        </span>
        {/* <br /> */}
        <button type="submit" className="submit--form">
          SIGN UP
        </button>
      </form>
      <Link to={"/login"}>
        <p>Already have an account. LOGIN</p>
      </Link>
    </div>
  );
};

export default SignUpForm;
