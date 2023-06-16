import React, { useState, useEffect, useContext } from 'react';
import { AccountCircle } from '@mui/icons-material';
import '../styles/dashboard.css';
import BackgroundImage from '../Assets/images/bg-login-01.png';
import RouteGuard from '../components/routeguard';
import {
  Typography,
  Card,
  Box,
  TextField,
  InputAdornment,
  IconButton,
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import WidgetsIcon from '@mui/icons-material/Widgets';
import VerticalStepper from '../components/verticalstepper';
import Layout from '../components/Layout/layout';
import UserOrders from '../components/userOrders';
import UserContext from '../utils/user_context';
import baseApi, { BASE_API } from '../utils/common';
import { Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Lifestyle = () => {
  function ToggleLeftSideBar() {
    const LeftBar = document.getElementById('Left-Bar');
    if (LeftBar.style.transform == "translateX(0%)") {
      LeftBar.style.transform = "translateX(-200%)"
    } else {
      LeftBar.style.transform = "translateX(0%)"
    }
  }
  return (
    <>
      <Layout>
        <RouteGuard />
        <div className="two-flex">
          <div className="ico" onClick={ToggleLeftSideBar}><MenuOpenIcon /></div>
        </div>
        <div className="main-dashboard">
          <div className="left-dashboard" id='Left-Bar'>
            <UserOrders />
            <VerticalStepper />
          </div>
          <div className="middle-dashboard">
          <Card sx={{ p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Recent Paid Invoice
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <TextField
          label="Select Month"
          type="month"
          id="Month"
          InputLabelProps={{
            shrink: true,
          }}
          sx={{ mr: 2 }}
        />
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Box>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Total Receipts
      </Typography>
      <Typography variant="h4">890k</Typography>
    </Card>
          </div>
        </div>

      </Layout >
    </>
  );
}

export default Lifestyle;
