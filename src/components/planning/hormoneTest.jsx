import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";

const HormoneTest = () => {
  return (
    <>
      <Box sx={{ p: 2 }}>
        <Typography variant="body1" gutterBottom>
          The package contains a battery of tests. Each test has specific
          timelines and procedures. Here we will guide you through the process
          of planning for each one in the right order and so that they can be
          delivered while still viable to the laboratories.
        </Typography>
        <Typography variant="caption">
          <Box sx={{ p: 2 }}>
            <Typography variant="body1" gutterBottom></Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="body1">Sampling Date:</Typography>
                <Typography variant="body1" align="right"></Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">Preparation Date 1:</Typography>
                <Typography variant="body1" align="right"></Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">Preparation Date 2:</Typography>
                <Typography variant="body1" align="right"></Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">Preparation Date 3:</Typography>
                <Typography variant="body1" align="right"></Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">Preparation Date 4:</Typography>
                <Typography variant="body1" align="right"></Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">
                  Testing Window Starts At:
                </Typography>
                <Typography variant="body1" align="right"></Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" gutterBottom>
                  Completed At:
                </Typography>
                <Typography variant="body1" align="right"></Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" gutterBottom>
                  Completed In:
                </Typography>
                <Typography variant="body1" align="right">
                  0
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Typography>
        <Box sx={{ p: 2 }}>
          <Button variant="contained" color="primary">
            Next
          </Button>
        </Box>
        <Box sx={{ p: 2 }}>
          <Typography variant="body1">Introduction</Typography>
        </Box>
        <Box sx={{ p: 2 }}>
          <Typography variant="body1" gutterBottom>
            To plan for the hormone test, follow these steps:
          </Typography>
          <Typography variant="body1">
            1. Determine the length of your cycle and calculate the date for the
            test, which is 5 days post ovulation.
          </Typography>
          <Typography variant="body1">
            2. Plan for the preparation time. Two days prior to the test, avoid
            certain foods and supplements as instructed.
          </Typography>
          <Typography variant="body1">
            3. Ensure your availability to take the samples at the specific
            times required throughout the day.
          </Typography>
          <Box sx={{ p: 2 }}>
            <Typography variant="body1" gutterBottom>
              Test Summary:
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="body1">Sampling Date:</Typography>
                <Typography variant="body1" align="right"></Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">Preparation Date:</Typography>
                <Typography variant="body1" align="right"></Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">
                  Testing Window Starts At:
                </Typography>
                <Typography variant="body1" align="right"></Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" gutterBottom>
                  Completed At:
                </Typography>
                <Typography variant="body1" align="right"></Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" gutterBottom>
                  Completed In:
                </Typography>
                <Typography variant="body1" align="right">
                  0
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box sx={{ p: 2 }}>
          <Button variant="contained" color="primary">
            Next
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default HormoneTest;
