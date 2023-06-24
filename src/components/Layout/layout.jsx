import React, { useContext, useEffect, useState } from "react";
import Navbar from "../navbar";
import '../../styles/dashboard.css';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import VerticalStepper from '../verticalstepper';
import UserOrders from '../userOrders';
import { Skeleton } from '@mui/material';

const Layout = ({ children }) => {
  // const { main_user, setmain_user } = useContext(UserContext);
  function ToggleLeftSideBar() {
    const LeftBar = document.getElementById('Left-Bar');
    if (LeftBar.style.transform === "translateX(0%)") {
      LeftBar.style.transform = "translateX(-200%)"
    } else {
      LeftBar.style.transform = "translateX(0%)"
    }
  }

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {" "}
      <Navbar />
      <div className="two-flex">
        <div className="ico" onClick={ToggleLeftSideBar}><MenuOpenIcon /></div>
      </div>
      <div className="main-dashboard">
        <div className="left-dashboard" id='Left-Bar'>
          {loading ? (
            <Skeleton variant="rectangular" height={150} animation="wave" />
          ) : (
            <UserOrders />
          )}
          {loading ? (
            <Skeleton variant="rectangular" height={400} animation="wave" style={{ marginTop: 20 }} />
          ) : (
            <VerticalStepper />
          )}
        </div>
        <div className="middle-dashboard">
          {loading ? (
            <Skeleton variant="rectangular" height={500} animation="wave" />
          ) : (
            children
          )}
        </div>
      </div>
    </div>
  );
};

export default Layout;
