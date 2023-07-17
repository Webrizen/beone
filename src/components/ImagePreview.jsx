import React from 'react';
import { BASE_API, change_format } from '../utils/common';
import { saveAs } from 'file-saver';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { Button, Box, Typography, Alert } from '@mui/material';

const ImagePreview = ({ id, time }) => {
  const url = BASE_API + "/files/" + id + "/serve";
  const save = () => {
    saveAs(url, "Beone_Report");
  }
  return (
    <>
      <Box sx={{ p: 2, background: "white", borderRadius: '15px', width: '100%' }}>
        <Typography variant="h5" gutterBottom sx={{ borderBottom: '0.1px solid rgba(0,0,0,0.1)', padding: '10px', marginBottom: '10px' }}>
          Immune test picture
        </Typography>
        <Typography variant="body1" gutterBottom>
          Status: <span style={{ color: 'green' }}>Done</span> <br />
          Time Uploaded: {time != null ? <span style={{ color: 'silver' }}>{change_format(time)}</span> : "N/A"}
        </Typography>
        <Button onClick={save} variant='contained' sx={{ width: 'min-content', whiteSpace: 'nowrap' }} startIcon={<CloudDownloadIcon />}>
          Download File
        </Button>
      </Box>
      {/* <img src={url} alt="Check Your Internet Connection." style={{ width: '100%', borderRadius: '7px' }} /> */}
    </>
  );
}

export default ImagePreview;
