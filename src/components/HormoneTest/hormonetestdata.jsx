import React from 'react';
import { Typography, Box, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const HormoneTestData = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="body1" gutterBottom>
        The package contains a battery of tests. Each test has specific timelines and procedures. Here we will guide you
        through the process of planning for each one in the right order and so that they can be delivered while still
        viable to the laboratories dddd
      </Typography>

      <Typography variant="caption">
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="body1" gutterBottom>
              Hormone test data
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell width="50%">Sampling Date:</TableCell>
                    <TableCell align="right">Monday, June 19th, 2023</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Preparation Date 1:</TableCell>
                    <TableCell align="right">Thursday, June 15th, 2023</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Preparation Date 2:</TableCell>
                    <TableCell align="right">Friday, June 16th, 2023</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Preparation Date 3:</TableCell>
                    <TableCell align="right">Saturday, June 17th, 2023</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Preparation Date 4:</TableCell>
                    <TableCell align="right">Sunday, June 18th, 2023</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Testing Window Starts At:</TableCell>
                    <TableCell align="right">Monday, June 19th, 2023</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Completed At:</TableCell>
                    <TableCell align="right">Friday, June 9th, 2023</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Completed In:</TableCell>
                    <TableCell align="right">about 17 hours</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Typography>
    </Box>
  );
};

export default HormoneTestData;
