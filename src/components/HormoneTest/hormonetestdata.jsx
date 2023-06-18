import React from 'react';
import { Typography, Box, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const HormoneTestData = ({ data }) => {
  const change_format = (val) => {
    // return
    // var mydate = new Date(val);
    const date = new Date(val);

    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    return formattedDate;
  }
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
            <TableContainer component={Paper} sx={{ background: "white", borderRadius: "15px" }}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell width="50%">Sampling Date:</TableCell>
                    <TableCell align="right">{change_format(data.hormoneTestSamplingDate)}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Preparation Date 1:</TableCell>
                    <TableCell align="right">{change_format(data.StandardPackageHormone__PrepDate1)}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Preparation Date 2:</TableCell>
                    <TableCell align="right">{change_format(data.StandardPackageHormone__PrepDate2)}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Preparation Date 3:</TableCell>
                    <TableCell align="right">{change_format(data.StandardPackageHormone__PrepDate3)}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Preparation Date 4:</TableCell>
                    <TableCell align="right">{change_format(data.StandardPackageHormone__PrepDate4)}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Testing Window Starts At:</TableCell>
                    <TableCell align="right">{change_format(data.StandardPackageHormone__testDate1)}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <div className="two-col-kit" style={{ color: "lightgray", background: 'white', borderRadius: '15px' }}>
              <div className="left-data-kit">
                <Typography variant="body1">Completed At:</Typography>
                <Typography variant="body1">
                  {change_format(data.completedAt)}
                </Typography>
              </div>

              <div className="right-data-kit">
                <Typography variant="body1">Completed In:</Typography>
                <Typography variant="body1">
                  {data.completedIn}
                </Typography>
              </div>
            </div>
          </Box>
        </Box>
      </Typography>
    </Box>
  );
};

export default HormoneTestData;
