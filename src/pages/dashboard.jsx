import React, { useState, useEffect, useContext } from 'react';
import { AccountCircle } from '@mui/icons-material';
import '../styles/dashboard.css';
import BackgroundImage from '../Assets/images/bg-login-01.png';
import RouteGuard from '../components/routeguard';
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
import Layout from '../components/Layout/layout';
import UserOrders from '../components/userOrders';
import UserContext from '../utils/user_context';
import { BASE_API } from '../utils/common';
import { Avatar } from '@mui/material';
import Calendar from '../components/calendar';
import CircularStatic from '../components/circularprogresswithlabel';

const Dashboard = () => {
  const { main_user, setmain_user } = useContext(UserContext);
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
    if (LeftBar.style.transform == "translateX(-200%)") {
      LeftBar.style.transform = "translateX(3%)"
    } else {
      LeftBar.style.transform = "translateX(-200%)"
    }
  }

  function ToggleRightSideBar() {
    const RightBar = document.getElementById('Right-Bar');
    if (RightBar.style.transform == "translateX(200%)") {
      RightBar.style.transform = "translateX(3%)"
    } else {
      RightBar.style.transform = "translateX(200%)"
    }
  }

  return (
    <>
      <Layout>
        <RouteGuard />
        <div className="two-flex">
          <div className="ico" onClick={ToggleLeftSideBar}><MenuOpenIcon /></div>
          <div className="ico" onClick={ToggleRightSideBar}><WidgetsIcon /></div>
        </div>
        <div className="main-dashboard">
          <div className="left-dashboard" id='Left-Bar'>
            <UserOrders />
            <VerticalStepper />
          </div>
          <div className="middle-dashboard">
            <div className="welcome-message" style={{ background: `url(${BackgroundImage})` }}>
              <div className="left-message">
                <h1>Welcome Back {main_user.firstName}</h1>
                <h4>{currentTime}</h4>
                <p>

                  Here, you'll find all the steps of your journey with us. Each time you log in, an Icon will guide you to the current step and show you what the next step is. To progress, simply click on the current step.

                  If you need to review previous steps, you can scroll up. To return to the current step, just click the current task button on the Top menu bar.

                  Enjoy your journey with us!

                </p>
              </div>
              <div className="right-message">
                {/* Yaha User Ka Profile Image Dalna  */}
                {/* <AccountCircle sx={{ width: "100%", height: "100%" }} /> */}
                <Avatar sx={{ width: 150, height: 150 }}>
                  {main_user.profilePic ? (
                    <img
                      className="profile-img"
                      src={`${BASE_API}/files/${main_user.profilePic}/serve`}
                      alt="Profile"
                    />
                  ) : (
                    <AccountCircle
                      sx={{ width: "100%", height: "100%" }}
                    />
                  )}
                </Avatar>
              </div>
            </div>
          </div>
          <div className="right-dashboard" id='Right-Bar'>
            Right side
          </div>
        </div>
        <div className="right-dashboard" id='Right-Bar'>
          <Calendar />
        </div>

      </Layout >
    </>
  );
}

export default Dashboard;
