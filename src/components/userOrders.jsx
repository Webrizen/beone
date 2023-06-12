import React, { useContext, useEffect, useState } from "react";
import {
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import { Skeleton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link, useNavigate, useParams } from "react-router-dom";
import baseApi from "../utils/common";
import CurrOrderContext from "../utils/order_context";
import '../styles/loading.css';

const UserOrders = () => {
  const { currOrder, setCurrOrder } = useContext(CurrOrderContext);
  const [isLoading, setIsLoading] = useState(true); // State to track the loading status
  let params = useParams();
  const curr_order = localStorage.getItem("currOrder");
  const [order_id, setorder_id] = useState();
  const [all_orders, setall_orders] = useState([]);

  useEffect(() => {
    baseApi
      .get("/dashboard")
      .then((response) => {
        console.log("all orders data", response.data);
        setall_orders(response.data);
        setIsLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false); // Set loading to false on error
      });
  }, []);

  const navigate = useNavigate();

  const changeOrder = (event) => {
    setIsLoading(true); // Set loading to true when changing the order

    localStorage.setItem("currOrder", event.target.value);
    baseApi
      .get(`/dashboard/${event.target.value}`)
      .then((response) => {
        console.log(
          "setting order order",
          event.target.value,
          response.data
        );
        setCurrOrder(response.data);
        navigate(`/order/${event.target.value}/welcome`);
      })
      .catch((error) => {
        console.log("userorders id api error:", error);
        setIsLoading(false); // Set loading to false on error
      });
  };

  return (
    <>
      {isLoading ? ( // Render skeleton if loading is true
        <Box>
          <Skeleton height={40} animation="wave" />
        </Box>
      ) : (
        // Render the content if loading is false
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Current Order</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Select Your Order"
            defaultValue={curr_order}
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
