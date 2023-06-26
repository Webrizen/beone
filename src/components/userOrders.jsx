import React, { useContext, useEffect, useState } from "react";
import {
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Skeleton, // Import the Skeleton component from MUI
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link, useNavigate, useParams } from "react-router-dom";
import baseApi, { Set_order } from "../utils/common";
import CurrOrderContext from "../utils/order_context";
import AllOrderContext from "../utils/AllOrderContext";

const UserOrders = () => {
  const { currOrder, setCurrOrder } = useContext(CurrOrderContext);
  const [order_id, setorder_id] = useState();
  const [all_orders, setall_orders] = useState([]);
  const [loading, setLoading] = useState(true);
  const { AllOrder, setAllOrder } = useContext(AllOrderContext);
  useEffect(() => {
    baseApi
      .get("/dashboard")
      .then((response) => {
        const arr = response.data;
        arr.sort((a, b) => a.createdAt - b.createdAt);
        setall_orders(arr.reverse());
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
      {loading ? ( // Render Skeleton component if loading is true
        <Box>
          <Skeleton variant="rectangular" height={56} sx={{ borderRadius: '10px' }} />
          <Divider sx={{ margin: "1rem 0" }} />
        </Box>
      ) : ( // Render the actual FormControl if loading is false
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Current Order</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Select Your Order"
            defaultValue={localStorage.getItem("currOrder")}
            onChange={changeOrder}
          >
            {AllOrder.map((order, index) => (
              <MenuItem key={order} value={order}>
                {order}
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
