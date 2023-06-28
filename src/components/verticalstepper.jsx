import React, { useState, useEffect, useContext } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import UpdateIcon from "@mui/icons-material/Update";
import { Link, useParams } from "react-router-dom";
import CurrOrderContext from "../utils/order_context";
import Skeleton from "@mui/material/Skeleton";

const VerticalStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(false); // Error state
  const { currOrder, setCurrOrder } = useContext(CurrOrderContext);
  const params = useParams();

  useEffect(() => {
    // Simulating data fetching from the backend
    fetchData()
      .then((data) => {
        setCurrOrder(data);
        setLoading(false);
        setDataLoaded(true);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
        setDataLoaded(true);
      });
  }, [setCurrOrder]);

  const fetchData = () => {
    // Simulated async fetch
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = []; // Replace with your actual data retrieval logic
        if (data.length === 0) {
          reject("No data available");
        } else {
          resolve(data);
        }
      }, 2000); // Simulating a delay of 2 seconds
    });
  };

  const StepIcon = ({ id, step, completed }) => {
    if (completed) {
      return <CheckCircleIcon sx={{ color: "green" }} />;
    } else if (step) {
      return <UpdateIcon sx={{ color: "orange" }} />;
    } else {
      return (
        <LockIcon
          disabled={true}
          sx={{ color: "gray" }}
          style={{ cursor: "not-allowed" }}
        />
      );
    }
  };

  const formatStepId = (stepId) => {
    // Add spacing to the stepId label
    const formattedStepId = stepId.replace(/([A-Z])/g, " $1").trim();
    return formattedStepId;
  };

  return (
    <Box>
      <Stepper activeStep={activeStep} orientation="vertical">
        {currOrder.map((step, index) => (
          <Step disabled={true} key={step.stepId} completed={true} sx={{ whiteSpace: 'nowrap' }}>
            <StepLabel
              StepIconComponent={StepIcon}
              StepIconProps={{
                id: step.stepId,
                step: step.status === "Active",
                completed: step.status === "Done",
              }}
              className="StepBTN"
            >
              {step.status === "Pending" || step.status == null ? (
                <p style={{ textTransform: "capitalize" }}>
                  {formatStepId(step.stepId)}
                </p>
              ) : (
                <Link
                  disable={true}
                  to={`/order/${params.id}/${step.stepId}`}
                  style={{
                    textDecoration: "none",
                    fontSize: "14px",
                    textTransform: "capitalize",
                    whiteSpace: "nowrap",
                  }}
                >
                  {formatStepId(step.stepId)}
                </Link>
              )}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );


};

export default VerticalStepper;
