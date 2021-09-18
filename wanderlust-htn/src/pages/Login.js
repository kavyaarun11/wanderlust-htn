import React from "react";

import "../App.css";
import ParticlesContainer from "./ParticleContainer";
import logo from "../images/main-logo.png";

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
        <ParticlesContainer> </ParticlesContainer>
      <nav>
        <img src={logo} alt='logo' />
      </nav>
      <div className='loginContainerDetails'>
        <h1 className='slogan'>
          <span>
            
              keep<b> dreaming.</b>
              <br />
              keep <b>travelling.</b>
           
          </span>
          <br />
        </h1>
        <button className='homeButton'>Learn More</button>
      </div>

      <div className='loginContainer'>
        <h5 className='login-title'>
          <span>
            <b>
              Ready to Travel?
              <br />
            </b>
          </span>
          <br />
        </h5>
        <label>Email</label>
        <input
          type='text'
          autoFocus
          required
          value={email}
          placeholder='Type your email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className='errorMsg'>{emailError}</p>
        <label>Password</label>
        <input
          type='password'
          autoFocus
          required
          value={password}
          placeholder='Type your password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className='errorMsg'>{passwordError}</p>
        <div className='btnContainer'>
          {hasAccount ? (
            <>
              <button onClick={handleLogin}>Log In</button>
              <p>
                Don't have an account?{" "}
                <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span>
              </p>
            </>
          ) : (
            <>
              <button onClick={handleSignup}>Create Account</button>
              <p>
                Have an account?{" "}
                <span onClick={() => setHasAccount(!hasAccount)}>Log In</span>
              </p>
            </>
          )}
        </div>
      </div>
      </section>
  );
};


export default Login;
