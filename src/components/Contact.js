import React, { useState } from 'react';
import './Contact.css';  // Import the CSS file

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setError("All fields are required");
    } else {
      setError("");
      alert("Message sent successfully!");
      // Here you would typically also handle sending the message to your server
    }
  };

  return (
    <div className="contact-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>Name
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>Email
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>Message
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
        </label>
        <br />
        <button className="submitbtn" type="submit">
          Submit
        </button>
        <div className="error">{error && <div>{error}</div>}</div>
      </form>
    </div>
  );
};

export default Contact;
