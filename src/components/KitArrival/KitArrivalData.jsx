import React from "react";
import {
  Box,
  Typography,
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

const KitArrivalData = () => {
  return (
    <>
      <Box sx={{ maxWidth: "100%", overflowX: "auto", padding: "10px" }}>
        <Box sx={{ mt: 2 }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography variant="body1">Details</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="body1">Value</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Typography variant="body1">AWB Number:</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="body1">MONSTER</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography variant="body1">AWB Status:</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="body1">Done</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography variant="body1">
                      Product Package Type:
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="body1">STANDARD</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography variant="body1">Completed At:</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="body1">
                      Thursday, June 8th, 2023
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography variant="body1">Completed In:</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="body1">3 days</Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
};

export default KitArrivalData;
