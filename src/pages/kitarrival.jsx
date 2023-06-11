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
  Button,
  Grid
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
import Calendar from '../components/calendar';
import ProgressRing from '../components/progressRing';
import KitArrivalData from '../components/KitArrival/KitArrivalData';
import HormoneTest from '../components/planning/hormoneTest';
import KitArrivalForm from '../components/KitArrival/KitArrivalForm';
import CurrOrderContext from '../utils/order_context';

const kitarrival = () => {
  const { currOrder, setCurrOrder } = useContext(CurrOrderContext);
  console.log("kit arrival page", currOrder);
  const [order, setorder] = useState({ ...currOrder[1] });
  useEffect(() => {
    setorder({ ...currOrder[1] });
    console.log(order);
  }, [currOrder]);

  useEffect(() => {
    console.log("checking order is changed", order);
  }, [order]);
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
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontWeight: 700,
                background: "linear-gradient(50deg, #45d9c9, #84b3c7)",
                WebkitTextFillColor: "transparent",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              The package arrived!
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ color: "rgba(0,0,0,0.3)" }}
            >
              The package is with you now
            </Typography>
            {order.status == "Done" ? <KitArrivalData data={order.data} /> : <KitArrivalForm setOrder={setCurrOrder} />}


          </div>
        </div>

      </Layout >
    </>
  );
}

export default kitarrival;
