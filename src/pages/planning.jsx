import React, { useState, useEffect, useContext } from "react";
import { AccountCircle } from "@mui/icons-material";
import "../styles/dashboard.css";
import BackgroundImage from "../Assets/images/bg-login-01.png";
import RouteGuard from "../components/routeguard";
import {
  Typography,
  Divider,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Box,
} from "@mui/material";
import { Tab, Tabs } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import WidgetsIcon from "@mui/icons-material/Widgets";
import VerticalStepper from "../components/verticalstepper";
import Layout from "../components/Layout/layout";
import UserOrders from "../components/userOrders";
import UserContext from "../utils/user_context";
import baseApi, { BASE_API } from "../utils/common";
import { Avatar } from "@mui/material";
import Calendar from "../components/calendar";
import ProgressRing from "../components/progressRing";
import KitArrivalData from "../components/KitArrival/KitArrivalData";
import HormoneTestData from "../components/HormoneTest/hormonetestdata";
import HormoneTestForm from "../components/HormoneTest/hormonetestform";
import MetabolicData from "../components/Metabolic/MetabolicData";
import MetabolicForm from "../components/Metabolic/MetabolicForm";

const Planning = (props) => {
  function ToggleLeftSideBar() {
    const LeftBar = document.getElementById("Left-Bar");
    if (LeftBar.style.transform == "translateX(0%)") {
      LeftBar.style.transform = "translateX(-200%)";
    } else {
      LeftBar.style.transform = "translateX(0%)";
    }
  }

  //For Tabs:
  const [value, setValue] = useState("tab1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Layout>
        <RouteGuard />
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
            <Tabs value={value} onChange={handleChange}>
              <Tab label="Hormone Test" value="tab1" />
              <Tab label="Metabolic Data" value="tab2" />
            </Tabs>
            <br />
            <Box role="tabpanel" hidden={value !== "tab1"}>
              <HormoneTestData />
              <HormoneTestForm />
            </Box>
            <Box role="tabpanel" hidden={value !== "tab2"}>
              <MetabolicData />
              <MetabolicForm />
            </Box>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Planning;
