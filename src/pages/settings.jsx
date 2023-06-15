import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout/layout';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Box,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  useMediaQuery,
  useTheme,
} from '@mui/material';

const Settings = () => {
  const [systemPerformance, setSystemPerformance] = useState('');
  const [internetConnection, setInternetConnection] = useState('');
  const [batteryStatus, setBatteryStatus] = useState('');
  const [performanceSetting, setPerformanceSetting] = useState('medium');

  useEffect(() => {
    // Function to fetch system performance data
    const fetchSystemPerformance = () => {
      if (window.performance && window.performance.memory) {
        const memoryInfo = window.performance.memory;

        // Extract relevant system performance information
        const { usedJSHeapSize, totalJSHeapSize, jsHeapSizeLimit } = memoryInfo;

        // Calculate system performance metric based on the memory usage
        const systemPerformanceMetric =
          (usedJSHeapSize / jsHeapSizeLimit) * 100;

        // Update the state with the system performance metric
        setSystemPerformance(systemPerformanceMetric.toFixed(2) + '%');
      }
    };

    // Function to check internet connection
    const checkInternetConnection = () => {
      if (navigator.connection) {
        const connectionInfo = navigator.connection;

        // Update the state with the internet connection information
        setInternetConnection(connectionInfo);
      }
    };

    // Function to check battery status
    const checkBatteryStatus = () => {
      if (navigator.getBattery) {
        navigator.getBattery().then((batteryInfo) => {
          // Update the state with the battery status information
          setBatteryStatus(batteryInfo);
        });
      }
    };

    // Fetch system performance data
    fetchSystemPerformance();

    // Check internet connection
    checkInternetConnection();

    // Check battery status
    checkBatteryStatus();
  }, []);

  const handlePerformanceSettingChange = (event) => {
    setPerformanceSetting(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process the selected performance setting
    console.log('Selected Performance Setting:', performanceSetting);
    // Add your logic here to handle the performance setting
  };

  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down('sm'));

  return (
   <>
   <Layout>
   <Container maxWidth="60%" sx={{ mt: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid
            container
            spacing={2}
            direction={isMobileView ? 'column' : 'row'}
          >
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ p: 2 }}>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                      System Performance
                    </Typography>
                    <Box>
                      <Typography variant="h4">{systemPerformance}</Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ p: 2 }}>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                      Internet Connection
                    </Typography>
                    <Box sx={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
                      <div>
                        <span>Type:</span> {internetConnection.effectiveType}
                      </div>
                      <div>
                        <span>Downlink:</span> {internetConnection.downlink}
                      </div>
                      <div>
                        <span>RTT:</span> {internetConnection.rtt}
                      </div>
                      <div>
                        <span>Save Data:</span> {internetConnection.saveData}
                      </div>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ p: 2 }}>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                      Battery Status
                    </Typography>
                    <Box sx={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
                      <div>
                        <span>Level:</span> {batteryStatus.level}
                      </div>
                      <div>
                        <span>Charging:</span> {batteryStatus.charging}
                      </div>
                      <div>
                        <span>Charging Time:</span> {batteryStatus.chargingTime}
                      </div>
                      <div>
                        <span>Discharging Time:</span>{' '}
                        {batteryStatus.dischargingTime}
                      </div>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Box sx={{ p: 2 }}>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  Website Performance Setting
                </Typography>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Performance Setting</FormLabel>
                  <RadioGroup
                    aria-label="performance-setting"
                    name="performance-setting"
                    value={performanceSetting}
                    onChange={handlePerformanceSettingChange}
                  >
                    <FormControlLabel
                      value="low"
                      control={<Radio />}
                      label="Low Performance"
                    />
                    <FormControlLabel
                      value="medium"
                      control={<Radio />}
                      label="Medium Performance (Recommended)"
                    />
                    <FormControlLabel
                      value="high"
                      control={<Radio />}
                      label="High Performance"
                    />
                  </RadioGroup>
                </FormControl>
                <br />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                  sx={{ mt: 2 }}
                >
                  Save Settings
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
   </Layout>
   </>
  );
};

export default Settings;
