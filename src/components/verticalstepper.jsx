import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import LockIcon from '@mui/icons-material/Lock';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Link, useParams } from 'react-router-dom';
import { useContext } from 'react';
import CurrOrderContext from '../utils/order_context';
import { useEffect } from 'react';

export default function VerticalStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const { currOrder, setCurrOrder } = useContext(CurrOrderContext);

  const StepIcon = ({ step, completed }) => {
    if (completed) {
      return <CheckCircleIcon sx={{ color: 'green' }} />;
    } else if (activeStep === step) {
      return <CheckCircleOutlineIcon sx={{ color: 'blue' }} />;
    } else {
      return <LockIcon sx={{ color: 'gray' }} />;
    }
  };

  const formatStepId = (stepId) => {
    // Add spacing to the stepId label
    const formattedStepId = stepId.replace(/([A-Z])/g, ' $1').trim();
    return formattedStepId;
  };

  const params = useParams();

  return (
    <Box>
      <Stepper activeStep={activeStep} orientation="vertical">
        {currOrder.map((step, index) => (
          <Step key={step.stepId} completed={true}>
            <StepLabel
              StepIconComponent={StepIcon}
              StepIconProps={{ step: step.stepId, completed: step.status === 'Done' }}
              className='StepBTN'
            >
              <Link
                to={`/order/${params.id}/${step.stepId}`}
                style={{ textDecoration: 'none', fontSize: '14px', textTransform: 'uppercase' }}
              >
                {formatStepId(step.stepId)}
              </Link>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
