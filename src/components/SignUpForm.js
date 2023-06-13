import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import './SignUpForm.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  const [enrollmentNo, setEnrollmentNo] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [state, setState] = useState('');
  const navigate = useNavigate('');

  const handleSubmit = (e) => {
    const data = {full_name: fullName, email_address:email, address, state,enrollment_number:enrollmentNo,postal_code:postalCode, mobile}
    console.log(data, 'data')
    e.preventDefault();
    const response = fetch('http://localhost:3001/add/user', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      // Adding body or contents to send
      body: JSON.stringify(data)})
      .then(res => res).then(r => {
         navigate('dataTable');
      }).catch(err => console.log(err))
    // Add your logic here to handle form submission
    // You can access the form values using the state variables
  };

  const validateEnrollmentNo = () => {
    return /^\d+$/.test(enrollmentNo);
  };

  const validateFullName = () => {
    return /^[A-Za-z ]+$/.test(fullName);
  };

  const validateEmail = () => {
    // Regex pattern for email validation
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailPattern.test(email);
  };

  const validateMobile = () => {
    return /^\d{10}$/.test(mobile);
  };

  const validatePostalCode = () => {
    return /^\d{6}$/.test(postalCode);
  };


  return (
    <div className="container">
      <div class="top-container">
  <div class="logo-container">
    <img src="https://bharatividyapeethfees.com/college/sitedata/images/pay_left.png" alt="Logo 1" class="logo" />
  </div>
  <div class="text-container">
    <h1 class="portal-title">Fee Management Portal</h1>
  </div>
  <div class="logo-container">
    <img src="https://bharatividyapeethfees.com/college/sitedata/images/pay_right.png" alt="Logo 2" class="logo" />
  </div>
</div>

<div className="form-container">
        <form onSubmit={handleSubmit}>
        <TextField
            label="Enrollment Number"
            value={enrollmentNo}
            onChange={(e) => setEnrollmentNo(e.target.value)}
            fullWidth
            required
            error={!validateEnrollmentNo() && enrollmentNo !== ''}
            helperText={!validateEnrollmentNo() && enrollmentNo !== '' && 'Please enter only digits'}
            style={{ marginBottom: '20px' }}
          />

          <TextField
            label="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            fullWidth
            required
            error={!validateFullName() && fullName !== ''}
            helperText={!validateFullName() && fullName !== '' && 'Please enter only characters'}
            style={{ marginBottom: '20px' }}
          />

          <TextField
            label="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            required
            error={!validateEmail() && email !== ''}
            helperText={!validateEmail() && email !== '' && 'Please enter a valid email'}
            style={{ marginBottom: '20px' }}
          />

          <TextField
            label="Mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            fullWidth
            required
            error={!validateMobile() && mobile !== ''}
            helperText={!validateMobile() && mobile !== '' && 'Please enter a valid 10-digit mobile number'}
            style={{ marginBottom: '20px' }}
          />

          <TextField
            label="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            multiline
            rows={4}
            fullWidth
            required
            style={{ marginBottom: '20px' }}
          />

          <TextField
            label="Postal Code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            fullWidth
            required
            error={!validatePostalCode() && postalCode !== ''}
            helperText={!validatePostalCode() && postalCode !== '' && 'Please enter a valid 6-digit postal code'}
            style={{ marginBottom: '20px' }}
          />

          <TextField
            label="State"
            value={state}
            onChange={(e) => setState(e.target.value)}
            select
            fullWidth
            required
            style={{ marginBottom: '20px', textAlign: 'justify' }}
          >
            <MenuItem value="">Select</MenuItem>
            <MenuItem value="Andhra Pradesh">Andhra Pradesh</MenuItem>
            <MenuItem value="Arunachal Pradesh">Arunachal Pradesh</MenuItem>
            <MenuItem value="Assam">Assam</MenuItem>
            <MenuItem value="Bihar">Bihar</MenuItem>
            <MenuItem value="Chhattisgarh">Chhattisgarh</MenuItem>
            <MenuItem value="Delhi">Delhi</MenuItem>
            <MenuItem value="Goa">Goa</MenuItem>
            <MenuItem value="Gujarat">Gujarat</MenuItem>
            <MenuItem value="Haryana">Haryana</MenuItem>
            <MenuItem value="Himachal Pradesh">Himachal Pradesh</MenuItem>
            <MenuItem value="Jharkhand">Jharkhand</MenuItem>
            <MenuItem value="Karnataka">Karnataka</MenuItem>
            <MenuItem value="Kerala">Kerala</MenuItem>
            <MenuItem value="Madhya Pradesh">Madhya Pradesh</MenuItem>
            <MenuItem value="Maharashtra">Maharashtra</MenuItem>
            <MenuItem value="Manipur">Manipur</MenuItem>
            <MenuItem value="Meghalaya">Meghalaya</MenuItem>
            <MenuItem value="Mizoram">Mizoram</MenuItem>
            <MenuItem value="Nagaland">Nagaland</MenuItem>
            <MenuItem value="Odisha">Odisha</MenuItem>
            <MenuItem value="Punjab">Punjab</MenuItem>
            <MenuItem value="Rajasthan">Rajasthan</MenuItem>
            <MenuItem value="Sikkim">Sikkim</MenuItem>
            <MenuItem value="Tamil Nadu">Tamil Nadu</MenuItem>
            <MenuItem value="Telangana">Telangana</MenuItem>
            <MenuItem value="Tripura">Tripura</MenuItem>
            <MenuItem value="Uttar Pradesh">Uttar Pradesh</MenuItem>
            <MenuItem value="Uttarakhand">Uttarakhand</MenuItem>
            <MenuItem value="West Bengal">West Bengal</MenuItem>
          </TextField>

          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;