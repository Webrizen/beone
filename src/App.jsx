import React from "react";
import Button from "@mui/material/Button";
import Navbar from "./components/navbar";
import "./styles/app.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="container">
          <h1>
            Welcome Back
            <br />
            Login <span>To Continue</span>.
          </h1>
          <p>
            The seconds, minutes, and hours slip away,
            <br />
            each one bringing us closer to the future and farther from the past
          </p><br />
          <Link to="/login">
          <Button>Login</Button>
          </Link>
          <div className="bg"></div>
        </div>
      </div>
    </>
  );
}

export default App;
