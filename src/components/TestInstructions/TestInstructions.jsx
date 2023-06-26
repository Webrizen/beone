import React, { useState, useContext, useEffect } from "react";
import {
  Typography,
  Link,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Divider,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Alert,
} from "@mui/material";
import {
  Email,
} from "@mui/icons-material";
import CurrOrderContext from "../../utils/order_context";

const TestInstructionsComp = ({ data, planningData }) => {
  const [main_data, setmain_data] = useState({ ...data });
  const [plan, setplan] = useState({ ...planningData });
  useEffect(() => {
    console.log("planning data", planningData);
    setmain_data({ ...data });
    setplan({ ...planningData });
    console.log("data form intrcutions", main_data);
    console.log(data);
  }, [data, planningData]);

  const { currOrder, setCurrOrder } = useContext(CurrOrderContext);
  const o_id = localStorage.getItem("currOrder");

  const videos = [
    {
      title: "Link to Hormone Test video",
      imageUrl: "https://placehold.co/400",
    },
    {
      title: "Link to Metabolic Test",
      imageUrl: "https://placehold.co/400",
    },
    {
      title: "Link to Thyroid Test",
      imageUrl: "https://placehold.co/400",
    },
    {
      title: "Link to Immune Test",
      imageUrl: "https://placehold.co/400",
    },
  ];

  return (
    <>
      <Typography variant="h5" gutterBottom>
        Test Instructions
      </Typography>
      <Divider sx={{ margin: "1rem 0" }} />
      <Typography variant="body1" gutterBottom>
        The kits you received come with fully comprehensive instructions. For
        practicality, we are providing a digital version of them{" "}
        <Link href="#">HERE</Link>. And in addition, we have made video
        companions to the instructions. Read the instructions and watch the
        videos at least a few days before starting the preparation to ensure
        that everything is clear.
      </Typography>
      <Grid container spacing={2}>
        {videos.map((video, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "transparent",
                boxShadow: "none",
                borderRadius: "8px",
                height: "100%",
              }}
            >
              <CardMedia
                component="img"
                image={video.imageUrl}
                alt={video.title}
                style={{
                  height: "180px",
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <CardContent
                sx={{
                  paddingTop: "10px",
                  background: "white",
                  width: "100%",
                  marginBottom: "0",
                }}
              >
                <Typography
                  variant="body1"
                  style={{
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: "small",
                  }}
                >
                  <Link href="/" style={{ textDecoration: "none" }}>
                    {video.title}
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <br />
      <div
        style={{
          background: "#fff",
          borderRadius: "15px",
          padding: "20px",
          overflowX: "scroll",
        }}
      >
        <Typography variant="body1" gutterBottom>
          Test Instruction Questions <br />
          <span
            style={{
              color: "silver",
              fontSize: "small",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <Email /> Check Your Email For Reminders & Answering these
            questions.
          </span>
        </Typography>
        <Divider sx={{ margin: "1rem 0" }} />
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Questions</TableCell>
              <TableCell>Options</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!main_data.StandardPackageHormonePrep__customerConfirmationStatus ? (
              <TableRow>
                <TableCell>
                  You have not confirmed yet if you are prepared for the Hormone
                  test on {plan.hormoneTestSamplingDate}. Please check your
                  email for a reminder. Select "Yes" or "No" depending on how
                  your test preparation happened.
                </TableCell>
                <TableCell>
                  <Alert
                    severity="info"
                    sx={{ width: "min-content", whiteSpace: "nowrap" }}
                  >
                    Check Your Email
                  </Alert>
                </TableCell>
              </TableRow>
            ) : null}
            {!main_data.StandardPackageHormoneSampleCollect__customerConfirmationStatus ? (
              <TableRow>
                <TableCell>
                  Your Hormone sampling date is on{" "}
                  {plan.hormoneTestSamplingDate}. You can confirm only after
                  that date. Please check your email for a reminder. Select
                  "Yes" or "No" depending on how your test sampling happened.
                </TableCell>
                <TableCell>
                  <Alert
                    severity="info"
                    sx={{ width: "min-content", whiteSpace: "nowrap" }}
                  >
                    Check Your Email
                  </Alert>
                </TableCell>
              </TableRow>
            ) : null}
            {!main_data.StandardPackageMetabolicPrep__customerConfirmationStatus ? (
              <TableRow>
                <TableCell>
                  You have not confirmed yet if you are prepared for the
                  Metabolic test on {plan.metabolicTestDate}. Please check your
                  email for a reminder. Select "Yes" or "No" depending on how
                  your test preparation happened.
                </TableCell>
                <TableCell>
                  <Alert
                    severity="info"
                    sx={{ width: "min-content", whiteSpace: "nowrap" }}
                  >
                    Check Your Email
                  </Alert>
                </TableCell>
              </TableRow>
            ) : null}
            {!main_data.StandardPackageMetabolicSampleCollect__customerConfirmationStatus ? (
              <TableRow>
                <TableCell>
                  Your Metabolic sampling date is on {plan.metabolicTestDate} .
                  You can confirm only after that date. Please check your email
                  for a reminder. Select "Yes" or "No" depending on how your
                  test sampling happened.
                </TableCell>
                <TableCell>
                  <Alert
                    severity="info"
                    sx={{ width: "min-content", whiteSpace: "nowrap" }}
                  >
                    Check Your Email
                  </Alert>
                </TableCell>
              </TableRow>
            ) : null}
            {!(main_data.StandardPackageHormonePrep__customerConfirmationStatus ||
              main_data.StandardPackageHormoneSampleCollect__customerConfirmationStatus ||
              main_data.StandardPackageMetabolicPrep__customerConfirmationStatus ||
              main_data.StandardPackageMetabolicSampleCollect__customerConfirmationStatus) && (
              <TableRow>
                <TableCell colSpan={2} align="center">
                  No Data Available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <instructionsData />
    </>
  );
};

export default TestInstructionsComp;
