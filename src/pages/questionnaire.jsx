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
} from "@mui/material";
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
import HormoneTest from "../components/planning/hormoneTest";
import KitArrivalForm from "../components/KitArrival/KitArrivalForm";
import QuizComponent from "../components/QuizComponent";
import CurrOrderContext from "../utils/order_context";
const Questionnaire = () => {
  const { currOrder, setCurrOrder } = useContext(CurrOrderContext);
  const [questionare, setquestionare] = useState({ ...currOrder[5] });
  useEffect(() => {
    setquestionare({ ...currOrder[5] });
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
        {questionare.data.questionnaireCompletedStatus === "Y" ? "completed" : <QuizComponent />}

      </Layout>
    </>
  );
};

export default Questionnaire;
