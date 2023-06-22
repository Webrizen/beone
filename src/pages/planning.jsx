import React, { useState, useEffect, useContext, useRef } from "react";
import { AccountCircle } from "@mui/icons-material";
import "../styles/dashboard.css";
import BackgroundImage from "../Assets/images/bg-login-01.png";
import RouteGuard from "../components/routeguard";
import {
  Typography,
  Divider,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Box,
} from "@mui/material";
import { Tab, Tabs } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import WidgetsIcon from "@mui/icons-material/Widgets";
import VerticalStepper from "../components/verticalstepper";
import Layout from "../components/Layout/layout";
import UserOrders from "../components/userOrders";
import UserContext from "../utils/user_context";
import baseApi, { BASE_API, Set_order } from "../utils/common";
import { Avatar } from "@mui/material";
import Calendar from "../components/calendar";
import ProgressRing from "../components/progressRing";
import KitArrivalData from "../components/KitArrival/KitArrivalData";
import HormoneTestData from "../components/HormoneTest/hormonetestdata";
// import HormoneTestForm from "../components/HormoneTest/hormonetestform";
import MetabolicData from "../components/Metabolic/MetabolicData";
import MetabolicForm from "../components/Metabolic/MetabolicForm";
import CurrOrderContext from "../utils/order_context";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Radio,
  RadioGroup,
  FormControlLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Swal from "sweetalert2";
import Hormone1Calendr from "../components/calendar/hormone1Calendr";
import EventsCalendar from "../components/calendar/eventsCalendar";
import Hormone2Calendr from "../components/calendar/hormone2Calendr";
import MetaBolicEvents from "../components/calendar/metabolicEvents";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const Planning = (props) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // const { currOrder, setCurrOrder } = useContext(CurrOrderContext);
  const today = new Date();
  const disabledDate = new Date();
  disabledDate.setDate(today.getDate() + 5);
  const disableNextDays = (date) => {
    const currentDate = new Date();
    const nextFiveDays = new Date();
    nextFiveDays.setDate(currentDate.getDate() + 5);
    return date < nextFiveDays;
  };
  const { currOrder, setCurrOrder } = useContext(CurrOrderContext);
  const change_format = (val) => {
    // return
    // var mydate = new Date(val);
    const date = new Date(val);

    const options = {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    };
    const formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
  };
  function dateFormat(input_D, format_D) {
    // input date parsed
    const date = new Date(input_D);

    //extracting parts of date string
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    //to replace month
    format_D = format_D.replace("MM", month.toString().padStart(2, "0"));

    //to replace year
    if (format_D.indexOf("yyyy") > -1) {
      format_D = format_D.replace("yyyy", year.toString());
    } else if (format_D.indexOf("yy") > -1) {
      format_D = format_D.replace("yy", year.toString().substr(2, 2));
    }

    //to replace day
    format_D = format_D.replace("dd", day.toString().padStart(2, "0"));

    return format_D;
  }

  const data = {
    testOption: "OPTION_1",
    hormoneTestSamplingDate: null,
    periodCycleLength: 0,
    hormoneTestWindowStartDate: null,
    metabolismTestSamplingDate: null,
    metabolismSkipReminder1: true,
    metabolismSkipReminder2: true,
    hormoneSkipReminder1: true,
    hormoneSkipReminder2: true,
  };
  const [FinalData, setFinalData] = useState(data);
  const [planning, setplanning] = useState({ ...currOrder[2] });
  useEffect(() => {
    setplanning({ ...currOrder[2] });
  }, [currOrder]);
  // console.log("planning page data", currOrder[2]);
  function ToggleLeftSideBar() {
    const LeftBar = document.getElementById("Left-Bar");
    if (LeftBar.style.transform == "translateX(0%)") {
      LeftBar.style.transform = "translateX(-200%)";
    } else {
      LeftBar.style.transform = "translateX(0%)";
    }
  }
  const o_id = localStorage.getItem("currOrder");
  const handlePlanning = () => {
    baseApi
      .post(`/dashboard/${o_id}/complete-planning-task`, FinalData)
      .then((response) => {
        console.log("after planning task", response.data);

        Set_order(o_id, setCurrOrder);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Planning task Done",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [activeTab, setactiveTab] = useState("1");
  const showTab = (n) => {
    if (activeTab == "1") {
      setactiveTab("2");
    } else {
      setactiveTab("1");
    }
  };

  const accordionRefs = useRef([]);
  const [expandedId, setExpandedId] = useState(0);

  const handleNextClick = (currentId) => {
    const nextId = currentId + 1;

    setExpandedId(nextId);
  };


  const [testingWindwoDate, settestingWindwoDate] = useState([]);
  const [HormoneSamplingDateEvents, setHormoneSamplingDateEvents] = useState([]);
  const [MetabolicEvents, setMetabolicEvents] = useState([]);
  useEffect(() => {
    console.log("HormoneSamplingDateEvents", HormoneSamplingDateEvents);
  }, [HormoneSamplingDateEvents]);
  return (
    <>
      <Layout>
        <RouteGuard />
        <div className="two-flex">
          <div className="ico" onClick={ToggleLeftSideBar}>
            <MenuOpenIcon />
          </div>
        </div>
        <div className="main-dashboard">
          <div className="left-dashboard" id="Left-Bar">
            <UserOrders />
            <VerticalStepper />
          </div>
          <div className="middle-dashboard">
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="Hormone" {...a11yProps(0)} />
                  <Tab label="Metabolic" {...a11yProps(1)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <Box>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} lg={6}>
                      {planning.status == "Done" ? (
                        <HormoneTestData data={planning.data} />
                      ) : (
                        ""
                      )}
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6}>
                      {planning.status == "Done" ? (
                        <EventsCalendar
                          key={1}
                          type={2}
                          events={planning.data}
                        />
                      ) : (
                        ""
                      )}
                    </Grid>
                  </Grid>

                  <div style={{ marginTop: "20px", marginBottom: "20px" }}>
                    <Accordion
                      expanded={expandedId === 0}
                      onChange={() => setExpandedId(0)}
                      ref={(ref) => (accordionRefs.current[0] = ref)}
                    >
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="body1">Introduction</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Box>
                          <Box>
                            <Typography variant="h6" gutterBottom>
                              Hormone test
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                              There are three main criteria that dictate when
                              the test can be done:
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                              1: Length of your cycle – the test needs to be
                              done 5 days post ovulation
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                              2: Preparation time prior to taking the samples –
                              two days prior to the test there are foods and
                              supplements to avoid
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                              3: Your availability to take the samples at the
                              specific times required throughout the day
                            </Typography>
                          </Box>
                          <Button
                            variant="contained"
                            onClick={() => handleNextClick(0)}
                          >
                            Next
                          </Button>
                        </Box>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion
                      expanded={expandedId === 1}
                      onChange={() => setExpandedId(1)}
                      ref={(ref) => (accordionRefs.current[1] = ref)}
                    >
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="body1">
                          Length of your cycle
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Box>
                          <Box>
                            <Typography variant="h6" gutterBottom>
                              Length of your cycle - Calculate the next testing
                              window in your cycle
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                              If you have a regular cycle:
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                              For women with a 28-day cycle, the test should be
                              done between day 19-22 (day 1 is the 1st day of
                              your menstruation). If the cycle is longer, e.g.
                              29 days, add one day – test between day 20-23. If
                              the cycle is shorter, e.g. 27 days, remove one day
                              – test between day 18-21. Adjust according to your
                              cycle length.
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                              If you have an irregular cycle:
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                              You will need to use ovulation strips to ensure
                              that you test at the right time. Ovulation strips
                              can be purchased in most pharmacies as well as
                              online. Use 1 ovulation test each morning starting
                              on day 7 of your cycle (counting from the first
                              day of flow) until you get the first faint
                              positive result on an ovulation strip. This is
                              considered day one, and you will aim to test
                              between days 5 &amp; 7.
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                              If you are not menstruating:
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                              Testing can happen at any time of the month.
                            </Typography>
                            <Box sx={{ mt: 2 }}>
                              {planning.status === "Done" ? (
                                <Typography variant="h6" gutterBottom>
                                  Testing Window Starts At:
                                  {change_format(
                                    planning.data
                                      .StandardPackageHormone__testDate1
                                  )}
                                </Typography>
                              ) : <Box sx={{ mt: 2 }}>
                                <Typography align="center" variant="h5">
                                  Enter when your testing window starts
                                </Typography>
                                <br />
                                <div className="calendar">
                                  <Hormone1Calendr
                                    finalData={FinalData}
                                    setData={setFinalData}
                                    testingWindwoDate={testingWindwoDate}
                                    settestingWindwoDate={settestingWindwoDate}
                                  />
                                </div>
                              </Box>}
                            </Box>

                          </Box>
                          <Button
                            variant="contained"
                            onClick={() => handleNextClick(1)}
                          >
                            Next
                          </Button>
                        </Box>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion
                      expanded={expandedId === 2}
                      onChange={() => setExpandedId(2)}
                      ref={(ref) => (accordionRefs.current[2] = ref)}
                    >
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="body1">
                          Preparation time prior to taking the samples
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Box>
                          <Box>
                            <Typography variant="h6" gutterBottom>
                              Preparation time prior to taking the samples
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                              Note that:
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                              It is best to postpone testing if you have had an
                              unusually bad night of sleep. Therefore, avoid
                              planning to test on the last day in the testing
                              window as you may then need to wait a whole month.
                              We suggest to aim for the 1st or 2nd day of your
                              testing window. If bad sleep is the norm for you,
                              then contact us to add the insomnia sample to your
                              test (the insomnia test incurs an extra cost).
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                              For 48 hours prior to testing you will need to
                              avoid:
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                              Foods: Avocado, banana, fava beans or too much of
                              any one particular food
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                              Supplements: Tryrosine, l-Dopa, DLPA, Mucuna,
                              Quercetin
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                              For 24 hours prior to testing you will also need
                              to avoid:
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                              Drinks: No caffeine or alcohol day before and day
                              of collection
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                              Exercise – no vigorous on day of collection
                            </Typography>
                            <Box sx={{ mt: 2 }}>
                              <Typography
                                variant="body1"
                                id="demo-controlled-radio-buttons-group"
                              >
                                Will you be able to prepare for two days prior
                                to the 1st or maximum the 2nd day of your
                                testing window?
                              </Typography>
                              <RadioGroup
                                row
                                aria-label="controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                defaultValue="Y"
                                onChange={(event) => {
                                  // FinalData.hormoneTestPrepConfirmation
                                }}
                              >
                                <FormControlLabel
                                  value="Y"
                                  control={<Radio />}
                                  label={
                                    <>
                                      <Typography variant="body1">
                                        Yes
                                      </Typography>
                                    </>
                                  }
                                />
                                <FormControlLabel
                                  value="N"
                                  control={<Radio />}
                                  label={
                                    <>
                                      <Typography variant="body1">
                                        No
                                      </Typography>
                                    </>
                                  }
                                />
                              </RadioGroup>
                            </Box>
                          </Box>
                          <Button
                            variant="contained"
                            onClick={() => handleNextClick(2)}
                          >
                            Next
                          </Button>
                        </Box>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion
                      expanded={expandedId === 3}
                      onChange={() => setExpandedId(3)}
                      ref={(ref) => (accordionRefs.current[3] = ref)}
                    >
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="body1">
                          Your availability to take the samples
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Box>
                          <Box>
                            <Typography variant="h6" gutterBottom>
                              Your availability to take the samples at the
                              specific time required throughout the day
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                              Urine and saliva samples will need to be taken
                              throughout the day. See below the collection times
                              so that you can ensure you have the time to take
                              the samples
                            </Typography>
                            <TableContainer component={Paper}>
                              <Table>
                                <TableHead>
                                  <TableRow>
                                    <TableCell>Sample</TableCell>
                                    <TableCell>Time</TableCell>
                                    <TableCell>Type</TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  <TableRow>
                                    <TableCell>1st sample</TableCell>
                                    <TableCell>Upon waking</TableCell>
                                    <TableCell>Saliva and urine</TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell>2nd sample</TableCell>
                                    <TableCell>30 mins after waking</TableCell>
                                    <TableCell>Saliva only</TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell>3rd sample</TableCell>
                                    <TableCell>60 mins after waking</TableCell>
                                    <TableCell>Saliva</TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell>4th sample</TableCell>
                                    <TableCell>2-3 hrs after waking</TableCell>
                                    <TableCell>Urine only</TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell>5th sample</TableCell>
                                    <TableCell>16:00-17:00</TableCell>
                                    <TableCell>Urine only</TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell>6th sample</TableCell>
                                    <TableCell>22:00-24:00</TableCell>
                                    <TableCell>Saliva and urine</TableCell>
                                  </TableRow>
                                </TableBody>
                              </Table>
                            </TableContainer>
                          </Box>
                          <Button
                            variant="contained"
                            onClick={() => handleNextClick(3)}
                          >
                            Next
                          </Button>
                        </Box>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion
                      expanded={expandedId === 4}
                      onChange={() => setExpandedId(4)}
                      ref={(ref) => (accordionRefs.current[4] = ref)}
                    >
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="body1">
                          Confirm sampling date
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Box>
                          <Box>
                            <Typography variant="h6" gutterBottom>
                              Confirm sampling date
                            </Typography>
                            <Box sx={{ mt: 2 }}>
                              {planning.status === "Done" ? (
                                <Typography variant="h6" gutterBottom>
                                  Sample Collecting Date:
                                  {change_format(
                                    planning.data.hormoneTestSamplingDate
                                  )}
                                </Typography>
                              ) : <Box sx={{ mt: 2 }}>
                                <Typography variant="body1">
                                  Enter the date you plan to start collecting your
                                  samples
                                </Typography>
                                <br />
                                <Hormone2Calendr
                                  key={1}
                                  type={"1"}
                                  finalData={FinalData}
                                  setData={setFinalData}
                                  HormoneSamplingDateEvents={HormoneSamplingDateEvents}
                                  setHormoneSamplingDateEvents={setHormoneSamplingDateEvents}
                                  MetabolicEvents={MetabolicEvents}
                                  setMetabolicEvents={setMetabolicEvents}
                                />
                              </Box>}
                            </Box>

                          </Box>
                          {/* <Button
                            variant="contained"
                            onClick={() => handleNextClick(4)}
                          >
                            Submit
                          </Button> */}
                        </Box>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </Box>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Box>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      {planning.status == "Done" ? (
                        <MetabolicData data={planning.data} />
                      ) : (
                        ""
                      )}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      {planning.status == "Done" ? (
                        <MetaBolicEvents key={2} events={planning.data} />
                      ) : (
                        ""
                      )}
                    </Grid>
                  </Grid>

                  <Box sx={{ flexGrow: 1, marginTop: "20px" }}>
                    <Accordion
                      expanded={expandedId === 0}
                      onChange={() => setExpandedId(0)}
                      ref={(ref) => (accordionRefs.current[0] = ref)}
                    >
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="body1">Introduction</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Box>
                          <Box>
                            <Typography variant="h6" gutterBottom>
                              Metabolic, immune and thyroid test
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                              There are three main criteria that dictate when
                              the test can be done:
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                              1: Testing cannot happen while menstruating
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                              2: Preparation time prior to taking the samples –
                              2 days prior to the test there are foods and
                              supplements to avoid
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                              3: Your availability to take the samples at
                              specific times required throughout the day
                            </Typography>
                          </Box>
                          <Button
                            variant="contained"
                            onClick={() => handleNextClick(0)}
                          >
                            Next
                          </Button>
                        </Box>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion
                      expanded={expandedId === 1}
                      onChange={() => setExpandedId(1)}
                      ref={(ref) => (accordionRefs.current[1] = ref)}
                    >
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="body1">
                          Testing cannot happen while menstruating
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Box>
                          <Box>
                            <Typography variant="h6" gutterBottom>
                              Aim to schedule this test as close as possible to
                              the previous one – ideally within the same week
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                              Please note that the sampling process will take
                              two days and testing cannot happen during
                              menstruation
                            </Typography>
                          </Box>
                          <Button
                            variant="contained"
                            onClick={() => handleNextClick(1)}
                          >
                            Next
                          </Button>
                        </Box>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion
                      expanded={expandedId === 2}
                      onChange={() => setExpandedId(2)}
                      ref={(ref) => (accordionRefs.current[2] = ref)}
                    >
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="body1">
                          Preparation time prior to taking the samples
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Box>
                          <Box>
                            <Typography variant="h6" gutterBottom>
                              For 48 hours prior to testing you will need to:
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                              - Discontinue all non-essential medication and
                              supplements, including fortified food and drinks
                              or meal replacement.
                              <br />
                              - Do not stop essential medications such as heart
                              medication, thyroid hormones, etc.
                              <br />
                              - Avoid seafood.
                              <br />- Continue with these food + supplement
                              restrictions until all your samples are completely
                              collected.
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                              If in any way unsure, please contact us 24 hours
                              before the test.
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                              Eat your usual diet, with the exception of any
                              fortified foods/drinks and meal replacements.
                              <br />
                              Also avoid over consuming any single food.
                              <br />
                              Limit fluid intake to 2 litres of fluids for the
                              24 hours period before urine collection.
                              <br />
                              The night before the bloodspot sample collection,
                              fast starting at least 8 hours prior to the
                              morning collection.
                            </Typography>
                          </Box>
                          <Button
                            variant="contained"
                            onClick={() => handleNextClick(0)}
                          >
                            Next
                          </Button>
                        </Box>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion
                      expanded={expandedId === 3}
                      onChange={() => setExpandedId(3)}
                      ref={(ref) => (accordionRefs.current[3] = ref)}
                    >
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="body1">Your availability to take the samples</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Box>
                          <Box>
                            <Typography variant="h6" gutterBottom>
                              Timings and requirements for day one and day two of
                              testing
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                              Day 1
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                              Total time required: 30-45 minutes
                              <br />
                              Need to collect first morning urine and some drops
                              of blood before eating or drinking anything.
                              <br />
                              Also, will need to collect each urination for the
                              entire day (some patients prefer to do this when
                              they can be at home).
                              <br />
                              You will need access to:
                              <br />
                              - A timer/clock and a camera (your phone will work
                              for both)
                              <br />
                              - Warm water
                              <br />- A freezer to prepare the freeze block needed
                              on day 2
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                              Day 2
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                              Total time required: 35-40 minutes
                              <br />
                              Need to collect mouth swabs before eating, drinking,
                              or brushing teeth and urine before eating or
                              drinking.
                              <br />
                              Ensure that DHL has been booked to pick up the
                              samples.
                              <br />
                              You will need access to a glass or a container to
                              allow the swabs to dry without touching anything.
                              <br />A freezer for at least 2 hours to ensure the
                              samples are frozen before sending.
                            </Typography>
                            {planning.status == "Done" ? (
                              <Typography variant="h6" gutterBottom>
                                Sampling Date:{" "}
                                {change_format(planning.data.metabolicTestDate)}
                              </Typography>
                            ) : <Box sx={{ mt: 2 }}>
                              <Typography variant="body1">
                                Considering your menstruation, preparation and
                                sampling requirements, Confirm sampling date
                              </Typography>
                              <br />
                              <Hormone2Calendr
                                key={2}
                                type={"2"}
                                finalData={FinalData}
                                setData={setFinalData}
                                HormoneSamplingDateEvents={HormoneSamplingDateEvents}
                                setHormoneSamplingDateEvents={setHormoneSamplingDateEvents}
                                MetabolicEvents={MetabolicEvents}
                                setMetabolicEvents={setMetabolicEvents}
                              />
                            </Box>}
                          </Box>

                          <Box sx={{ mt: 2 }}>
                            {planning.status == "Done" ? (
                              ""
                            ) : (
                              <Button
                                onClick={handlePlanning}
                                disabled={
                                  !(
                                    FinalData.hormoneTestSamplingDate != null &&
                                    FinalData.hormoneTestWindowStartDate !=
                                    null &&
                                    FinalData.metabolismTestSamplingDate != null
                                  )
                                }
                                variant="contained"
                              >
                                Submit
                              </Button>
                            )}
                          </Box>
                        </Box>
                      </AccordionDetails>
                    </Accordion>
                  </Box>
                </Box>
              </TabPanel>
            </Box>
            <Box>
              {/* <Tab label="Hormone Test" onClick={showTab(1)} />
              <Tab label="Metabolic Data" onClick={showTab(2)} /> */}
              {/* <button onClick={showTab}>hormone test</button>
              <button onClick={showTab}>metabolic test</button> */}
            </Box>
            <br />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Planning;
