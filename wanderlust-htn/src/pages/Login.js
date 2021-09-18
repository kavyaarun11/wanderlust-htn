import React from "react";
import "../App.css";

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;
   
    return (

    <section className='login'>
      <nav>
      </nav>

      <div className='loginContainer'>
         
      </div>
      </section>
  );
};


export default Login;
