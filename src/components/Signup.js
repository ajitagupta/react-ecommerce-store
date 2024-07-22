import React, { useState } from 'react';
import './Signup.css';  // Import the CSS file

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      setError("Signup successful!");
      // Here you would typically also handle sending the signup data to your server
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className='sign-up-form'>
        <label>Username
          <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
        </label>
        <label>Email
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label>Password
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <label>Confirm Password
          <input type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
        </label>
        <br />
        <button className='signupbtn' type="submit">
          Signup
        </button>
        <div className='error'>{error && <div>{error}</div>}</div>
      </form>
    </div>
  );
}

export default Signup;
