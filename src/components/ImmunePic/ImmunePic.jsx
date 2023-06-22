import React, { useContext } from "react";
import { Box, Typography, InputBase, Button, SvgIcon } from "@mui/material";
import { styled } from "@mui/system";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ImagePreview from "../ImagePreview";
import baseApi, { BASE_API, Set_order } from "../../utils/common";
import CurrOrderContext from "../../utils/order_context";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const UploadIcon = styled(SvgIcon)({
  marginRight: "8px",
});
const ImmunePicComp = () => {
  const { currOrder, setCurrOrder } = useContext(CurrOrderContext);
  const navigate = useNavigate();
  function convertToBinaryString(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        const binaryString = reader.result;
        resolve(binaryString);
      };

      reader.onerror = () => {
        reject(reader.error);
      };

      reader.readAsBinaryString(file);
    });
  }
  const handleFile = async (event) => {
    console.log("file changed");
    const file = event.target.files[0];
    const binaryString = await convertToBinaryString(file);
    console.log(binaryString);

    const o_id = localStorage.getItem("currOrder");
    const formData = new FormData();
    formData.append('file', file);
    // formData.append('avatar', file); // 'file' represents the File object you want to upload

    try {
      const response = await axios.post(BASE_API + `/dashboard/${o_id}/complete-immune-test-upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          "Authorization": "Bearer " + localStorage.getItem("token")
        }
      });

      console.log('Response:', response.data);
      Set_order(o_id, setCurrOrder, navigate);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Immune Pic upload done",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error('Error:', error);
    }
    // baseApi
    //   .post(`/dashboard/${o_id}/complete-immune-test-upload`, binaryString)
    //   .then((response) => {
    //     console.log("after planning task", response.data);

    //     Set_order(o_id, setCurrOrder);
    //     Swal.fire({
    //       position: "center",
    //       icon: "success",
    //       title: "Immune Pic upload done",
    //       showConfirmButton: false,
    //       timer: 1500,
    //     });
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }
  return (
    <Box sx={{ p: 2, background: "white", borderRadius: '15px' }}>
      <Typography variant="h6" gutterBottom>
        Immune test picture upload
      </Typography>
      <Typography variant="body1" gutterBottom>
        Choose &amp; upload the picture of your Immune balance test
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mt: 2,
          '& input[type="file"]': {
            display: "none",
          },
        }}
      >
        <label htmlFor="upload-input">
          <InputBase
            onChange={handleFile}
            type="file"
            id="upload-input"
            sx={{
              display: "none",
            }}
          />
          <Button
            variant="contained"
            color="primary"
            component="span"
            size="medium"
            sx={{
              textTransform: "none",
            }}
          >
            <UploadIcon component={CloudUploadIcon} />
            Upload
          </Button>
        </label>
      </Box>
      <Box sx={{ mt: 2, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'right' }}>
        <Button
          variant="contained"
          color="warning"
          size="medium"
          sx={{ textTransform: "none" }}
        >
          Next
          <SvgIcon component={NavigateNextIcon} sx={{ ml: 1 }} />
        </Button>
      </Box>

    </Box>
  );
};

export default ImmunePicComp;
