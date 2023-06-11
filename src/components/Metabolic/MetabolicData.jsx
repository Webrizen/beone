import React from 'react';
import { Typography, Box, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const MetabolicData = () => {
    const data = [
        { label: 'Sampling Date', value: 'Tuesday, June 20th, 2023' },
        { label: 'Preparation Date 1', value: 'Friday, June 16th, 2023' },
        { label: 'Preparation Date 2', value: 'Saturday, June 17th, 2023' },
        { label: 'Preparation Date 3', value: 'Sunday, June 18th, 2023' },
        { label: 'Preparation Date 4', value: 'Monday, June 19th, 2023' },
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
            <div className="two-col-kit" style={{ color: "lightgray", background: 'white', borderRadius: '15px' }}>
            <div className="left-data-kit">
              <Typography variant="body1">Completed At:</Typography>
              <Typography variant="body1">
                Thursday, June 8th, 2023
              </Typography>
            </div>

            <div className="right-data-kit">
              <Typography variant="body1">Completed In:</Typography>
              <Typography variant="body1">
              3 days
              </Typography>
            </div>
          </div>
          </Box>
        </Box>
      </Typography>
      </Box>
    </>
  );
}

export default MetabolicData;
