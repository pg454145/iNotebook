import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false,
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword, terms } = credentials;

    // Confirm password check
    if (password !== confirmPassword) {
      props.showAlert("Passwords do not match", "danger");
      return;
    }

    // Terms check
    if (!terms) {
      props.showAlert("You must accept the terms", "danger");
      return;
    }

    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password })
    });

    const json = await response.json();
    console.log(json);

    // Save the auth token and redirect
    if (json.authtoken) {
      localStorage.setItem('token', json.authtoken);
      navigate("/");
      props.showAlert("Account created successfully", "success");
    } else {
      props.showAlert("Invalid Details", "danger");
    }
  };

  const onChange = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setCredentials({ ...credentials, [e.target.name]: value });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-header text-center bg-primary text-white">
              <h3>Create an account to use iNotebook</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                {/* Name */}
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={credentials.name}
                    onChange={onChange}
                    required
                  />
                </div>
                {/* Email */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={credentials.email}
                    onChange={onChange}
                    required
                  />
                </div>
                {/* Password */}
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={credentials.password}
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
                {/* Confirm Password */}
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={credentials.confirmPassword}
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
                {/* Terms */}
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="terms"
                    name="terms"
                    checked={credentials.terms}
                    onChange={onChange}
                    required
                  />
                  <label className="form-check-label" htmlFor="terms">
                    I agree to the terms and conditions
                  </label>
                </div>
                {/* Submit */}
                <div className="d-grid">
                  <button type="submit" className="btn btn-success">Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;