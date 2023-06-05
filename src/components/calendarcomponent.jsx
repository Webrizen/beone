import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function Calendar({ children }) {
  return (
    <>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar readOnly  />
    </LocalizationProvider>
    <Stack sx={{ width: '100%' }}>
      <Alert severity="info">Upcoming Appointment!</Alert>
    </Stack>
    </>
  );
}

export default Calendar