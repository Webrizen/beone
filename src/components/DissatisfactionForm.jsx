import React, { useState } from 'react';
import {
  Typography,
  Box,
  FormControl,
  TextField,
  Button,
  Rating,
} from '@mui/material';

const DissatisfactionForm = () => {
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState('');

  const handleRatingChange = (event, newValue) => {
    setRating(newValue);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic to handle form submission here, e.g., API call
    console.log('Rating:', rating);
    console.log('Comment:', comment);
    // Reset form fields
    setRating(1);
    setComment('');
  };

  return (
    <Box sx={{ width: '100%', maxWidth: '400px', margin: '0 auto', border: '0.1px solid rgba(0,0,0,0.1)', borderRadius: '20px', padding: '10px' }}>
      <Typography variant="h5" gutterBottom sx={{ textAlign: 'center' }}>
        Patient Feedback - We are sorry to hear that you had some problems.
      </Typography>
      <br />
      <hr style={{ width: '50%', margin: '0 auto' }} />
      <br />
      <form onSubmit={handleSubmit}>
        <FormControl sx={{ mb: 2 }}>
          <Typography variant="body1" gutterBottom>
            Rate Your Experience :
          </Typography>
          <Rating
            name="dissatisfaction-rating"
            value={rating}
            onChange={handleRatingChange}
            precision={1}
          />
        </FormControl>
        <br />
        <FormControl sx={{ mb: 2, width: '100%' }}>
          <Typography variant="body1" gutterBottom>
            Let us know your problem:
          </Typography>
          <TextField
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            value={comment}
            onChange={handleCommentChange}
          />
        </FormControl>
        <br />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default DissatisfactionForm;
