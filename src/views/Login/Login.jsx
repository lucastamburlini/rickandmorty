import Form from "../../components/Form/Form";

import style from './Login.module.css'

const Login = ({ handleLogin }) => {
  return (
    <div className={style.login}>
      <Form handleLogin={handleLogin} />
    </div>
  );
};

export default Login;
