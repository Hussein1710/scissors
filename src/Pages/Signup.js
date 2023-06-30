import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../App.css'
import {signInWithRedirect, auth, provider} from '../config'
const SignupForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [Confirmpassword, setConfirmPassword] = useState('');
    
    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
    };
  

    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };

    // const handleConfirmPasswordChange = (e) => {
    //   setConfirmPassword(e.target.value);
    // };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Perform signup logic here

      console.log('Signed up with:',username, email, password);
    };
    
    const signIn= (event) =>{
      event.preventDefault();
      signInWithRedirect(auth, provider);

    }

    return (
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2 className="signup-head-text">Sign Up</h2>
        <label>
          Username:
          <input type="text" placeholder="Enter username" value={username} onChange={handleUsernameChange} />
        </label>
        <label>
          Email:
          <input type="email" placeholder="Enter your email" value={email} onChange={handleEmailChange} />
        </label>
        <label>
          Password:
          <input type="password" placeholder="Enter Password" value={password} onChange={handlePasswordChange} />
        </label>
        <label>
          ConfirmPassword:
          <input type="password" placeholder="Confirm Password" value={password} onChange={handlePasswordChange} />
        </label>
        <p className="sign-already">Already have an account?<Link to={`/Login`}>Login</Link></p>
        <button onClick={signIn} className="signup-btn" type="submit">Sign Up </button>
      </form>
      
    );
    
  };
  
  export default SignupForm;