import React, { useContext, useEffect, useState } from "react";
import {
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link, useNavigate, useParams } from "react-router-dom";
import baseApi from "../utils/common";
import { Box } from "@mui/system";
import CurrOrderContext from "../utils/order_context";
const UserOrders = () => {
  const { currOrder, setCurrOrder } = useContext(CurrOrderContext);
  let params = useParams();
  const [order_id, setorder_id] = useState();
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
  const navigate = useNavigate();
  const changeOrder = () => {
    baseApi.get(`/dashboard/${order_id}`).then((response) => {
      console.log("current order", order_id, response.data)
      setCurrOrder(response.data);
      navigate(`/dashboard/${order_id}`);
      // response.data.map((order, index) => {
      //   if (order.status == "PENDING") {
      //     Set_order(order.orderId);
      //     break;
      //   }
      // })
    }).catch((error) => {
      console.log("userorders id api error:", error)
    })
  }
  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Current Order</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Select Your Order"
          defaultValue={params.id}
          onChange={(event) => { setorder_id(event.target.value); console.log("changing order from dropdown", order_id) }}
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
      {/* <Box> */}
      {/* Yeh Bhaiya ID Pass Krne Wala Ap Dekh Lena | Is Comment Ko Remove Kr Dena Baadme */}
      <div onClick={changeOrder} className="yourOrders">
        GoTo Selected Order
        <ArrowForwardIosIcon />
      </div>
      {/* </Box > */}
      <Divider sx={{ margin: "1rem 0" }} />
    </>
  );
};

export default UserOrders;
