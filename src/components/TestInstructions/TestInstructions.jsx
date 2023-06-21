import React, { useState } from "react";
import {
  Typography,
  Link, 
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
  Box,
  Tooltip,
  Grid,
  Alert,
  FormGroup,
  TextField,
  Checkbox,
} from "@mui/material";
import {
  RadioButtonUnchecked,
  RadioButtonChecked,
  VideoLibrary,
} from "@mui/icons-material";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

const TestInstructionsComp = () => {

  const [samplingConfirmed, setSamplingConfirmed] = useState("");
  const [contactNeeded, setContactNeeded] = useState(false);
  const [kitsResentNeeded, setKitsResentNeeded] = useState(false);

  const handleSamplingConfirmationChange = (event) => {
    setSamplingConfirmed(event.target.value);
    setContactNeeded(false);
    setKitsResentNeeded(false);
  };

  const handleContactNeededChange = (event) => {
    setContactNeeded(event.target.value === "yes");
  };

  const handleKitsResentNeededChange = (event) => {
    setKitsResentNeeded(event.target.value === "yes");
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
      <FormControl>
        <Typography variant="body1" color="primary">
          You have not confirmed yet if your sampling went ok.
        </Typography>
        <RadioGroup
          name="controlled-radio-buttons-group"
          value={samplingConfirmed}
          onChange={handleSamplingConfirmationChange}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>

        {/* Contact Form */}
        {samplingConfirmed === "no" && (
          <>
            <Typography variant="body1" color="primary">
              Do you need to contact us regarding the issue that you had?
            </Typography>
            <RadioGroup
              name="contact-needed"
              value={contactNeeded ? "yes" : "no"}
              onChange={handleContactNeededChange}
            >
              <Button component={Link} href="/contact" sx={{ width: 'min-content', whiteSpace: 'nowrap' }} color="success">
              Contact Us
            </Button>
            </RadioGroup>

            {/* Resent Kits Form */}
            <Typography variant="body1" color="primary">
              Will you require any of the kits re-sent to you?
            </Typography>
            <RadioGroup
              name="kits-resent-needed"
              value={kitsResentNeeded ? "yes" : "no"}
              onChange={handleKitsResentNeededChange}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
            {kitsResentNeeded && (
              <FormGroup>
                <Typography variant="body1" color="primary">
                  Which test kits will you require? (tick all the ones you need)
                </Typography>
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="Hormone Test"
                />
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="Metabolic Test"
                />
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="Thyroid Test"
                />
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="Immune Test"
                />
              </FormGroup>
            )}
          </>
        )}
      </FormControl>

      </div>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "right",
          paddingRight: "20px",
          marginBottom: "20px",
          marginTop: "-20px",
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
              width: "100%",
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
