import React from 'react';
import { BASE_API } from '../utils/common';
import { saveAs } from 'file-saver';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { Button } from '@mui/material';

const ImagePreview = ({ id }) => {
  const url = BASE_API + "/files/" + id + "/serve";
  const save = () => {
    saveAs(url, "Beone_Report");
  }
  return (
    <>
      <Button onClick={save} variant='contained' sx={{ width: 'min-content', whiteSpace: 'nowrap' }} startIcon={<CloudDownloadIcon />}>
        Download File
      </Button>
      {/* <img src={url} alt="Check Your Internet Connection." style={{ width: '100%', borderRadius: '7px' }} /> */}
    </>
  );
}

export default ImagePreview;
