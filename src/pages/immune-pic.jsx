import React, { useState, useEffect, useContext } from 'react';
import { AccountCircle } from '@mui/icons-material';
import '../styles/dashboard.css';
import BackgroundImage from '../Assets/images/bg-login-01.png';
import RouteGuard from '../components/routeguard';
import ImmunePicComp from '../components/ImmunePic/ImmunePic';
import {
  Typography,
  Divider,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import WidgetsIcon from '@mui/icons-material/Widgets';
import VerticalStepper from '../components/verticalstepper';
import Layout from '../components/Layout/layout';
import UserOrders from '../components/userOrders';
import Calendar from '../components/calendar';
const ImmunePic  = () => {

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
            <ImmunePicComp />
          </div>
          <div className="right-dashboard" id='Right-Bar'>
            <Calendar className="BoxCalender" />
          </div>
        </div>

      </Layout >
    </>
  );
}

export default ImmunePic;
