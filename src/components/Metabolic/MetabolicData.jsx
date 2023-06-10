import React from 'react';
import { Typography, Box, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const MetabolicData = () => {
    const data = [
        { label: 'Sampling Date', value: 'Tuesday, June 20th, 2023' },
        { label: 'Preparation Date 1', value: 'Friday, June 16th, 2023' },
        { label: 'Preparation Date 2', value: 'Saturday, June 17th, 2023' },
        { label: 'Preparation Date 3', value: 'Sunday, June 18th, 2023' },
        { label: 'Preparation Date 4', value: 'Monday, June 19th, 2023' },
        { label: 'Completed At', value: 'Friday, June 9th, 2023' },
        { label: 'Completed In', value: 'about 17 hours' },
      ];

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="body1" gutterBottom>
      The package contains a battery of tests. Each test has specific timelines and procedures. Here we will guide you through the process of planning for each one in the right order and so that they can be delivered while still viable to the laboratories
      </Typography>
      <Typography variant="caption">
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="body1" gutterBottom>
              Metabolic, immune and thyroid test data
            </Typography>
            <TableContainer sx={{ background: "white", borderRadius: "15px" }}>
              <Table>
                <TableBody>
                  {data.map((item) => (
                    <TableRow key={item.label}>
                      <TableCell>{item.label}</TableCell>
                      <TableCell align="right">{item.value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Typography>
      </Box>
    </>
  );
}

export default MetabolicData;
