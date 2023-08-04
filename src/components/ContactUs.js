// ContactUs.js
import React, { useState } from 'react';
import './ContactUs.css';
import contactImage from '../assets/contact-image.jpg'; // Replace this with your actual image path

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle the form submission logic, such as sending the data to a server or performing any other actions.
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <div className="contact-us-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>
          We are always ready to assist you. Please fill out the form below and we will get back to you as soon as possible.
        </p>
      </div>
      {!submitted ? (
        <div>
          <div className="contact-image">
            <img src={contactImage} alt="Contact Us" />
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      ) : (
        <div className="thank-you-message">
          <h2>Thank you for contacting us!</h2>
          <p>We have received your message and will get back to you soon.</p>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
