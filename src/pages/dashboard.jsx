import React, { useState, useEffect } from 'react';
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
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import WidgetsIcon from '@mui/icons-material/Widgets';
import VerticalStepper from '../components/verticalstepper';
import Calendar from '../components/calendarcomponent';
import SearchComponent from '../components/searchcomponent';

const Dashboard = () => {

  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function ToggleLeftSideBar() {
    const LeftBar = document.getElementById('Left-Bar');
    if (LeftBar.style.transform === "translateX(-200%)") {
      LeftBar.style.transform = "translateX(3%)"
    } else {
      LeftBar.style.transform = "translateX(-200%)"
    }
  }

  function ToggleRightSideBar() {
    const RightBar = document.getElementById('Right-Bar');
    if (RightBar.style.transform === "translateX(200%)") {
      RightBar.style.transform = "translateX(3%)"
    } else {
      RightBar.style.transform = "translateX(200%)"
    }
  }

  return (

    <>
      <Navbar />
      <div className="two-flex">
        <div className="ico" onClick={ToggleLeftSideBar}><MenuOpenIcon /></div>
        <div className="ico" onClick={ToggleRightSideBar}><WidgetsIcon /></div>
      </div>
      <div className="main-dashboard">
        <div className="left-dashboard" id='Left-Bar'>
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
          <div className="yourOrders"><a href="#">Your Order</a><ArrowForwardIosIcon fontSize='15px' sx={{marginLeft: "5px"}} /></div>
          <Divider sx={{ margin: '1rem 0' }} />
          <VerticalStepper />
        </div>
        <div className="middle-dashboard">
          <div className="welcome-message" style={{ background: `url(${BackgroundImage})` }}>
            <div className="left-message">
              <h1>Welcome Back User</h1>
              <h4>{currentTime}</h4>
              <p>
                Here, you'll find all the steps of your journey with us. Each time you log in, an Icon will guide you to the current step and show you what the next step is. To progress, simply click on the current step.

                If you need to review previous steps, you can scroll up. To return to the current step, just click the current task button on the Top menu bar.

              </p>
            </div>
            <div className="right-message">
              {/* Yaha User Ka Profile Image Dalna  */}
              <img src="/favicon.png" alt="Beone." />
            </div>
          </div>
        </div>
        <div className="right-dashboard" id='Right-Bar'>
          <SearchComponent/>
          <Calendar />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
