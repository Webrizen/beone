import React from 'react';
import Navbar from '../components/navbar';
import '../styles/dashboard.css';
import BackgroundImage from '../Assets/images/bg-login-01.png';
import {
  Typography,
  Divider,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button
} from '@mui/material';
import VerticalStepper from '../components/verticalstepper';

const Dashboard = () => {
  function ShowTime(){
    document.getElementById('time').innerHTML= new Date();
  }
  setInterval(ShowTime, 100)

  return (

    <>
    <Navbar/>
      <div className="main-dashboard">
        <div className="left-dashboard">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select Your Order</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Select Your Order"
            >
              <MenuItem value="Student">Student</MenuItem>
              <MenuItem value="Teacher">Teacher</MenuItem>
              <MenuItem value="Admin">Admin</MenuItem>
            </Select>
          </FormControl>
          <a href="#">Your Order</a>
          <Divider sx={{ margin: '1rem 0' }} />
          <VerticalStepper />
        </div>
        <div className="middle-dashboard">
          <div className="welcome-message" style={{background: `url(${BackgroundImage})`}}>
            <div className="left-message">
            <h1>Welcome Back User</h1>
            <h4 id="time"></h4>
            <p>"Quotes From Rapid API Realted To HealthCare"</p>
            </div>
            <div className="right-message">
              {/* Yaha User Ka Profile Image Dalna  */}
            <img src="/favicon.png" alt="Beone." />
            </div>
          </div>
        </div>
        <div className="right-dashboard">
          </div>
      </div>
    </>
  );
}

export default Dashboard;
