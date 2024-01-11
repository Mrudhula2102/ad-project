import React, { useState } from 'react'
import Topbar from '../Topbar/Topbar'
import Sidebar from '../Sidebar/Sidebar'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';

const Training = (props) => {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'John Doe', completed: true, age: 30, remarks: 'Excellent' },
    { id: 2, name: 'Lakshmi', completed: false, age: 20, remarks: 'Good' },
    // Add more employees as needed
  ]);

  const handleCompletionChange = (id) => {
    const updatedEmployees = employees.map((employee) =>
      employee.id === id ? { ...employee, completed: !employee.completed } : employee
    );
    setEmployees(updatedEmployees);
  };
  return (
    <div align="center">
      <div><Topbar xxx={props.checkLogout}/><Sidebar/></div>
      <div className='div'>
      <h1>Employee Training Status</h1>
      <TableContainer component={Paper}>
        <Table aria-label="employee training table">
          <TableHead>
            <TableRow>
              <TableCell>Employee Name</TableCell>
              <TableCell>Training Completed</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Remarks</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>{employee.name}</TableCell>
                <TableCell><TextField type="checkbox" checked={employee.completed} 
                onChange={() => handleCompletionChange(employee.id)}/>
                </TableCell>
                <TableCell>{employee.age}</TableCell>
                <TableCell>{employee.remarks}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    </div>
  )
}

export default Training
