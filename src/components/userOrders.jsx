import React, { useContext, useEffect, useState } from "react";
import {
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link, useNavigate, useParams } from "react-router-dom";
import baseApi, { Set_order } from "../utils/common";
import CurrOrderContext from "../utils/order_context";
const UserOrders = () => {
  const { currOrder, setCurrOrder } = useContext(CurrOrderContext);
  const [order_id, setorder_id] = useState();
  const [all_orders, setall_orders] = useState([]);

  useEffect(() => {
    baseApi
      .get("/dashboard")
      .then((response) => {
        // console.log("all orders data", response.data);
        setall_orders(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const navigate = useNavigate();

  const changeOrder = (event) => {
    localStorage.setItem("currOrder", event.target.value);
    baseApi
      .get(`/dashboard/${event.target.value}`)
      .then((response) => {
        Set_order(event.target.value, setCurrOrder);
        // setCurrOrder(response.data);
        navigate(`/order/${event.target.value}/welcome`);
      })
      .catch((error) => {
        console.log("userorders id api error:", error);
      });
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
        >
          {all_orders.map((order, index) => (
            <MenuItem key={order.orderId} value={order.orderId}>
              {order.orderId}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Divider sx={{ margin: "1rem 0" }} />
    </>
  );
};

export default UserOrders;
