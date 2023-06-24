import React, { useContext, useEffect, useState } from "react";
import {
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Skeleton,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link, useNavigate, useParams } from "react-router-dom";
import baseApi, { Set_order } from "../utils/common";
import CurrOrderContext from "../utils/order_context";

const UserOrders = () => {
  const { currOrder, setCurrOrder } = useContext(CurrOrderContext);
  const [order_id, setorder_id] = useState();
  const [all_orders, setall_orders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    baseApi
      .get("/dashboard")
      .then((response) => {
        console.log("calling Dashboard API two times", response.data);
        setall_orders(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const navigate = useNavigate();

  const changeOrder = (event) => {
    localStorage.setItem("currOrder", event.target.value);
    Set_order(event.target.value, setCurrOrder, navigate);
  };

  return (
    <>
      {loading ? (
        <Skeleton variant="rectangular" height={40} animation="wave" />
      ) : (
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
      )}
      <Divider sx={{ margin: "1rem 0" }} />
    </>
  );
};

export default UserOrders;
