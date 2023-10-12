import Form from "../../components/Form/Form";

import './Login.module.css'

const Login = ({ handleLogin }) => {
  return (
    <div className="login">
      <Form handleLogin={handleLogin} />
    </div>
  );
};

export default Login;
