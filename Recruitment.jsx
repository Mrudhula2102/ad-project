import React, { useState } from 'react'
import Topbar from '../Topbar/Topbar'
import Sidebar from '../Sidebar/Sidebar'
import axios from 'axios';
import { Button, TextField } from '@mui/material';

const Recruitment = (props) => {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4006/api/hrm/recruitment', {
        jobTitle,
        jobDescription,
        // Add other vacancy details here
      });
      console.log(response.data);
      // Handle success or navigate to another page
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };
  
  return (
    <div align="center">
      <div><Topbar xxx={props.checkLogout}/><Sidebar/></div>
      <form onSubmit={handleSubmit}>
      <TextField
        type="text"
        placeholder="Job Title"
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
      /><br/><br/>
      <TextField
        placeholder="Job Description"
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
      /><br/><br/>
      {/* Add more input fields for other vacancy details */}
      <Button type="submit" variant='contained'>Submit</Button>
    </form>
    </div>
  )
}

export default Recruitment