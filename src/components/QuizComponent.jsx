import React, { useState } from "react";
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
  const [currentScreen, setCurrentScreen] = useState("question1");
  const [sourceType, setSourceType] = useState("");
  const [credentials, setCredentials] = useState("");

  const handleNext = () => {
    if (currentScreen === "question1") {
      setCurrentScreen("question2");
    } else if (currentScreen === "question2") {
      if (sourceType && credentials) {
        // Quiz completed, do something with the answers
        console.log("Source Type:", sourceType);
        console.log("Credentials:", credentials);
      }
    }
  };

  const handleRestart = () => {
    setCurrentScreen("question1");
    setSourceType("");
    setCredentials("");
  };

  return (
    <Box
      sx={{
        width: "100%",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        backgroundColor: "#fff",
      }}
    >
      <Typography variant="h4" align="left">
        Health Questionnaire
      </Typography>
      <Typography variant="body1">
        We have a few questions that we will need you to answer in order for us
        to be able to analyze the results of the tests.
      </Typography>
      <hr style={{ margin: "10px 0" }} />
      {currentScreen === "question1" && (
        <>
          <FormControl fullWidth sx={{ marginBottom: "20px" }}>
            <InputLabel>Select Source Type</InputLabel>
            <Select
              label="Select Source Type"
              value={sourceType}
              onChange={(event) => setSourceType(event.target.value)}
            >
              <MenuItem value="AWS">AWS</MenuItem>
              <MenuItem value="Google">Google</MenuItem>
            </Select>
          </FormControl>
        </>
      )}
      {currentScreen === "question2" && (
        <TextField
          label="Credentials"
          value={credentials}
          onChange={(event) => setCredentials(event.target.value)}
          fullWidth
          sx={{ marginBottom: "20px" }}
        />
      )}
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="contained" onClick={handleRestart}>
          Restart
        </Button>
        <Button
          variant="contained"
          onClick={handleNext}
          disabled={currentScreen === "question1" && !sourceType}
        >
          {currentScreen === "question1" ? "Next" : "Submit"}
        </Button>
      </Box>
    </Box>
  );
};

export default QuizComponent;
