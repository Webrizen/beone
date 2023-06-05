import React, { useState } from "react";
import '../styles/login.css';
// import Box from '@mui/material/Box';
// import Input from '@mui/material/Input';
// import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';
// import FormControl from '@mui/material/FormControl';
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Login = () => {

  const [showPass, setShowPass] = useState(false);

  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <div className="left">
            <div className='left-head'>
              <img src="/favicon.png" alt="Beone" className='LeftLogo' />
              <h1>Welcome Back!</h1>
              <p>Login to Continue on Beone.</p>
            </div>
            <TextField id="email-controlled" label="Enter Your Email"></TextField>
            <TextField
              label="Password"
              type={showPass ? "text" : "password"}
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
            <FormControlLabel label="Keep me login" control={<Checkbox />} />
            <Button variant='contained'>LOGIN</Button>
            <a href="#">Forgot password?</a>
            <hr />
            <p>Verify that you are a human,</p>
            {/* ADD Cloudfare Captcha Verification   */}
          </div>
          <div className="right">
            <img src="/images/login-01.png" alt="Login Image" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
