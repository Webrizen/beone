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
  IconButton,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  Button,
  Checkbox,
} from "@mui/material";
import { Email } from "@mui/icons-material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import CurrOrderContext from "../../utils/order_context";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import ReplayIcon from "@mui/icons-material/Replay";
import EmailTemplate from "../EmailTemplate";

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

  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [confirmed, setConfirmed] = useState(false);

  const handleCheckboxChange = (event) => {
    setConfirmed(event.target.checked);
  };

  const handleProceedClick = () => {
    if (confirmed) {
      // Proceed with the necessary actions
      console.log("Proceeding...");
    } else {
      // Display an error or warning message
      console.log("Please confirm that all queries have been answered.");
    }
  };

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
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "10px",
                  }}
                >
                  <IconButton aria-label="Download" size="medium">
                    <CloudDownloadIcon />
                  </IconButton>
                  <IconButton aria-label="Play" size="medium">
                    <PlayCircleOutlineIcon />
                  </IconButton>
                  <IconButton aria-label="Replay" size="medium">
                    <ReplayIcon />
                  </IconButton>
                </div>
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
          Test Instruction Queries <br />
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
              <TableCell>Queries</TableCell>
              <TableCell>Options</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* homrone prep status  */}
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
            {main_data.StandardPackageHormonePrep__customerConfirmationStatus ===
            "Y" ? (
              <TableRow>
                <TableCell style={{ color: "green" }}>
                  You confirmed that you are ready to go ahead with the sampling
                  on date.
                </TableCell>
                <TableCell>
                  <CheckCircleIcon
                    sx={{ color: "green", textAlign: "center" }}
                  />
                </TableCell>
              </TableRow>
            ) : null}
            {main_data.StandardPackageHormonePrep__customerConfirmationStatus ===
            "N" ? (
              <TableRow>
                <TableCell style={{ color: "red" }}>
                  It seems that you need to reschedule your sampling correct ?
                </TableCell>
                <TableCell>
                  <PriorityHighIcon
                    sx={{ color: "red", textAlign: "center" }}
                  />
                </TableCell>
              </TableRow>
            ) : null}
            {/* hormone Sampling status  */}
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
            {main_data.StandardPackageHormoneSampleCollect__customerConfirmationStatus ===
            "Y" ? (
              <TableRow>
                <TableCell style={{ color: "green" }}>
                  You confirmed on date that your sampling was
                  succesfull.Great!!
                </TableCell>
                <TableCell>
                  <CheckCircleIcon
                    sx={{ color: "green", textAlign: "center" }}
                  />
                </TableCell>
              </TableRow>
            ) : null}
            {main_data.StandardPackageHormoneSampleCollect__customerConfirmationStatus ===
            "N" ? (
              <TableRow>
                <TableCell style={{ color: "red" }}>
                  It seems that you ran into some problems with sampling
                  correct?
                </TableCell>
                <TableCell>
                  <PriorityHighIcon
                    sx={{ color: "red", textAlign: "center" }}
                  />
                </TableCell>
              </TableRow>
            ) : null}
            {/* metabolic prep status  */}
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
            {main_data.StandardPackageMetabolicPrep__customerConfirmationStatus ===
            "Y" ? (
              <TableRow>
                <TableCell style={{ color: "green" }}>
                  You confirmed that you are ready to go ahead with the sampling
                  on date.
                </TableCell>
                <TableCell>
                  <CheckCircleIcon
                    sx={{ color: "green", textAlign: "center" }}
                  />
                </TableCell>
              </TableRow>
            ) : null}
            {main_data.StandardPackageMetabolicPrep__customerConfirmationStatus ===
            "N" ? (
              <TableRow>
                <TableCell style={{ color: "red" }}>
                  It seems that you need to reschedule your sampling correct ?
                </TableCell>
                <TableCell>
                  <PriorityHighIcon
                    sx={{ color: "red", textAlign: "center" }}
                  />
                </TableCell>
              </TableRow>
            ) : null}
            {/* metabolic sample status */}
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
            {main_data.StandardPackageMetabolicSampleCollect__customerConfirmationStatus ===
            "Y" ? (
              <TableRow>
                <TableCell style={{ color: "green" }}>
                  You confirmed on date that your sampling was
                  succesfull.Great!!
                </TableCell>
                <TableCell>
                  <CheckCircleIcon
                    sx={{ color: "green", textAlign: "center" }}
                  />
                </TableCell>
              </TableRow>
            ) : null}
            {main_data.StandardPackageMetabolicSampleCollect__customerConfirmationStatus ===
            "N" ? (
              <TableRow>
                <TableCell style={{ color: "red" }}>
                  It seems that you ran into some problems with sampling
                  correct?
                </TableCell>
                <TableCell>
                  <PriorityHighIcon
                    sx={{ color: "red", textAlign: "center" }}
                  />
                </TableCell>
              </TableRow>
            ) : null}
            {/* end  */}
          </TableBody>
        </Table>
        <FormControlLabel
        sx={{ margin: '20px 0px' }}
          control={
            <Checkbox
              checked={confirmed}
              onChange={handleCheckboxChange}
              color="primary"
            />
          }
          label="I hereby confirm that I have addressed all the aforementioned queries to the best of my abilities."
        />
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={handleProceedClick}
          disabled={!confirmed}
        >
          Proceed
        </Button>
      </div>
      <instructionsData />
    </>
  );
};

export default TestInstructionsComp;
