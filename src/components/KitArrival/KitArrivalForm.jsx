import React, { useState } from 'react';
import {
  Box,
  Typography,
  Switch,
  Button,
  Grid,
  FormControlLabel,
  FormGroup,
} from '@mui/material';

const KitArrivalForm = () => {

    const [packageArrived, setPackageArrived] = useState(false);

  const handlePackageArrivedChange = (event) => {
    setPackageArrived(event.target.checked);
  };

  const handleDoneButtonClick = () => {
    // Handle the "Done" button click event here
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={packageArrived}
              onChange={handlePackageArrivedChange}
              color="success"
              size="medium"
            />
          }
          label="Did the package arrive?"
        />
      </FormGroup>

      <Grid container justifyContent="flex-end">
        <Button
          variant="contained"
          color="primary"
          size="medium"
          onClick={handleDoneButtonClick}
        >
          Done
        </Button>
      </Grid>
    </Box>
    </>
  );
}

export default KitArrivalForm;
