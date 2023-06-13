import React, { useState } from 'react';
import './ContactPage.css';
import { TextField, Button } from '@mui/material';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    // Apply input restrictions based on field name
    if (name === 'name') {
      // Restrict to only accept name characters (letters, spaces, and hyphens)
      newValue = value.replace(/[^A-Za-z\s-]/g, '');
    } else if (name === 'email') {
      newValue = value; // No input restriction needed for email
    } else if (name === 'subject') {
      newValue = value; // No input restriction needed for subject (varchar)
    } else if (name === 'phone') {
      // Restrict to only accept 10-digit mobile numbers
      newValue = value.replace(/\D/g, '').slice(0, 10);
    }

    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log(formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      phone: '',
      message: ''
    });
  };

  const validateEmail = (email) => {
    // Simple email validation regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    // Simple phone number validation for 10-digit numbers
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  
    if (name === 'email') {
      if (value.trim() !== '') {
        if (!validateEmail(value)) {
          setFormErrors((prevErrors) => ({
            ...prevErrors,
            email: 'Please enter a valid email'
          }));
        } else {
          setFormErrors((prevErrors) => ({
            ...prevErrors,
            email: ''
          }));
        }
      } else {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          email: ''
        }));
      }
    } else if (name === 'phone') {
      if (value.trim() !== '') {
        if (!validatePhone(value)) {
          setFormErrors((prevErrors) => ({
            ...prevErrors,
            phone: 'Please enter a valid 10-digit phone number'
          }));
        } else {
          setFormErrors((prevErrors) => ({
            ...prevErrors,
            phone: ''
          }));
        }
      } else {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          phone: ''
        }));
      }
    }
  };
  
  
  
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <TextField
          label="Your Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ marginBottom: '20px' }}
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={Boolean(formErrors.email)}
          helperText={formErrors.email}
          required
          style={{ marginBottom: '20px' }}
        />
        <TextField
          label="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          style={{ marginBottom: '20px' }}
        />
        <TextField
          label="Phone No."
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          error={Boolean(formErrors.phone)}
          helperText={formErrors.phone}
          required
          style={{ marginBottom: '20px' }}
        />
        <TextField
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          multiline
          rows={4}
          style={{ marginBottom: '20px' }}
        />
        </form>
        <Button type="submit" variant="contained" color="primary">
          Send
        </Button>
      
    </div>
  );
};

export default ContactPage;
