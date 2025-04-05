import React, { useState } from 'react';


const FormDetails = () => {
  const [email, setEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');

  const handleEmailSend = () => {
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }

    // Simulated send (you would call your backend/email API here)
    setFormMessage(`Form details sent to ${email}`);
    setEmail('');
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <div className="form-header">FORM DETAILS</div>
        <div className="form-content">
          <p>This is where the form details will be displayed.</p>
        </div>
      </div>

      <button className="download-button">DOWNLOAD FORMS</button>

      <div className="email-section">
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="email-input"
        />
        <button onClick={handleEmailSend} className="email-button">
          Email Form
        </button>
        {formMessage && <p className="success-message">{formMessage}</p>}
      </div>
    </div>
  );
};

export default FormDetails;