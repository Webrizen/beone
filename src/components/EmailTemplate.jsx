import React from 'react';
import Button from '@mui/material/Button';

const EmailTemplate = () => {
  const handleButtonClick = (url) => {
    // Open a new browser window with the specified URL
    window.open(url);
  };

  const handleButton1Click = () => {
    const url = 'https://example.com/notification-view?message=Registering your response...';
    handleButtonClick(url);
  };

  const handleButton2Click = () => {
    const url = 'https://example.com/other-notification-view?message=Registering your response...';
    handleButtonClick(url);
  };

  return (
    <div>
      <p>Message content of your email.</p>
      <Button variant="contained" color="primary" onClick={handleButton1Click}>
        Ok
      </Button>
      <Button variant="contained" color="secondary" onClick={handleButton2Click}>
        Not Ok
      </Button>
    </div>
  );
};

export default EmailTemplate;