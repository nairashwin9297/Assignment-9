import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateForm = () => {
    // Reset error messages
    setEmailError('');
    setPasswordError('');

    // Example validation
    if (email === '') {
      setEmailError('Email is required');
      return;
    }

    if (password === '') {
      setPasswordError('Password is required');
      return;
    }

    // If all validations pass, you can use Axios for making HTTP requests
    axios.post('http://localhost:2000/user/login', { email, password })
      .then(response => {
        // Handle the response
        console.log(response.data);
        // Move the following line inside the validateForm function
        console.log('Form submitted successfully');
        window.location.href = '/Home';
      })
      .catch(error => {
        if (error.response && error.response.status === 401) {
            // The server returned a 401 status code
            if (error.response.data.message === "No user found") {
              setEmailError("No user found");
            } else if (error.response.data.message === "Invalid Password!") {
              setPasswordError("Invalid Password!");
            }
          } else {
            // Handle other types of errors
            console.error('Error:', error);
          }
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <h2 className="text-center mb-4">Login</h2>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <small className="form-text text-danger">{emailError}</small>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <small className="form-text text-danger">{passwordError}</small>
            </div>
            <button type="button" className="btn btn-primary btn-block mt-3" onClick={validateForm}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
