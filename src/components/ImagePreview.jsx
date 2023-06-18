import React from 'react';
import { BASE_API } from '../utils/common';

const ImagePreview = ({ id }) => {
  return (
    <>
      <img src={`${BASE_API}/files/${id}/serve`} alt="Check Your Internet Connection." style={{ width: '100%', borderRadius: '7px' }} />
    </>
  );
}

export default ImagePreview;
