import React, { useState } from "react";
import "../App.css"; // Updated path to global CSS

const EmployeeForm = ({ onEmployeeSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    employeeID: "",
    email: "",
    phoneNumber: "",
    department: "",
    dateOfJoining: "",
    role: "",
  });

  const [errors, setErrors] = useState({});
  const [alert, setAlert] = useState("");

  // Predefined department options
  const departments = ["HR", "Engineering", "Marketing", "Sales"];

  // Form Validation Logic
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.employeeID) newErrors.employeeID = "Employee ID is required";
    if (!formData.email.match(/^\S+@\S+\.\S+$/)) newErrors.email = "Invalid Email";
    if (!formData.phoneNumber.match(/^\d{10}$/))
      newErrors.phoneNumber = "Phone number must be 10 digits";
    if (!formData.department) newErrors.department = "Department is required";
    if (!formData.dateOfJoining) newErrors.dateOfJoining = "Date is required";
    if (!formData.role) newErrors.role = "Role is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAlert(""); // Clear previous alerts
    if (validateForm()) {
      onEmployeeSubmit(formData); // Pass the data up
      setAlert("Employee details submitted successfully!");
      setFormData({
        name: "",
        employeeID: "",
        email: "",
        phoneNumber: "",
        department: "",
        dateOfJoining: "",
        role: "",
      });
      setErrors({});
    } else {
      setAlert("Please fill out all required fields correctly!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="form-container">
      <h2>Employee Management Form</h2>
      {alert && <div className="alert">{alert}</div>}

      <form onSubmit={handleSubmit} className="employee-form">
        <div className="form-row">
          <div className="form-box">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="First and Last Name"
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="form-box">
            <label>Employee ID:</label>
            <input
              type="text"
              name="employeeID"
              value={formData.employeeID}
              onChange={handleChange}
              placeholder="Unique ID"
            />
            {errors.employeeID && <span className="error">{errors.employeeID}</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-box">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-box">
            <label>Phone Number:</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="10-digit number"
            />
            {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-box">
            <label>Department:</label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
            >
              <option value="">Select Department</option>
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
            {errors.department && <span className="error">{errors.department}</span>}
          </div>

          <div className="form-box">
            <label>Date of Joining:</label>
            <input
              type="date"
              name="dateOfJoining"
              value={formData.dateOfJoining}
              onChange={handleChange}
            />
            {errors.dateOfJoining && (
              <span className="error">{errors.dateOfJoining}</span>
            )}
          </div>
        </div>

        <div className="form-box">
          <label>Role:</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="Manager, Developer, etc."
          />
          {errors.role && <span className="error">{errors.role}</span>}
        </div>

        <div className="button-row">
          <button type="submit" className="btn-submit">
            Submit
          </button>
          <button
            type="reset"
            className="btn-reset"
            onClick={() => setFormData({})}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;
