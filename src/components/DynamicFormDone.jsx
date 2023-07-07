import React from 'react';
import {
    Typography,
    Box
  } from "@mui/material";
  import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const DynamicFormDone = () => {
  return (
    <>
      <Box sx={{ p: 2, background: "white", borderRadius: '15px' }}>
      <Typography variant="h5" gutterBottom sx={{ borderBottom: '0.1px solid rgba(0,0,0,0.1)', padding: '10px', marginBottom: '10px' }}>
        Health Questionare
      </Typography>
      <Typography variant="p" sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '10px 20px' }}>
        <CheckCircleIcon sx={{ color: 'green', marginRight: '10px' }}/> Completed
      </Typography>
    </Box>
    </>
  );
}

export default DynamicFormDone;
