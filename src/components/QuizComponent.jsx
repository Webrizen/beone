import React, { useState } from "react";
import DynamicForm from './DynamicForm'
import {
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  Box,
} from "@mui/material";

const QuizComponent = () => {

  return (
    <Box sx={{ p: 2, background: "white", borderRadius: '15px' }}>
      <Typography variant="h5" gutterBottom sx={{ borderBottom: '0.1px solid rgba(0,0,0,0.1)', padding: '10px', marginBottom: '10px' }}>
        Health Questionare
      </Typography>
      <DynamicForm />
    </Box>
  );
};

export default QuizComponent;
