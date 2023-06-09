import React, { useEffect, useState } from "react";
import {
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import baseApi from "../utils/common";
const UserOrders = () => {
  const [all_orders, setall_orders] = useState([]);
  useEffect(() => {
    baseApi
      .get("/dashboard")
      .then((response) => {
        console.log("dashboard data", response.data);
        setall_orders(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Your Order</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Select Your Order"
          defaultValue={778877556688}
        >
          {all_orders.map((order, index) => {
            // if (order.status == "PENDING") {
            //   // console.log(order.orderId);
            //   return <MenuItem key={order.orderId} value={order.orderId}>{order.orderId}{order.orderId}</MenuItem>
            // } else {
            return <MenuItem key={order.orderId} value={order.orderId}>{order.orderId}</MenuItem>
            // }

          })}

          {/* <MenuItem selected={true} value="Teacher">Teacher</MenuItem>
          <MenuItem value="Admin">Admin</MenuItem> */}
        </Select>
      </FormControl>
      <Link to="/orders/:id">
        {/* Yeh Bhaiya ID Pass Krne Wala Ap Dekh Lena | Is Comment Ko Remove Kr Dena Baadme */}
        <div className="yourOrders">
          Your Orders
          <ArrowForwardIosIcon />
        </div>
      </Link>
      <Divider sx={{ margin: "1rem 0" }} />
    </>
  );
};

export default UserOrders;
