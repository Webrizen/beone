import React, { useState, useEffect, useContext } from 'react';
import { AccountCircle } from '@mui/icons-material';
import '../styles/dashboard.css';
import BackgroundImage from '../Assets/images/bg-login-01.png';
import RouteGuard from '../components/routeguard';
import TestInstructionsComp from '../components/TestInstructions/TestInstructions';
import InstructionsData from '../components/TestInstructions/instructionsData';
import {
  Typography,
  Divider,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import WidgetsIcon from '@mui/icons-material/Widgets';
import VerticalStepper from '../components/verticalstepper';
import Layout from '../components/Layout/layout';
import UserOrders from '../components/userOrders';
import { Avatar } from '@mui/material';
import Calendar from '../components/calendar';
import CurrOrderContext from '../utils/order_context';
// import CurrOrderContext from '../utils/order_context';
// import CurrOrderContext from '../utils/order_context';

const TestInstructions = () => {
  const { currOrder, setCurrOrder } = useContext(CurrOrderContext);
  const [instruction, setinstruction] = useState({ ...currOrder[3] });
  const [Planning, setPlanning] = useState({ ...currOrder[2] });
  useEffect(() => {
    setinstruction({ ...currOrder[3] });
    setPlanning({ ...currOrder[2] });
    // console.log("order from instructions", currOrder[3]);
    // console.log("instructions", instruction)
  }, [currOrder]);

  function ToggleLeftSideBar() {


    const LeftBar = document.getElementById('Left-Bar');
    if (LeftBar.style.transform == "translateX(0%)") {
      LeftBar.style.transform = "translateX(-200%)"
    } else {
      LeftBar.style.transform = "translateX(0%)"
    }
  }

  return (
    <>
      <Layout>
        <RouteGuard />
        <TestInstructionsComp data={instruction.data} planningData={Planning.data} />}
        {/* {instruction.status === "Done" ? <InstructionsData data={instruction.data} /> : <TestInstructionsComp data={instruction.data} planningData={Planning.data} />} */}
      </Layout >
    </>
  );
}

export default TestInstructions;
