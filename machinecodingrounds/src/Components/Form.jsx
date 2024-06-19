import React, { useState } from "react";
import "../styles/Form.scss";

const Form = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const getPasswordStrength = (password) => {
    let strength = 0;
    if (password.length > 5) strength += 1;
    if (password.match(/[a-z]+/)) strength += 1;
    if (password.match(/[A-Z]+/)) strength += 1;
    if (password.match(/[0-9]+/)) strength += 1;
    if (password.match(/[$@#&!]+/)) strength += 1;
    return strength;
  };

  const validateForm = () => {
    const errors = {};
    if (!validateEmail(formData.email)) {
      errors.email = "Invalid email address.";
    }
    if (formData.password.length < 8) {
      errors.password = "Password must be at least 8 characters long.";
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Optional: Validate on change
    validateForm();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("FormData", formData);
      alert("Form is valid and ready to be submitted!");
    } else {
      alert("Please correct errors before submitting.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {formErrors.email && <p className="error">{formErrors.email}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {formErrors.password && <p className="error">{formErrors.password}</p>}
        <div className="password-strength">
          Password Strength: {getPasswordStrength(formData.password)} / 5
        </div>
      </div>
      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {formErrors.confirmPassword && (
          <p className="error">{formErrors.confirmPassword}</p>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
