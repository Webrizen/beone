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
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Alert
} from "@mui/material";
import {
  RadioButtonUnchecked,
  RadioButtonChecked,
  Email,
} from "@mui/icons-material";
import CloseIcon from '@mui/icons-material/Close';
import CurrOrderContext from "../../utils/order_context";
import baseApi, { Set_order } from "../../utils/common";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const TestInstructionsComp = ({ data }) => {
  const [main_data, setmain_data] = useState({ ...data });
  useEffect(() => {
    setmain_data({ ...data });
    console.log("data form intrcutions", main_data);
    console.log(data);
  }, [data]);
  // const [samplingConfirmed, setSamplingConfirmed] = useState("");
  // const [contactNeeded, setContactNeeded] = useState(false);
  // const [kitsResentNeeded, setKitsResentNeeded] = useState(false);
  // const navigate = useNavigate();

  const { currOrder, setCurrOrder } = useContext(CurrOrderContext);
  // const [finalData, setfinalData] = useState({
  //   data: {
  //     StandardPackageHormonePrep__customerConfirmationStatus: null,
  //     StandardPackageHormoneSampleCollect__customerConfirmationStatus: null,
  //     StandardPackageMetabolicPrep__customerConfirmationStatus: null,
  //     StandardPackageMetabolicSampleCollect__customerConfirmationStatus: null,
  //   },
  //   overallSamplingStatus: null,
  //   overAllPrepStatus: null,
  //   reorderData: [],
  // });


  const o_id = localStorage.getItem("currOrder");
  // const handleSubmit = () => {
  //   baseApi
  //     .post(`/dashboard/${o_id}/complete-confirm-sampling-ok`, finalData)
  //     .then((response) => {
  //       console.log("after planning task", response.data);

  //       Set_order(o_id, setCurrOrder, navigate);
  //       Swal.fire({
  //         position: "center",
  //         icon: "success",
  //         title: "Confirm Sampling Done",
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  // const handleSamplingConfirmationChange = (event) => {
  //   setSamplingConfirmed(event.target.value);
  //   finalData.overallSamplingStatus = event.target.value;
  //   checkBtn();
  //   setfinalData({ ...finalData });
  //   setKitsResentNeeded(event.target.value === "N");
  //   if (event.target.value === "Y") {
  //     finalData.reorderData = [];
  //     setfinalData({ ...finalData });
  //   } else {
  //     finalData.reorderData = FreeKits;
  //     setfinalData({ ...finalData });
  //     console.log(finalData);
  //   }
  //   // setContactNeeded(false);
  //   // setKitsResentNeeded(false);
  // };
  // const [FreeKits, setFreeKits] = useState([]);
  // const ITEM_HEIGHT = 48;
  // const ITEM_PADDING_TOP = 8;
  // const MenuProps = {
  //   PaperProps: {
  //     style: {
  //       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
  //       width: 250,
  //     },
  //   },
  // };
  // useEffect(() => {
  //   console.log(FreeKits);
  //   finalData.reorderData = FreeKits;
  //   setfinalData({ ...finalData });
  //   console.log(finalData);
  // }, [FreeKits]);
  // const handleChange = (event) => {
  //   console.log(event.target.value);
  //   setFreeKits(event.target.value);
  //   console.log(FreeKits);
  // };
  // const handleContactNeededChange = (event) => {
  //   setContactNeeded(event.target.value === "Y");
  // };

  // const handleKitsResentNeededChange = (event) => {
  //   setKitsResentNeeded(event.target.value === "Y");
  // };
  // const [form, setform] = useState(true);
  // const checkBtn = () => {
  //   if (
  //     finalData.data.StandardPackageHormonePrep__customerConfirmationStatus ==
  //     null ||
  //     finalData.data
  //       .StandardPackageHormoneSampleCollect__customerConfirmationStatus ==
  //     null ||
  //     finalData.data.StandardPackageMetabolicPrep__customerConfirmationStatus ==
  //     null ||
  //     finalData.data
  //       .StandardPackageMetabolicSampleCollect__customerConfirmationStatus ==
  //     null ||
  //     finalData.overallSamplingStatus == null ||
  //     finalData.overAllPrepStatus == null
  //   ) {
  //     setform(true);
  //   } else {
  //     setform(false);
  //   }
  // };

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

  // const handleOptionChange = (index, value) => {
  //   const updatedData = [...data];
  //   updatedData[index].selectedOption = value;
  //   setData(updatedData);
  // };

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
            <Card style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'transparent', boxShadow: 'none', borderRadius: '8px', height: '100%' }}>
              <CardMedia
                component="img"
                image={video.imageUrl}
                alt={video.title}
                style={{ height: '180px', width: '100%', objectFit: 'cover', borderRadius: '8px' }}
              />
              <CardContent sx={{ paddingTop: '10px', background: 'white', width: '100%', marginBottom: '0' }}>
                <Typography variant="body1" style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 'small' }}>
                  <Link href='/' style={{ textDecoration: 'none' }}>{video.title}</Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <br />
      <div
        style={{ background: "#fff", borderRadius: "15px", padding: "20px", overflowX: 'scroll' }}
      >
        <Typography variant="body1" gutterBottom>
          Answer Atleast One Question To Reach Next Step* <br />
          <span style={{ color: 'silver', fontSize: 'small', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '5px' }}><Email />  Check Your Email For Reminders & Answering these questions.</span>
        </Typography>
        <Divider sx={{ margin: "1rem 0" }} />
        <Table>
          {/* <TableHead>
            <TableRow>
              <TableCell>Questions</TableCell>
              <TableCell>Options</TableCell>
            </TableRow>
          </TableHead> */}
          <TableBody>
            {/* {data1.map((item, index) => ( */}
            {!(main_data.StandardPackageHormonePrep__customerConfirmationStatus) ? <TableRow>
              <TableCell>You have not confirmed yet if you are prepared for the Hormone test on {"hormoneSamplingDate1"}
                Please check you email for a reminder. Select "Yes" or "No" depending on how your test preparation happened.
              </TableCell>
              <TableCell>
                <Alert severity="info" sx={{ width: 'min-content', whiteSpace: 'nowrap' }}>Check Your Email</Alert>
              </TableCell>
            </TableRow> : ""}
            {!(main_data.StandardPackageHormoneSampleCollect__customerConfirmationStatus) ? <TableRow>
              <TableCell>Your Hormone sampling date is on {"hormoneSamplingDate1"}. You can confirm only after that date.
                Please check you email for a reminder. Select "Yes" or "No" depending on how your test sampling happened.
              </TableCell>
              <TableCell>
                <Alert severity="info" sx={{ width: 'min-content', whiteSpace: 'nowrap' }}>Check Your Email</Alert>
              </TableCell>
            </TableRow> : ""}
            {!(main_data.StandardPackageMetabolicPrep__customerConfirmationStatus) ? <TableRow>
              <TableCell>You have not confirmed yet if you are prepared for the Metabolic test on {"metabolicSamplingDate1 "}
                Please check you email for a reminder. Select "Yes" or "No" depending on how your test preparation happened.
              </TableCell>
              <TableCell>
                <Alert severity="info" sx={{ width: 'min-content', whiteSpace: 'nowrap' }}>Check Your Email</Alert>
              </TableCell>
            </TableRow> : ""}
            {!(main_data.StandardPackageMetabolicSampleCollect__customerConfirmationStatus) ? <TableRow>
              <TableCell>Your Metabolic sampling date is on {"metabolicSamplingDate1"}. You can confirm only after that date.
                Please check you email for a reminder. Select "Yes" or "No" depending on how your test sampling happened.
              </TableCell>
              <TableCell>
                <Alert severity="info" sx={{ width: 'min-content', whiteSpace: 'nowrap' }}>Check Your Email</Alert>
              </TableCell>
            </TableRow> : ""}

          </TableBody>
        </Table>
      </div>
      {/* SHow This After Form Submit  */}
      <instructionsData />
    </>
  );
};

export default TestInstructionsComp;
