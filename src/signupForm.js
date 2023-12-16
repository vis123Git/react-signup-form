// SignUpForm.js
import React, { useState } from 'react';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(!emailRegex.test(e.target.value));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    // Password validation
    setPasswordError(e.target.value.length < 8);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    // Confirm Password validation
    setConfirmPasswordError(e.target.value !== password || e.target?.value?.length < 8  || !e.target.value);
  };

  const handleSubmit = () => {
    if (!emailError && !passwordError && !confirmPasswordError) {
      alert('Form submitted successfully!');
    } else {
      alert('Can’t submit the form. Please check the inputs.');
    }
  };

  return (
    <div className='container'>
      <div className='inputsDivs'>
        <label>Email  :</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          style={{ border: emailError ? '1px solid red' : '1px solid green' }}
        />
      </div>
        {emailError && <div style={{color:"red", marginBottom:"10px"}}>Error: Please enter a valid email address</div>}
      <div className='inputsDivs'>
        <label>Password   :</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          style={{ border: passwordError ? '1px solid red' : '1px solid green' }}
        />
      </div>
        {passwordError && <div style={{color:"red", marginBottom:"10px"}}>Error: Password must be at least 8 characters long</div>}
      <div className='inputsDivs'>
        <label>Confirm Password   :</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          style={{
            border: confirmPasswordError ? '1px solid red' : '1px solid green',
          }}
        />
      </div>
        {confirmPasswordError && <div style={{color:"red", marginBottom:"10px"}}>Error: Passwords do not match</div>}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default SignUpForm;
