import React, { useState } from 'react';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Perform login logic here, e.g., send data to the server
      console.log('Logged in with:', email, password);
    };
  
    return (
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2 className="signup-head-text">Login</h2>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <button className="signup-btn" type="submit">Login</button>
      </form>
    );
  };

  export default LoginForm;