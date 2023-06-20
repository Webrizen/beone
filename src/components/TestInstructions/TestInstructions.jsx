import React, { useState }  from "react";
import {
  Typography,
  Link, 
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
  Box,
  TextField,
  Tooltip,
  Grid,
} from "@mui/material";
import {
  RadioButtonUnchecked,
  RadioButtonChecked,
  VideoLibrary,
} from "@mui/icons-material";

const TestInstructionsComp = () => {
  const [samplingConfirmation, setSamplingConfirmation] = useState(null);
  const [feedback, setFeedback] = useState("");

  const handleConfirmationChange = (event) => {
    setSamplingConfirmation(event.target.value);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send feedback to backend or perform desired actions
    console.log(feedback);
    // Reset feedback state
    setFeedback("");
  };
  return (
    <>
      <Typography variant="body1" gutterBottom>
        The kits you received come with fully comprehensive instructions. For
        practicality, we are providing a digital version of them{" "}
        <Link href="#">HERE</Link>. And in addition, we have made video
        companions to the instructions. Read the instructions and watch the
        videos at least a few days before starting the preparation to ensure
        that everything is clear.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <Tooltip title="Link to Hormone Test video">
          <Button variant="outlined" component={Link} href="#">
            <VideoLibrary />
          </Button>
        </Tooltip>
        <br />
        <Tooltip title="Link to Metabolic Test">
          <Button variant="outlined" component={Link} href="#">
            <VideoLibrary />
          </Button>
        </Tooltip>
        <br />
        <Tooltip title="Link to Thyroid Test">
          <Button variant="outlined" component={Link} href="#">
            <VideoLibrary />
          </Button>
        </Tooltip>
        <br />
        <Tooltip title="Link to Immune Test">
          <Button variant="outlined" component={Link} href="#">
            <VideoLibrary />
          </Button>
        </Tooltip>
      </Box>
      <br />
      <div style={{ background: '#fff', borderRadius: '15px', padding: '20px' }}>
      <FormControl>
        <Typography
          variant="body1"
          color="primary"
          id="demo-controlled-radio-buttons-group"
        >
          You have not confirmed yet if you are prepared for the hormone test on
        </Typography>
        <RadioGroup name="controlled-radio-buttons-group">
          <FormControlLabel
            value="yes"
            control={
              <Radio
                color="success"
                icon={<RadioButtonUnchecked />}
                checkedIcon={<RadioButtonChecked />}
              />
            }
            label="Yes"
          />
          <FormControlLabel
            value="no"
            control={
              <Radio
                color="error"
                icon={<RadioButtonUnchecked />}
                checkedIcon={<RadioButtonChecked />}
              />
            }
            label="No"
          />
        </RadioGroup>
      </FormControl>
      <br />
      <FormControl>
        <Typography
          variant="body1"
          color="primary"
          id="demo-controlled-radio-buttons-group"
        >
          You have not confirmed yet if you are prepared for the Metabolic test
          on
        </Typography>
        <RadioGroup name="controlled-radio-buttons-group">
          <FormControlLabel
            value="yes"
            control={
              <Radio
                color="success"
                icon={<RadioButtonUnchecked />}
                checkedIcon={<RadioButtonChecked />}
              />
            }
            label="Yes"
          />
          <FormControlLabel
            value="no"
            control={
              <Radio
                color="error"
                icon={<RadioButtonUnchecked />}
                checkedIcon={<RadioButtonChecked />}
              />
            }
            label="No"
          />
        </RadioGroup>
      </FormControl>
      <br />
      <FormControl>
        <Typography
          variant="body1"
          color="primary"
          id="demo-controlled-radio-buttons-group"
        >
          You confirmed on that sampling of hormone test was successful. Great!!
        </Typography>
        <RadioGroup name="controlled-radio-buttons-group">
          <FormControlLabel
            value="yes"
            control={
              <Radio
                color="success"
                icon={<RadioButtonUnchecked />}
                checkedIcon={<RadioButtonChecked />}
              />
            }
            label="Yes"
          />
          <FormControlLabel
            value="no"
            control={
              <Radio
                color="error"
                icon={<RadioButtonUnchecked />}
                checkedIcon={<RadioButtonChecked />}
              />
            }
            label="No"
          />
        </RadioGroup>
      </FormControl>
      <br />
      <FormControl>
        <Typography
          variant="body1"
          color="primary"
          id="demo-controlled-radio-buttons-group"
        >
          You confirmed on that sampling of Metabolic test was successful.
          Great!!
        </Typography>
        <RadioGroup name="controlled-radio-buttons-group">
          <FormControlLabel
            value="yes"
            control={
              <Radio
                color="success"
                icon={<RadioButtonUnchecked />}
                checkedIcon={<RadioButtonChecked />}
              />
            }
            label="Yes"
          />
          <FormControlLabel
            value="no"
            control={
              <Radio
                color="error"
                icon={<RadioButtonUnchecked />}
                checkedIcon={<RadioButtonChecked />}
              />
            }
            label="No"
          />
        </RadioGroup>
      </FormControl>
      <br />
      <FormControl component="fieldset">
        <Typography variant="body1" color="primary">
          You have not confirmed yet if your sampling went ok.
        </Typography>
        <RadioGroup
          name="controlled-radio-buttons-group"
          value={samplingConfirmation}
          onChange={handleConfirmationChange}
        >
          <FormControlLabel
            value="yes"
            control={
              <Radio
                color="success"
                icon={<RadioButtonUnchecked />}
                checkedIcon={<RadioButtonChecked />}
              />
            }
            label="Yes"
          />
          <FormControlLabel
            value="no"
            control={
              <Radio
                color="error"
                icon={<RadioButtonUnchecked />}
                checkedIcon={<RadioButtonChecked />}
              />
            }
            label="No"
          />
        </RadioGroup>
      </FormControl>
      {samplingConfirmation === "no" && (
        <form onSubmit={handleSubmit}>
          <TextField
            label="What went wrong?"
            value={feedback}
            onChange={handleFeedbackChange}
            fullWidth
            multiline
            rows={4}
            margin="normal"
            variant="outlined"
          />
        </form>
      )}
      </div>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "right",
          paddingRight: "20px",
          marginBottom: "20px",
          marginTop: '-20px'
        }}
      >
        <Button variant="contained" color="warning">
          Submit
        </Button>
      </Box>

      {/* SHow This After Form Submit  */}
      <Box
        sx={{
          p: 2,
          background: "#f5f5f5",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      >
        <Typography variant="body1" gutterBottom>
          Testing instructions data
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="body1">
                  Hormone preparation confirmation date:
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" align="right">
                  Monday, May 22nd, 2023
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="body1">
                  Metabolic preparation confirmation Date:
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" align="right">
                  Monday, May 22nd, 2023
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="body1">
                  Hormone sample collect confirmation date:
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" align="right">
                  Monday, May 22nd, 2023
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="body1">
                  Metabolic sample collect confirmation date:
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" align="right">
                  Monday, May 22nd, 2023
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <div
            className="two-col-kit"
            style={{
              color: "lightgray",
              width: '100%'
            }}
          >
            <div className="left-data-kit">
              <Typography variant="body1">Completed At:</Typography>
              <Typography variant="body1">Thursday, June 8th, 2023</Typography>
            </div>

            <div className="right-data-kit">
              <Typography variant="body1">Completed In:</Typography>
              <Typography variant="body1">3 days</Typography>
            </div>
          </div>
        </Grid>
      </Box>
    </>
  );
};

export default TestInstructionsComp;
