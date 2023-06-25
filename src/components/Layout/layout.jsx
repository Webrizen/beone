import React, { useContext, useEffect, useState } from "react";
import Navbar from "../navbar";
import "../../styles/dashboard.css";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import VerticalStepper from "../verticalstepper";
import UserOrders from "../userOrders";
import { Skeleton, Snackbar } from "@mui/material";

const Layout = ({ children }) => {
  function ToggleLeftSideBar() {
    const LeftBar = document.getElementById("Left-Bar");
    if (LeftBar.style.transform === "translateX(0%)") {
      LeftBar.style.transform = "translateX(-200%)";
    } else {
      LeftBar.style.transform = "translateX(0%)";
    }
  }

  const [loading, setLoading] = useState(true);
  const [slowInternet, setSlowInternet] = useState(false);
  const [noInternet, setNoInternet] = useState(false);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);

    // Check internet connection
    const checkInternetConnection = () => {
      if (!navigator.onLine) {
        setNoInternet(true);
      }
    };

    // Check for slow internet after 3 seconds
    const slowInternetTimeout = setTimeout(() => {
      checkInternetConnection();
      if (loading) {
        setSlowInternet(true);
      }
    }, 10000);

    return () => {
      clearTimeout(timer);
      clearTimeout(slowInternetTimeout);
    };
  }, []);

  const handleSlowInternetClose = () => {
    setSlowInternet(false);
  };

  const handleNoInternetClose = () => {
    setNoInternet(false);
  };

  return (
    <div>
      <Navbar />
      <div className="two-flex">
        <div className="ico" onClick={ToggleLeftSideBar}>
          <MenuOpenIcon />
        </div>
      </div>
      <div className="main-dashboard">
        <div className="left-dashboard" id="Left-Bar">
          <UserOrders />
          <VerticalStepper />
        </div>
        <div className="middle-dashboard">
          {loading ? (
            <Skeleton
              variant="rectangular"
              height={500}
              animation="wave"
              style={{ borderRadius: "10px" }}
            />
          ) : (
            children
          )}
        </div>
      </div>
      {/* <Snackbar
        open={slowInternet}
        onClose={handleSlowInternetClose}
        message="Slow internet connection detected."
      /> */}
      <Snackbar
        open={noInternet}
        onClose={handleNoInternetClose}
        message="No internet connection. Please check your network."
      />
    </div>
  );
};

export default Layout;
