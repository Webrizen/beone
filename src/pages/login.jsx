import React from 'react';
import { useState, useContext, useEffect } from 'react';
import InputAdornment from "@mui/material/InputAdornment";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import { Container, Paper, TextField, Button, FormControlLabel, Checkbox } from '@mui/material';
import baseApi, { BASE_API, Set_order } from "../utils/common";
import { useNavigate, Navigate } from "react-router-dom";
import Swal from 'sweetalert2';
import '../styles/login.css';
import UserContext from '../utils/user_context';
import CurrOrderContext from '../utils/order_context';
import AllOrderContext from '../utils/AllOrderContext';
// import { error } from 'console';
// import UserContext from '../utils/user_context';

// const user = useContext(UserContext);

const Login = () => {
  const { main_user, setmain_user } = useContext(UserContext);
  const { currOrder, setCurrOrder } = useContext(CurrOrderContext);
  const { AllOrder, setAllOrder } = useContext(AllOrderContext);
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    // console.log("enf base url", process.env.REACT_APP_BASE_URL);

    if (localStorage.getItem("token")) {
      const id = localStorage.getItem("currOrder");
      navigate(`/order/${id}/welcome`);
    }
  }, []);
  // Set_order()
  useEffect(() => {
    console.log("order context changed", AllOrder);
  }, [AllOrder]);
  const handleSubmit = (event) => {
    event.preventDefault();


    console.log({ "user": email, "pass:": pass });
    try {

      baseApi.post(`/auth`, {
        email: email,
        password: pass,
      }).then((response) => {
        console.log(response)
        localStorage.setItem("token", response.data.accessToken);
        // const token  = response.data.accessToken;
        setmain_user(response.data.user);
        console.log({ "main_user": main_user });


        // fetching all orders 
        baseApi.get(`/dashboard`).then((response) => {
          console.log(response)
          const orders = response.data;
          // const arr = response.data;
          orders.sort((a, b) => a.createdAt - b.createdAt);
          const AllOrderId = orders.map(function (el) {
            return el.orderId;
          });
          setAllOrder(AllOrderId.reverse());
          Set_order(AllOrderId[0], setCurrOrder, navigate);
          console.log("AllOrder", AllOrderId);
        }).catch((error) => {
          console.log("All Order fetching error:", error)
        })


        // navigate('/dashboard', { replace: true });
        // <Navigate to="/dashboard" />
      }).catch((error) => {
        console.log("error:", error)
        Swal.fire({
          icon: 'error',
          title: 'Try Again',
          text: 'Wrong Email or Password',
          timer: 2500

        })
      })
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="background-login">
      <Container maxWidth="sm">
        <Paper elevation={3} className="glassmorphism-container">
          <img src="/favicon.png" alt="Beone" />
          <h1 className="title">Welcome Back!</h1>
          <form className='loginForm' onSubmit={handleSubmit}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              onChange={(event) => {
                setEmail(event.target.value)
              }}
              className="input-field mb-1"
            />
            <TextField
              label="Password"
              type={showPass ? "text" : "password"}
              onChange={(event) => {
                setPass(event.target.value)
              }}
              required
              name="pass"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPass(!showPass)}>
                      {showPass ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  className='checkboxMUI'
                  color="primary"
                />
              }
              label="Keep me logged in"
            />
            <Button type='submit' variant="contained" fullWidth className="submit-button">
              Login
            </Button>
            <a href="#">Forgot Password?</a>
          </form>
        </Paper>
        <div className="background">
        </div>
      </Container>
    </div>
  );
};

export default Login;
