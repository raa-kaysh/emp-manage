import React, { useState } from "react";
import EmployeeForm from "./components/EmployeeForm";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (employeeData) => {
    setEmployees([...employees, employeeData]);
  };

  return (
    <div className="App">
      <EmployeeForm onEmployeeSubmit={addEmployee} />
      <div className="employee-list">
        <h2>Employee Details</h2>
        <ul>
          {employees.map((employee, index) => (
            <li key={index}>
              <strong>{employee.name}</strong> ({employee.employeeID}) -{" "}
              {employee.department} - {employee.role} - {employee.dateOfJoining}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
