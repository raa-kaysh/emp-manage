const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '123',
  database: 'ems',
});

db.connect((err) => {
  if (err) throw err;
  console.log('MySQL Connected');
});

// Add Employee API
app.post('/api/employees', (req, res) => {
  const { name, employeeId, email, phone, department, dateOfJoining, role } = req.body;

  const query = 'INSERT INTO employees SET ?';
  const data = { name, employeeId, email, phone, department, dateOfJoining, role };

  db.query(query, data, (err) => {
    if (err) return res.status(400).json({ message: 'Employee ID already exists' });
    res.status(200).json({ message: 'Employee added successfully' });
  });
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
