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
      <Typography variant="h6" gutterBottom>
        Health Questionare
      </Typography>
      <DynamicForm />
    </Box>
  );
};

export default QuizComponent;
