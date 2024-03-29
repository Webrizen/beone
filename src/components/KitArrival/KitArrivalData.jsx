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
import { change_format } from "../../utils/common";
const KitArrivalData = ({ data }) => {
  return (
    <>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: 700,
          background: "linear-gradient(50deg, #45d9c9, #84b3c7)",
          WebkitTextFillColor: "transparent",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
        }}
      >
        The package arrived!
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        sx={{ color: "rgba(0,0,0,0.3)" }}
      >
        The package is with you now
      </Typography>
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
                    <Typography variant="body1">{data.awbNumber}</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography variant="body1">AWB Status:</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="body1">{data.awbStatus}</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography variant="body1">
                      Product Package Type:
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="body1">
                      {data.productPackageType}
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography variant="body1">
                      Package Received on:
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="body1">
                      {change_format(data.packageReceiptStatusDate)}
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <div className="two-col-kit" style={{ color: "silver" }}>
            <div className="left-data-kit">
              <Typography variant="body1">Completed At:</Typography>
              <Typography variant="body1">{change_format(data.completedAt)}</Typography>
            </div>
            {"completedIn" in data ? (
              <div className="right-data-kit">
                <Typography variant="body1">Completed In:</Typography>
                <Typography variant="body1">{data.completedIn}</Typography>
              </div>
            ) : (
              ""
            )}
          </div>
        </Box>
      </Box>
    </>
  );
};

export default KitArrivalData;
