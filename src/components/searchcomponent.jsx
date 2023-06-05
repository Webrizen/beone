import React from 'react';
import { Box, TextField, Chip } from '@mui/material';

const SearchComponent = () => {

  return (
    <Box sx={{ padding: '1rem', borderBottom: "0.1px solid rgba(0,0,0,0.1)" }}>
      <form>
        <TextField
          label="Search"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: '1rem' }}
        />
      </form>
      <Box>
      <Chip label="Find Doctors" sx={{ margin: '6px' }} />
      <Chip label="Kit Arrivals" sx={{ margin: '6px' }} />
      <Chip label="Diet" sx={{ margin: '6px' }} />
      </Box>
    </Box>
  );
};

export default SearchComponent;
