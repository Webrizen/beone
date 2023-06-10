import React from 'react';
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  TextField,
  Button,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MetabolicForm = () => {
  const handleNextAccordion = () => {
    // Add logic here to handle the navigation to the next accordion
    // You can track the active accordion using state and update it accordingly
    // For example: setActiveAccordion(activeAccordion + 1);
  };

  return (
    <Box sx={{ flexGrow: 1, marginTop: '20px' }}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="body1">Introduction</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <Typography variant="h6" gutterBottom>
              Metabolic, immune and thyroid test
            </Typography>
            <Typography variant="body1" gutterBottom>
              There are three main criteria that dictate when the test can be done:
            </Typography>
            <Typography variant="body1" gutterBottom>
              1: Testing cannot happen while menstruating
            </Typography>
            <Typography variant="body1" gutterBottom>
              2: Preparation time prior to taking the samples – 2 days prior to the test there are foods and supplements to avoid
            </Typography>
            <Typography variant="body1" gutterBottom>
              3: Your availability to take the samples at specific times required throughout the day
            </Typography>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Button variant="contained" onClick={handleNextAccordion}>
              Next
            </Button>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="body1">Testing cannot happen while menstruating</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <Typography variant="h6" gutterBottom>
              Aim to schedule this test as close as possible to the previous one – ideally within the same week
            </Typography>
            <Typography variant="body1" gutterBottom>
              Please note that the sampling process will take two days and testing cannot happen during menstruation
            </Typography>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Button variant="contained" onClick={handleNextAccordion}>
              Next
            </Button>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="body1">Preparation time prior to taking the samples</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <Typography variant="h6" gutterBottom>
              For 48 hours prior to testing you will need to:
            </Typography>
            <Typography variant="body1" gutterBottom>
              - Discontinue all non-essential medication and supplements, including fortified food and drinks or meal replacement.
              <br />
              - Do not stop essential medications such as heart medication, thyroid hormones, etc.
              <br />
              - Avoid seafood.
              <br />
              - Continue with these food + supplement restrictions until all your samples are completely collected.
            </Typography>
            <Typography variant="body1" gutterBottom>
              If in any way unsure, please contact us 24 hours before the test.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Eat your usual diet, with the exception of any fortified foods/drinks and meal replacements.
              <br />
              Also avoid over consuming any single food.
              <br />
              Limit fluid intake to 2 litres of fluids for the 24 hours period before urine collection.
              <br />
              The night before the bloodspot sample collection, fast starting at least 8 hours prior to the morning collection.
            </Typography>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Button variant="contained" onClick={handleNextAccordion}>
              Next
            </Button>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="body1">Your availability to take the samples</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <Typography variant="h6" gutterBottom>
              Timings and requirements for day one and day two of testing
            </Typography>
            <Typography variant="h6" gutterBottom>Day 1</Typography>
            <Typography variant="body1" gutterBottom>
              Total time required: 30-45 minutes
              <br />
              Need to collect first morning urine and some drops of blood before eating or drinking anything.
              <br />
              Also, will need to collect each urination for the entire day (some patients prefer to do this when they can be at home).
              <br />
              You will need access to:
              <br />
              - A timer/clock and a camera (your phone will work for both)
              <br />
              - Warm water
              <br />
              - A freezer to prepare the freeze block needed on day 2
            </Typography>
            <Typography variant="h6" gutterBottom>Day 2</Typography>
            <Typography variant="body1" gutterBottom>
              Total time required: 35-40 minutes
              <br />
              Need to collect mouth swabs before eating, drinking, or brushing teeth and urine before eating or drinking.
              <br />
              Ensure that DHL has been booked to pick up the samples.
              <br />
              You will need access to a glass or a container to allow the swabs to dry without touching anything.
              <br />
              A freezer for at least 2 hours to ensure the samples are frozen before sending.
            </Typography>
            <Typography variant="caption" gutterBottom>
              Sampling Date: Tuesday, June 20th, 2023 at 5:30:00 AM
            </Typography>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Typography variant="body1">
              Enter the date you plan to start collecting your samples
            </Typography>
            <br />
            <TextField
              id="sampling-date"
              label="Sampling Date"
              placeholder="MM/DD/YYYY"
              variant="outlined"
              fullWidth
            />
          </Box>
          <Box sx={{ mt: 2 }}>
            <Button variant="contained" onClick={handleNextAccordion}>
              Next
            </Button>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default MetabolicForm;
