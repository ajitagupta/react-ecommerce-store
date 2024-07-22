import React, { useState } from 'react';
import './Loginform.css';

const account = {
  username: "testuser",
  pwd: "test1234"
};

const Loginform = () => {
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState("");

  const handlesubmit = (event) => {
    event.preventDefault();
    const matchingaccount = account.username === username && account.pwd === pwd;
    if (matchingaccount) {
      setError("You are successfully logged in");
    } else {
      setError("Incorrect username or password");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handlesubmit} className='sign-in-form'>
        <label>Username
          <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
        </label>
        <label>Password
          <input type="password" value={pwd} onChange={(event) => setPwd(event.target.value)} />
        </label>
        <br />
        <button className='loginbtn' type="submit">
          Login
        </button>
        <div className='error'>{error && <div>{error}</div>}</div>
      </form>
    </div>
  );
}

export default Loginform;
