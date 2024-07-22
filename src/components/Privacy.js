import React from 'react';
import './Privacy.css';  // Import the CSS file

const Privacy = () => {
  return (
    <div className="privacy-container">
      <div className="privacy-content">
        <h1>Privacy Statement</h1>
        <p>
          Your privacy is important to us. This privacy statement explains the personal data 
          we collect, how we use it, and your rights regarding your data.
        </p>
        <h2>Information We Collect</h2>
        <p>
          We collect information you provide directly to us. For example, we collect information 
          when you create an account, subscribe, participate in any interactive features, fill out 
          a form, request customer support, or otherwise communicate with us.
        </p>
        <h2>How We Use Information</h2>
        <p>
          We use the information we collect to provide, maintain, and improve our services, 
          to communicate with you, and to protect our users.
        </p>
        <h2>Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal data. You also have the 
          right to object to or restrict certain processing of your data.
        </p>
        <h2>Contact Us</h2>
        <p>
          If you have any questions about this privacy statement, please contact us at privacy@mystore.com.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
