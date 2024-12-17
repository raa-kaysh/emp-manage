CREATE DATABASE ems;
USE ems;

CREATE TABLE employees (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  employeeId VARCHAR(10) UNIQUE,
  email VARCHAR(255) UNIQUE,
  phone VARCHAR(10),
  department VARCHAR(50),
  dateOfJoining DATE,
  role VARCHAR(50)
);
