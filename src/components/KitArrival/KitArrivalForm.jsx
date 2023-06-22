import React, { useContext, useState } from 'react';
import {
  Box,
  Typography,
  Switch,
  Button,
  Grid,
  FormControlLabel,
  FormGroup,
} from '@mui/material';
import baseApi, { Set_order } from '../../utils/common';
import Swal from 'sweetalert2';
import CurrOrderContext from '../../utils/order_context';
import { useNavigate } from 'react-router-dom';

const KitArrivalForm = ({ setOrder }) => {

  const [packageArrived, setPackageArrived] = useState(false);
  const navigate = useNavigate();
  const handlePackageArrivedChange = (event) => {
    setPackageArrived(event.target.checked);
  };

  const handleDoneButtonClick = () => {

    const o_id = localStorage.getItem("currOrder");
    baseApi
      .post(`/dashboard/${o_id}/complete-confirm-shipment`,
        {
          packageReceiptStatus: 'Y',
        })
      .then((response) => {
        console.log("data after kit arrival post", response.data);

        // localStorage.setItem("img", response.data.id);
        Set_order(o_id, setOrder, navigate);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Kit Arrival Done",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(`/order/${o_id}/planning`);
      })
      .catch((error) => {
        console.error("kit arrival error", error);
      });

  };

  return (
    <>
      <Box sx={{ flexGrow: 1, background: 'white', borderRadius: '7px', padding: '20px' }}>
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
            disabled={!packageArrived}
          >
            Done
          </Button>
        </Grid>
      </Box>
    </>
  );
}

export default KitArrivalForm;
