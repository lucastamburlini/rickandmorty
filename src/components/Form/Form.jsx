import { useState } from "react";
import { validation } from "../../Helpers/validation";

import "./form.css";

const Form = ({ handleLogin }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validation({
        ...userData,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault(userData);
    if (!errors.email && !errors.password) {
      handleLogin(userData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
         <img src="./src/assets/rick_and_morty.png" alt="rick_and_morty" />
      <label>Email</label>
      <input
        type="email"
        name="email"
        onChange={handleChange}
        value={userData.email}
      />
      <div className="warning">
        <span>{errors.email}</span>
      </div>
      <label>Password</label>
      <input
        type="password"
        name="password"
        onChange={handleChange}
        value={userData.password}
      />
      <div className="warning">
        <span>{errors.password}</span>
      </div>
      <button className="button-gradient" type="submit">Submit</button>
    </form>
  );
};

export default Form;
