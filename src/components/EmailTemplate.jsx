import React, { useState } from 'react';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
  Button,
} from '@mui/material';

const EmailTemplate = () => {
  const [answers, setAnswers] = useState({
    question1: '',
    question2: '',
    question3: '',
  });

  const handleAnswerChange = (event) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Email Template
      </Typography>
      <form onSubmit={handleFormSubmit}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Questions:</FormLabel>
          <RadioGroup>
            <FormControlLabel
              control={
                <Radio
                  checked={answers.question1 === 'yes'}
                  onChange={handleAnswerChange}
                  value="yes"
                  name="question1"
                />
              }
              label="Question 1: Dummy Question?"
            />
            <FormControlLabel
              control={
                <Radio
                  checked={answers.question1 === 'no'}
                  onChange={handleAnswerChange}
                  value="no"
                  name="question1"
                />
              }
              label="No"
            />
            <FormControlLabel
              control={
                <Radio
                  checked={answers.question2 === 'yes'}
                  onChange={handleAnswerChange}
                  value="yes"
                  name="question2"
                />
              }
              label="Question 2: Dummy Question?"
            />
            <FormControlLabel
              control={
                <Radio
                  checked={answers.question2 === 'no'}
                  onChange={handleAnswerChange}
                  value="no"
                  name="question2"
                />
              }
              label="No"
            />
            <FormControlLabel
              control={
                <Radio
                  checked={answers.question3 === 'yes'}
                  onChange={handleAnswerChange}
                  value="yes"
                  name="question3"
                />
              }
              label="Question 3: Dummy Question?"
            />
            <FormControlLabel
              control={
                <Radio
                  checked={answers.question3 === 'no'}
                  onChange={handleAnswerChange}
                  value="no"
                  name="question3"
                />
              }
              label="No"
            />
          </RadioGroup>
        </FormControl>
        <Button type="submit" variant="contained" color="primary">
          Send Email
        </Button>
      </form>
    </>
  );
}

export default EmailTemplate;
