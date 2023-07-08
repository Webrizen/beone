import React, { useContext, useEffect, useState } from "react";
import {
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Skeleton,
  Chip,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link, useNavigate, useParams } from "react-router-dom";
import baseApi, { Set_order, change_format } from "../utils/common";
import CurrOrderContext from "../utils/order_context";
import AllOrderContext from "../utils/AllOrderContext";

const UserOrders = () => {
  const { currOrder, setCurrOrder } = useContext(CurrOrderContext);
  const [planningStep, setplanningStep] = useState({ ...currOrder[2] });
  useEffect(() => {
    setplanningStep({ ...currOrder[2] });
  }, [currOrder]);
  const [order_id, setorder_id] = useState();
  const [all_orders, setall_orders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // State to track server error
  const { AllOrder, setAllOrder } = useContext(AllOrderContext);
  useEffect(() => {
    console.log("all orders from userorders", AllOrder);

  }, [AllOrder]);
  // useEffect(() => {
  //   baseApi
  //     .get("/dashboard")
  //     .then((response) => {
  //       const arr = response.data;
  //       arr.sort((a, b) => a.createdAt - b.createdAt);
  //       setall_orders(arr.reverse());
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       if (error.response && error.response.status === 401) {
  //         setError("Unauthorized access"); // Set error message for 401 status
  //       } else if (error.response && error.response.status === 404) {
  //         setError("Data not found"); // Set error message for 404 status
  //       } else {
  //         setError("Unauthorized access, please try again."); // Set generic error message for other error codes
  //       }
  //       setLoading(false);
  //     });
  // }, []);

  const navigate = useNavigate();

  const changeOrder = (event) => {
    localStorage.setItem("currOrder", event.target.value);
    Set_order(event.target.value, setCurrOrder, navigate);
  };

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Current Order</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Select Your Order"
          defaultValue={localStorage.getItem("currOrder")}
          onChange={changeOrder}
          MenuProps={{
            PaperProps: {
              sx: {
                height: '500px',
                overflowY: 'scroll'
              },
            },
          }}
        >
          {AllOrder.map((order, index) => (
            <MenuItem key={index} value={order}>
              {order}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Divider sx={{ margin: "1rem 0" }} />
      {planningStep.status === "Done" ? <><Chip label={"Hormone Test Date: " + change_format(planningStep.data.StandardPackageHormone__testDate1)} />
        <Chip label={"Metabolic Test Date: " + change_format(planningStep.data.StandardPackageMetabolic__testDate1)} /></> : ""}

    </>
  );
};

export default UserOrders;