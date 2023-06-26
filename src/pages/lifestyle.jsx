import React, { useState, useEffect, useContext } from "react";
import {
  Typography,
  Card,
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Button
} from "@mui/material";
import Layout from "../components/Layout/layout";
import SearchIcon from "@mui/icons-material/Search";

const Lifestyle = () => {

  return (
    <Layout>
      <div>
        <Typography variant="h2" component="h1" gutterBottom>
          Begin Lifestyle Program by BeOne
        </Typography>

        <Card variant="outlined" sx={{ margin: '10px 0' }}>
          <Box p={3} sx={{ padding: '10px' }}>
            <Typography variant="h4" component="h2" gutterBottom>
              Introduction
            </Typography>
            <Typography variant="body1" gutterBottom>
              The Begin Lifestyle Program offered by BeOne is a comprehensive
              program designed to help individuals achieve a healthy and
              balanced lifestyle. Whether you are looking to improve your
              physical fitness, manage stress, or make healthier dietary
              choices, this program provides the tools and support you need to
              succeed.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Our team of experts, including certified fitness trainers,
              nutritionists, and wellness coaches, will guide you through a
              personalized program tailored to your specific goals and needs.
              With a focus on sustainable and long-term changes, we aim to
              empower you to make lasting improvements to your overall
              well-being.
            </Typography>
          </Box>
        </Card>

        <Card variant="outlined" sx={{ margin: '10px 0' }}>
          <Box p={3} sx={{ padding: '10px' }}>
            <Typography variant="h4" component="h2" gutterBottom>
              Key Features
            </Typography>
            <ul>
              <li>
                <Typography variant="body1" gutterBottom>
                  Customized workout plans based on your fitness level and
                  goals
                </Typography>
              </li>
              <li>
                <Typography variant="body1" gutterBottom>
                  Personalized nutrition recommendations and meal plans
                </Typography>
              </li>
              <li>
                <Typography variant="body1" gutterBottom>
                  Mindfulness and stress management techniques
                </Typography>
              </li>
              <li>
                <Typography variant="body1" gutterBottom>
                  Access to a supportive community of like-minded individuals
                </Typography>
              </li>
              <li>
                <Typography variant="body1" gutterBottom>
                  Regular progress tracking and check-ins with our team
                </Typography>
              </li>
            </ul>
          </Box>
        </Card>

        <Card variant="outlined" sx={{ margin: '10px 0' }}>
          <Box p={3} sx={{ padding: '10px' }}>
            <Typography variant="h4" component="h2" gutterBottom>
              Get Started
            </Typography>
            <Typography variant="body1" gutterBottom>
              To join the Begin Lifestyle Program, simply fill out the form
              below and our team will get in touch with you to discuss your
              goals and create a personalized plan. Take the first step towards
              a healthier and happier you with BeOne.
            </Typography>

            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              margin="normal"
            />

            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
              margin="normal"
            />

            <TextField
              label="Phone Number"
              variant="outlined"
              fullWidth
              margin="normal"
            />

            <Button variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </Card>
      </div>
    </Layout>
  );
};

export default Lifestyle;