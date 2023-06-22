import React, { useState, useContext, useEffect } from "react";
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
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
  Chip,
} from "@mui/material";
import {
  RadioButtonUnchecked,
  RadioButtonChecked,
  VideoLibrary,
} from "@mui/icons-material";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import CurrOrderContext from "../../utils/order_context";
import baseApi, { Set_order } from "../../utils/common";
import Swal from "sweetalert2";

const TestInstructionsComp = () => {

  const [samplingConfirmed, setSamplingConfirmed] = useState("");
  const [contactNeeded, setContactNeeded] = useState(false);
  const [kitsResentNeeded, setKitsResentNeeded] = useState(false);


  const { currOrder, setCurrOrder } = useContext(CurrOrderContext);
  const [finalData, setfinalData] = useState({
    data: {
      StandardPackageHormonePrep__customerConfirmationStatus: null,
      StandardPackageHormoneSampleCollect__customerConfirmationStatus: null,
      StandardPackageMetabolicPrep__customerConfirmationStatus: null,
      StandardPackageMetabolicSampleCollect__customerConfirmationStatus: null
    },
    overallSamplingStatus: null,
    overAllPrepStatus: null,
    reorderData: []
  });
  // const finalData = {
  //   data: {
  //     additionalProp1: null,
  //     additionalProp2: null,
  //     additionalProp3: null
  //   },
  //   overAllPrepStatus: null,
  //   overallSamplingStatus: null,
  //   reorderData: [

  //   ]
  // }

  const o_id = localStorage.getItem("currOrder");
  const handleSubmit = () => {
    baseApi
      .post(`/dashboard/${o_id}/complete-confirm-sampling-ok`, finalData)
      .then((response) => {
        console.log("after planning task", response.data);

        Set_order(o_id, setCurrOrder);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Confirm Sampling Done",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };


  const handleSamplingConfirmationChange = (event) => {
    setSamplingConfirmed(event.target.value);
    finalData.overallSamplingStatus = event.target.value;
    checkBtn();
    setfinalData({ ...finalData });
    setKitsResentNeeded(event.target.value === "N");
    if (event.target.value === "Y") {
      finalData.reorderData = [];
      setfinalData({ ...finalData });
    } else {
      finalData.reorderData = FreeKits;
      setfinalData({ ...finalData });
      console.log(finalData);
    }
    // setContactNeeded(false);
    // setKitsResentNeeded(false);
  };
  const [FreeKits, setFreeKits] = useState([]);
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  useEffect(() => {
    console.log(FreeKits);
    finalData.reorderData = FreeKits;
    setfinalData({ ...finalData });
    console.log(finalData);
  }, [FreeKits]);
  const handleChange = (event) => {
    console.log(event.target.value);
    setFreeKits(event.target.value);

    // const {
    //   target: { value },
    // } = event;
    // setFreeKits(
    //   // On autofill we get a stringified value.
    //   typeof value === 'string' ? value.split(',') : value,
    // );
    console.log(FreeKits);
  };
  const handleContactNeededChange = (event) => {
    setContactNeeded(event.target.value === "Y");
  };

  const handleKitsResentNeededChange = (event) => {
    setKitsResentNeeded(event.target.value === "Y");
  };
  const [form, setform] = useState(true);
  const checkBtn = () => {
    if (finalData.data.StandardPackageHormonePrep__customerConfirmationStatus == null || finalData.data.StandardPackageHormoneSampleCollect__customerConfirmationStatus == null || finalData.data.StandardPackageMetabolicPrep__customerConfirmationStatus == null || finalData.data.StandardPackageMetabolicSampleCollect__customerConfirmationStatus == null || finalData.overallSamplingStatus == null || finalData.overAllPrepStatus == null) {
      setform(true);
    } else {
      setform(false);
    }
  }

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
          <RadioGroup name="controlled-radio-buttons-group" onChange={(event) => {
            console.log("changed");
            const val = event.target.value;
            checkBtn();
            finalData.data.StandardPackageHormonePrep__customerConfirmationStatus = val;
            setfinalData({ ...finalData });
            console.log(finalData);
          }}>
            <FormControlLabel
              value="Y"
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
              value="N"
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
          <RadioGroup name="controlled-radio-buttons-group" onChange={(event) => {
            console.log("changed");
            const val = event.target.value;
            checkBtn();
            finalData.data.StandardPackageMetabolicPrep__customerConfirmationStatus = val;
            setfinalData({ ...finalData });
            console.log(finalData);
          }}>
            <FormControlLabel
              value="Y"
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
              value="N"
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
          <RadioGroup name="controlled-radio-buttons-group" onChange={(event) => {
            console.log("changed");
            const val = event.target.value;
            checkBtn();
            finalData.data.StandardPackageHormoneSampleCollect__customerConfirmationStatus = val;
            setfinalData({ ...finalData });
            console.log(finalData);
          }}>
            <FormControlLabel
              value="Y"
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
              value="N"
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
          <RadioGroup name="controlled-radio-buttons-group" onChange={(event) => {
            console.log("changed");
            const val = event.target.value;
            checkBtn();
            finalData.data.StandardPackageMetabolicSampleCollect__customerConfirmationStatus = val;
            setfinalData({ ...finalData });
            console.log(finalData);
          }}>
            <FormControlLabel
              value="Y"
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
              value="N"
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
            You Have Not confirmed yet if your preperation is done
          </Typography>
          <RadioGroup name="controlled-radio-buttons-group" onChange={(event) => {
            console.log("changed");
            const val = event.target.value;
            checkBtn();
            finalData.overAllPrepStatus = val;
            setfinalData({ ...finalData });
            console.log(finalData);
          }}>
            <FormControlLabel
              value="Y"
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
              value="N"
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
            <FormControlLabel value="Y" control={<Radio />} label="Yes" />
            <FormControlLabel value="N" control={<Radio />} label="No" />
          </RadioGroup>

          {/* Contact Form */}
          {samplingConfirmed === "N" && (
            <>
              {/* <Typography variant="body1" color="primary">
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
              </RadioGroup> */}

              {/* Resent Kits Form */}
              {/* <Typography variant="body1" color="primary">
                Will you require any of the kits re-sent to you?
              </Typography>
              <RadioGroup
                name="kits-resent-needed"
                value={kitsResentNeeded ? "yes" : "no"}
                onChange={handleKitsResentNeededChange}
              >
                <FormControlLabel value="Y" control={<Radio />} label="Yes" />
                <FormControlLabel value="N" control={<Radio />} label="No" />
              </RadioGroup> */}
              {kitsResentNeeded && (

                <>
                  <FormControl style={{ marginTop: "10px" }}>
                    <InputLabel id="demo-multiple-name-label">Select Multiple Kits</InputLabel>
                    <Select
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                      multiple
                      value={FreeKits}
                      onChange={handleChange}
                      input={<OutlinedInput label="Name" />}
                      MenuProps={MenuProps}
                      renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                          {selected.map((value) => (
                            <Chip key={value} label={value} />
                          ))}
                        </Box>
                      )}
                    >
                      {/* {names.map((name) => (
                        <MenuItem
                          key={name}
                          value={name}
                          style={getStyles(name, FreeKits, theme)}
                        >
                          {name}
                        </MenuItem>
                      ))} */}
                      <MenuItem key={1} value={"Hormone Test"} > Hormone Test</MenuItem>
                      <MenuItem key={2} value={"Metabloic Test"} > Metabolic Test</MenuItem>
                      <MenuItem key={3} value={"Thyroid Test"} > Thyroid Test</MenuItem>
                      <MenuItem key={4} value={"Immune Test"} > Immune Test</MenuItem>
                    </Select>
                  </FormControl>
                  {/* <FormGroup>
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
                  </FormGroup> */}
                </>
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
        <Button onClick={handleSubmit} disabled={form} variant="contained" color="warning">
          Submit
        </Button>
      </Box>

      {/* SHow This After Form Submit  */}
      <instructionsData />
    </>
  );
};

export default TestInstructionsComp;
