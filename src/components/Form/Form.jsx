import { useState } from "react";
import { validation } from "../../Helpers/validation";

const Form = ({ login }) => {
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
      login(userData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email:</label>
      <input
        type="email"
        name="email"
        onChange={handleChange}
        value={userData.email}
      />
      <p>{errors.email}</p>
      <label>Password:</label>
      <input
        type="password"
        name="password"
        onChange={handleChange}
        value={userData.password}
      />
      <p>{errors.password}</p>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
