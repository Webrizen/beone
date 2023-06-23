import React, { useState, useEffect, useContext } from "react";
import { AccountCircle } from "@mui/icons-material";
import "../styles/dashboard.css";
import BackgroundImage from "../Assets/images/bg-login-01.png";
import RouteGuard from "../components/routeguard";
import ImmunePicComp from "../components/ImmunePic/ImmunePic";
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
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import WidgetsIcon from "@mui/icons-material/Widgets";
import VerticalStepper from "../components/verticalstepper";
import Layout from "../components/Layout/layout";
import UserOrders from "../components/userOrders";
import Calendar from "../components/calendar";
import ImagePreview from "../components/ImagePreview";
import CurrOrderContext from "../utils/order_context";

const ImmunePic = () => {
  const { currOrder, setCurrOrder } = useContext(CurrOrderContext);
  const [ImmunePic, setImmunePic] = useState({ ...currOrder[4] });
  useEffect(() => {
    setImmunePic({ ...currOrder[4] });
  }, [currOrder]);
  function ToggleLeftSideBar() {
    const LeftBar = document.getElementById("Left-Bar");
    if (LeftBar.style.transform == "translateX(0%)") {
      LeftBar.style.transform = "translateX(-200%)";
    } else {
      LeftBar.style.transform = "translateX(0%)";
    }
  }
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
            {ImmunePic.status === "Done" ? (
              <Box
                sx={{
                  mt: 2,
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ImagePreview id={ImmunePic.data.immuneBalanceTestFileId} />
              </Box>
            ) : (
              <ImmunePicComp />
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ImmunePic;
