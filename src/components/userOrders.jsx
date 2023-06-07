import React from "react";
import {
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

const UserOrders = () => {
  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Your Order</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Select Your Order"
        >
          <MenuItem value="Student">Student</MenuItem>
          <MenuItem value="Teacher">Teacher</MenuItem>
          <MenuItem value="Admin">Admin</MenuItem>
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
