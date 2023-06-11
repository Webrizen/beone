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
      <Box
        sx={{
          maxWidth: "100%",
          overflowX: "auto",
          background: "white",
          borderRadius: "7px",
          padding: "20px",
          marginTop: "10px",
        }}
      >
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
              </TableBody>
            </Table>
          </TableContainer>
          <div className="two-col-kit" style={{ color: "lightgray" }}>
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
    </>
  );
};

export default KitArrivalData;
