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
  Card,
  CardMedia,
  CardContent,
  Checkbox,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
  Divider,
  Chip,
} from "@mui/material";
import {
  RadioButtonUnchecked,
  RadioButtonChecked,
  Email,
} from "@mui/icons-material";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import CurrOrderContext from "../../utils/order_context";
import baseApi, { Set_order } from "../../utils/common";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const TestInstructionsComp = () => {
  const [samplingConfirmed, setSamplingConfirmed] = useState("");
  const [contactNeeded, setContactNeeded] = useState(false);
  const [kitsResentNeeded, setKitsResentNeeded] = useState(false);
  const navigate = useNavigate();

  const { currOrder, setCurrOrder } = useContext(CurrOrderContext);
  const [finalData, setfinalData] = useState({
    data: {
      StandardPackageHormonePrep__customerConfirmationStatus: null,
      StandardPackageHormoneSampleCollect__customerConfirmationStatus: null,
      StandardPackageMetabolicPrep__customerConfirmationStatus: null,
      StandardPackageMetabolicSampleCollect__customerConfirmationStatus: null,
    },
    overallSamplingStatus: null,
    overAllPrepStatus: null,
    reorderData: [],
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

        Set_order(o_id, setCurrOrder, navigate);
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
    if (
      finalData.data.StandardPackageHormonePrep__customerConfirmationStatus ==
        null ||
      finalData.data
        .StandardPackageHormoneSampleCollect__customerConfirmationStatus ==
        null ||
      finalData.data.StandardPackageMetabolicPrep__customerConfirmationStatus ==
        null ||
      finalData.data
        .StandardPackageMetabolicSampleCollect__customerConfirmationStatus ==
        null ||
      finalData.overallSamplingStatus == null ||
      finalData.overAllPrepStatus == null
    ) {
      setform(true);
    } else {
      setform(false);
    }
  };

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
    <Typography variant="h5" gutterBottom>Test Instructions</Typography>
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
          <Card style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'transparent' , boxShadow: 'none', borderRadius: '8px', height: '100%' }}>
            <CardMedia
              component="img"
              image={video.imageUrl}
              alt={video.title}
              style={{ height: '180px', width: '100%', objectFit: 'cover', borderRadius: '8px' }}
            />
            <CardContent sx={{ paddingTop: '10px', background: 'white', width: '100%', marginBottom: '0' }}>
              <Typography variant="body1" style={{fontWeight: 'bold', textAlign: 'center', fontSize: 'small' }}>
                <Link href='/' style={{ textDecoration: 'none' }}>{video.title}</Link>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
      <br />
      <div
        style={{ background: "#fff", borderRadius: "15px", padding: "20px" }}
      >
        <Typography variant="body1" gutterBottom>
          Answer Atleast One Question To Reach Next Step* <br />
          <span style={{ color: 'silver', fontSize: 'small', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '5px' }}><Email/>  Check Your Email For Reminders & Answering these questions.</span>
        </Typography>
        <Divider sx={{ margin: "1rem 0" }} />
        <FormControl>
          <Typography
            variant="body1"
            color="primary"
            id="demo-controlled-radio-buttons-group"
          >
           Are you prepared for the Harmone Test on {" {{hormoneSamplingDate1}} "} 
          </Typography>
          <RadioGroup
            name="controlled-radio-buttons-group"
            onChange={(event) => {
              console.log("changed");
              const val = event.target.value;
              checkBtn();
              finalData.data.StandardPackageHormonePrep__customerConfirmationStatus = val;
              setfinalData({ ...finalData });
              console.log(finalData);
            }}
          >
            <FormControlLabel
              value="Y"
              control={
                <Radio
                  color="success"
                  icon={<RadioButtonUnchecked />}
                  checkedIcon={<RadioButtonChecked />}
                  disabled={true}
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
                  disabled={true}
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
            Are you prepared for Matabolic test on {" {{metabolicSamplingDate1}} "}
          </Typography>
          <RadioGroup
            name="controlled-radio-buttons-group"
            onChange={(event) => {
              console.log("changed");
              const val = event.target.value;
              checkBtn();
              finalData.data.StandardPackageMetabolicPrep__customerConfirmationStatus = val;
              setfinalData({ ...finalData });
              console.log(finalData);
            }}
          >
            <FormControlLabel
              value="Y"
              control={
                <Radio
                  color="success"
                  icon={<RadioButtonUnchecked />}
                  checkedIcon={<RadioButtonChecked />}
                  disabled={true}
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
                  disabled={true}
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
            Did you undergo the Hormone test on { "Date" }
          </Typography>
          <RadioGroup
            name="controlled-radio-buttons-group"
            onChange={(event) => {
              console.log("changed");
              const val = event.target.value;
              checkBtn();
              finalData.data.StandardPackageHormoneSampleCollect__customerConfirmationStatus = val;
              setfinalData({ ...finalData });
              console.log(finalData);
            }}
          >
            <FormControlLabel
              value="Y"
              control={
                <Radio
                  color="success"
                  icon={<RadioButtonUnchecked />}
                  checkedIcon={<RadioButtonChecked />}
                  disabled={true}
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
                  disabled={true}
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
            Did you undergo Matabolic Test on {" Date "}
          </Typography>
          <RadioGroup
            name="controlled-radio-buttons-group"
            onChange={(event) => {
              console.log("changed");
              const val = event.target.value;
              checkBtn();
              finalData.data.StandardPackageMetabolicSampleCollect__customerConfirmationStatus = val;
              setfinalData({ ...finalData });
              console.log(finalData);
            }}
          >
            <FormControlLabel
              value="Y"
              control={
                <Radio
                  color="success"
                  icon={<RadioButtonUnchecked />}
                  checkedIcon={<RadioButtonChecked />}
                  disabled={true}
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
                  disabled={true}
                />
              }
              label="No"
            />
          </RadioGroup>
        </FormControl>
        <br />
        <FormControl>
          <Typography variant="body1" color="primary">
            Did your sampling went right?
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
              <Typography variant="body1" color="primary" sx={{ marginBottom: '10px' }}>
                Do you want to contact us regarding the issue that you had?
              </Typography>
              <RadioGroup
                name="contact-needed"
                value={contactNeeded ? "yes" : "no"}
                onChange={handleContactNeededChange}
                sx={{ display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center', marginBottom: '10px' }}
              >
                <Button variant="contained" component={Link} href="/contact" sx={{ width: 'min-content', whiteSpace: 'nowrap' }} color="success">
                  Yes
                </Button>
                <Button variant="text" sx={{ width: 'min-content', whiteSpace: 'nowrap' }} color="success">
                  No, Thanks
                </Button>
              </RadioGroup>
              </>
          )}
              {kitsResentNeeded && (
                <>
                <Typography variant="body1" color="primary" sx={{ marginBottom: '10px' }}>
                Do you need Kits Again?
              </Typography>
                  <FormControl style={{ marginTop: "10px" }}>
                    <InputLabel id="demo-multiple-name-label">
                      Select Multiple Kits
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                      multiple
                      value={FreeKits}
                      onChange={handleChange}
                      input={<OutlinedInput label="Name" />}
                      MenuProps={MenuProps}
                      renderValue={(selected) => (
                        <Box
                          sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}
                        >
                          {selected.map((value) => (
                            <Chip key={value} label={value} />
                          ))}
                        </Box>
                      )}
                    >
                      <MenuItem key={1} value={"Hormone Test"}>
                        {" "}
                        Hormone Test
                      </MenuItem>
                      <MenuItem key={2} value={"Metabloic Test"}>
                        {" "}
                        Metabolic Test
                      </MenuItem>
                      <MenuItem key={3} value={"Thyroid Test"}>
                        {" "}
                        Thyroid Test
                      </MenuItem>
                      <MenuItem key={4} value={"Immune Test"}>
                        {" "}
                        Immune Test
                      </MenuItem>
                    </Select>
                  </FormControl>
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
        <Button
          onClick={handleSubmit}
          disabled={form}
          variant="contained"
          color="warning"
        >
          Submit
        </Button>
      </Box>

      {/* SHow This After Form Submit  */}
      <instructionsData />
    </>
  );
};

export default TestInstructionsComp;
