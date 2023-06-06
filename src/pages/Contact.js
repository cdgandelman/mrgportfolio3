import React, { useState } from 'react';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import { validateEmail } from '../utils/helpers';
import './Contact.css';

export default function Contact() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
    } else {
      alert(`Hello ${userName}, your email has been sent!`);
      setUserName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <>
      <NavBar />
      <div className="contact-container">
        <h1 className="c-header">Contact me</h1>
        <form className="form">
            <div>
                <label>What is your Name?</label>
                <br></br>
                <input
                    value={userName}
                    name="userName"
                    onChange={handleInputChange}
                    type="text"
                    placeholder=" Name ... "
                />
            </div>
            <div>
                <label>What is your email?</label>
                <br></br>
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder=" Email ... "
                />
            </div>
            <div>
                <label>Please leave a short message!</label>
                <br></br>
                <textarea
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="text"
                    placeholder=" Ask a Question or Comment ... "
                    rows={5}

                />
            </div>
          <br></br>
          <button type="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
