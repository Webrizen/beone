import React, { useState, useEffect, useContext } from "react";
import {
  Typography,
  Card,
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import Layout from "../components/Layout/layout";
import SearchIcon from "@mui/icons-material/Search";
import baseApi, { Set_order } from "../utils/common";
import Swal from "sweetalert2";
import CurrOrderContext from "../utils/order_context";
import { useNavigate } from "react-router-dom";
const Lifestyle = () => {
  const { currOrder, setCurrOrder } = useContext(CurrOrderContext);
  const navigate = useNavigate();
  const o_id = localStorage.getItem("currOrder");
  const handlesubmit = () => {
    baseApi
      .post(`/dashboard/${o_id}/complete-lifestyle-program`, {})
      .then((response) => {
        console.log("after liferstyle task", response.data);

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Lifestyle Program  Done",
          showConfirmButton: false,
          timer: 1500,
        });
        Set_order(o_id, setCurrOrder, navigate);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <Layout>
      <div
        style={{ padding: "20px", background: "#fff", borderRadius: "10px" }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Begin Lifestyle Program by BeOne
        </Typography>

        <Card variant="outlined" sx={{ margin: "10px 0" }}>
          <Box p={3} sx={{ padding: "10px" }}>
            <Typography variant="h4" component="h2" gutterBottom>
              Introduction
            </Typography>
            <Typography variant="body1" gutterBottom>
              The Begin Lifestyle Program offered by BeOne is a comprehensive
              program designed to help individuals achieve a healthy and
              balanced lifestyle. Whether you are looking to improve your
              physical fitness, manage stress, or make healthier dietary
              choices, this program provides the tools and support you need to
              succeed.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Our team of experts, including certified fitness trainers,
              nutritionists, and wellness coaches, will guide you through a
              personalized program tailored to your specific goals and needs.
              With a focus on sustainable and long-term changes, we aim to
              empower you to make lasting improvements to your overall
              well-being.
            </Typography>
          </Box>
        </Card>

        <Card sx={{ margin: "10px 0", boxShadow: 'none' }}>
          <Box p={3} sx={{ padding: "10px" }}>
            {" "}
            <Button onClick={handlesubmit} variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </Card>
      </div>
    </Layout>
  );
};

export default Lifestyle;
