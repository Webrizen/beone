import React from "react";
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
  Grid 
} from "@mui/material";
import {
  RadioButtonUnchecked,
  RadioButtonChecked,
  VideoLibrary,
} from "@mui/icons-material";

const TestInstructionsComp = () => {
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
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "5px" }}>
        <Tooltip title="Link to Hormone Test video"><Button variant="outlined" component={Link} href="#">
          <VideoLibrary />
        </Button></Tooltip>
        <br />
        <Tooltip title="Link to Metabolic Test"><Button variant="outlined" component={Link} href="#">
          <VideoLibrary />
        </Button></Tooltip>
        <br />
        <Tooltip title="Link to Thyroid Test"><Button variant="outlined" component={Link} href="#">
          <VideoLibrary />
        </Button></Tooltip>
        <br />
        <Tooltip title="Link to Immune Test"><Button variant="outlined" component={Link} href="#">
          <VideoLibrary />
        </Button></Tooltip>
      </Box>
      <br />
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
          You confirmed on that sampling of Metabolic test was successful. Great!!
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
        >You have not confirmed yet if your sampling went ok.
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
        >You have not confirmed yet if your sampling went ok.</Typography>
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
      <Box sx={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "right", paddingRight: "20px", marginBottom: "20px"}}><Button variant="contained" color="warning">
        Submit
      </Button></Box>

      {/* SHow This After Form Submit  */}
      <Box sx={{ p: 2, background: '#f5f5f5', borderRadius: '4px', border: '1px solid #ccc' }}>
      <Typography variant="body1" gutterBottom>
        Testing instructions data
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="body1">Hormone preparation confirmation date:</Typography>
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
              <Typography variant="body1">Metabolic preparation confirmation Date:</Typography>
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
              <Typography variant="body1">Hormone sample collect confirmation date:</Typography>
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
              <Typography variant="body1">Metabolic sample collect confirmation date:</Typography>
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
              <Typography variant="body1">Completed At:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" align="right">
                Thursday, May 25th, 2023
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="body1">Completed In:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" align="right">
                3 days
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
    </>
  );
};

export default TestInstructionsComp;
