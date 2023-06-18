import React from "react";
import { Box, Typography, InputBase, Button, SvgIcon } from "@mui/material";
import { styled } from "@mui/system";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ImagePreview from "../ImagePreview";


const UploadIcon = styled(SvgIcon)({
  marginRight: "8px",
});

const ImmunePicComp = () => {
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
