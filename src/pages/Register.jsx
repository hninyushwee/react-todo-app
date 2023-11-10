import React, { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Register() {
  const initialValue = {
    name: "",
    phone: "",
    email: "",
    password: "",
    con_password: "",
    color: "",
  };
  const { theme, style } = useContext(ThemeContext);
  const [formInput, setFormInput] = useState(initialValue);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  // valiation for input data error
  const validate = (data) => {
    let error = {};
    const phoneRegx =
      /(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})/;
    const emailRegx =
      /^(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passWordRegx =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;

    // test for name input
    if (!data.name) {
      error.name = "Name is required!";
    }
    // test for Phone input
    if (!data.phone) {
      error.phone = "Phone is required!";
    } else if (!phoneRegx.test(data.phone)) {
      error.phone = "Phone number start plus(+) sign!";
    }
    //test for Email input
    if (!data.email) {
      error.email = "Email is required!";
    } else if (!emailRegx.test(data.email)) {
      error.email = "Email is invalid!";
    }
    // test for password input
    if (!data.password) {
      error.password = "Password is required!";
    } else if (!passWordRegx.test(data.password)) {
      error.password =
        "At least 8 characters with Number, Uppercase, lowercase and Special character";
    }
    // test for confirm password
    if (!data.con_password) {
      error.con_password = "Confirm Password is required!";
    } else if (data.password !== data.con_password) {
      error.con_password = "Password and Confirm Password not match!";
    }
    return error;
  };
  // Set input data
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };
  //do it if form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(formInput));
    setIsSubmit(true);
  };
  //do it if ok btn click
  const handleClose = () => {
    setIsSubmit(false);
    // clear form input
    setFormInput(initialValue);
  };
  return (
    <div className="container">
      <h3>Registration Form</h3>
      <div className="register-box">
        <div
          className="form-card"
          style={
            theme === "dark" ? style.cardSection.dark : style.cardSection.light
          }
        >
          <form
            action=""
            className="form-box"
            onSubmit={(e) => handleSubmit(e)}
          >
            <label htmlFor="name" className="label-register-for">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formInput.name}
              onChange={(e) => handleInput(e)}
              id="name"
              placeholder="Enter your name"
            />
            <span className="error">{errors.name}</span>

            <label htmlFor="phone" className="label-register-for">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              value={formInput.phone}
              onChange={(e) => handleInput(e)}
              id="phone"
              placeholder="Enter your Phone Number"
            />
            <span className="error">{errors.phone}</span>
            <label htmlFor="email" className="label-register-for">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formInput.email}
              onChange={(e) => handleInput(e)}
              id="email"
              placeholder="Enter your email"
            />

            <span className="error">{errors.email}</span>

            <label htmlFor="password" className="label-register-for">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formInput.password}
              onChange={(e) => handleInput(e)}
              id="password"
              placeholder="Enter password"
            />
            <span className="error">{errors.password}</span>

            <label htmlFor="con_password" className="label-register-for">
              Confirm Password
            </label>
            <input
              type="password"
              name="con_password"
              value={formInput.con_password}
              onChange={(e) => handleInput(e)}
              id="con_password"
              placeholder="Enter confirm password"
            />
            <span className="error">{errors.con_password}</span>

            <label htmlFor="color" className="label-register-for">
              Choose Color
            </label>
            <div className="color-card">
              <input
                type="radio"
                defaultChecked={true}
                className="white color"
                value="#fff"
                onChange={(e) => handleInput(e)}
                name="color"
              />
              <input
                type="radio"
                className="grey color"
                value="#e2e8f0"
                onChange={(e) => handleInput(e)}
                name="color"
              />
              <input
                type="radio"
                className="red color"
                value="#fbcfe8"
                onChange={(e) => handleInput(e)}
                name="color"
              />
              <input
                type="radio"
                className="green color"
                value="#86efac"
                onChange={(e) => handleInput(e)}
                name="color"
              />
              <input
                type="radio"
                className="pink color"
                onChange={(e) => handleInput(e)}
                value="#f9a8d4"
                name="color"
              />
              <input
                type="radio"
                className="yellow color"
                onChange={(e) => handleInput(e)}
                value="#fed7aa"
                name="color"
              />
              <input
                type="radio"
                className="blue color"
                onChange={(e) => handleInput(e)}
                value="#a5f3fc"
                name="color"
              />

              <input
                type="radio"
                className="purple color"
                onChange={(e) => handleInput(e)}
                value="#c4b5fd"
                name="color"
              />
            </div>
            <span className="error"></span>
            <button type="submit" className="btn register-btn">
              Register
            </button>
          </form>
        </div>
        <div>
          {isSubmit && Object.keys(errors).length === 0 && (
            <ShowData formInput={{ ...formInput }} handleClose={handleClose} />
          )}
        </div>
      </div>
    </div>
  );
}
function ShowData({ formInput, handleClose }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="data-card"
      style={{
        backgroundColor: formInput.color,
        color: theme === "dark" && "#000",
      }}
    >
      <h4>Your Registration Data</h4>
      <ul className="register-data">
        <li>Your Name is {formInput.name}</li>
        <li>Your Phone Number is {formInput.phone}</li>
        <li>Your Email is {formInput.email}</li>
      </ul>
      <button className="close-btn btn" type="button" onClick={handleClose}>
        OK
      </button>
    </div>
  );
}
