import { useState } from "react";
import { validation } from "../../helpers/validation";
import image1 from '../../assets/rick_and_morty.png'

import style from "./Form.module.css";

const Form = ({ handleLogin }) => {
  const [userData, setUserData] = useState({
    email: "prueba@gmail.com",
    password: "p1234*",
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
    <form onSubmit={handleSubmit} className={style.form}>
         <img src={image1} alt="rick_and_morty" />
      <label>Email</label>
      <input
        type="email"
        name="email"
        onChange={handleChange}
        value={userData.email}
      />
      <div className={style.warning}>
        <span>{errors.email}</span>
      </div>
      <label>Password</label>
      <input
        type="password"
        name="password"
        onChange={handleChange}
        value={userData.password}
      />
      <div className={style.warning}>
        <span>{errors.password}</span>
      </div>
      <button className={style.buttonGradient} type="submit">Submit</button>
    </form>
  );
};

export default Form;
