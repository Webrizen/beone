import React from 'react';
import { Container, Paper, TextField, Button, FormControlLabel, Checkbox } from '@mui/material';
import '../styles/login.css';

const Login = () => {
  return (
    <div className="background">
      <Container maxWidth="sm">
        <Paper elevation={3} className="glassmorphism-container">
          <img src="/favicon.png" alt="Beone" />
          <h1 className="title">Welcome Back!</h1>
          <form className='loginForm'>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              className="input-field"
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              className="input-field"
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
            <Button variant="contained" fullWidth className="submit-button">
              Login
            </Button>
            <a href="#">Forgot Password?</a>
          </form>
        </Paper>
        <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
    </div>
      </Container>
    </div>
  );
};

export default Login;
