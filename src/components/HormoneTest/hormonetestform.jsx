import React from 'react';
import { Typography, Accordion, AccordionSummary, AccordionDetails, Box, Radio, RadioGroup, FormControlLabel, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';


const HormoneTestForm = () => {
  return (
    <>
    <div style={{ marginTop: '20px', marginBottom: '20px' }}>
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography variant="body1">Introduction</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box>
          <Typography variant="h6" gutterBottom>
            Hormone test
          </Typography>
          <Typography variant="body1" gutterBottom>
            There are three main criteria that dictate when the test can be done:
          </Typography>
          <Typography variant="body1" gutterBottom>
            1: Length of your cycle – the test needs to be done 5 days post ovulation
          </Typography>
          <Typography variant="body1" gutterBottom>
            2: Preparation time prior to taking the samples – two days prior to the test there are foods and supplements to avoid
          </Typography>
          <Typography variant="body1" gutterBottom>
            3: Your availability to take the samples at the specific times required throughout the day
          </Typography>
        </Box>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography variant="body1">Length of your cycle</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box>
          <Typography variant="h6" gutterBottom>
            Length of your cycle - Calculate the next testing window in your cycle
          </Typography>
          <Typography variant="h6" gutterBottom>If you have a regular cycle:</Typography>
          <Typography variant="body1" gutterBottom>
            For women with a 28-day cycle, the test should be done between day 19-22 (day 1 is the 1st day of your
            menstruation). If the cycle is longer, e.g. 29 days, add one day – test between day 20-23. If the cycle is
            shorter, e.g. 27 days, remove one day – test between day 18-21. Adjust according to your cycle length.
          </Typography>
          <Typography variant="h6" gutterBottom>If you have an irregular cycle:</Typography>
          <Typography variant="body1" gutterBottom>
            You will need to use ovulation strips to ensure that you test at the right time. Ovulation strips can be
            purchased in most pharmacies as well as online. Use 1 ovulation test each morning starting on day 7 of your
            cycle (counting from the first day of flow) until you get the first faint positive result on an ovulation
            strip. This is considered day one, and you will aim to test between days 5 &amp; 7.
          </Typography>
          <Typography variant="h6" gutterBottom>If you are not menstruating:</Typography>
          <Typography variant="body1" gutterBottom>Testing can happen at any time of the month.</Typography>
          <Box sx={{ mt: 2 }}>
            <Typography variant="caption" gutterBottom>
              Testing Window Starts At: Monday, June 19th, 2023 at 12:00:00 AM
            </Typography>
          </Box>
        </Box>
      </AccordionDetails>
    </Accordion>
    <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography variant="body1">Preparation time prior to taking the samples</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <Typography variant="h6" gutterBottom>
              Preparation time prior to taking the samples
            </Typography>
            <Typography variant="h6" gutterBottom>
              Note that:
            </Typography>
            <Typography variant="body1" gutterBottom>
              It is best to postpone testing if you have had an unusually bad night of sleep. Therefore, avoid planning
              to test on the last day in the testing window as you may then need to wait a whole month. We suggest to aim
              for the 1st or 2nd day of your testing window. If bad sleep is the norm for you, then contact us to add the
              insomnia sample to your test (the insomnia test incurs an extra cost).
            </Typography>
            <Typography variant="h6" gutterBottom>
              For 48 hours prior to testing you will need to avoid:
            </Typography>
            <Typography variant="body1" gutterBottom>
              Foods: Avocado, banana, fava beans or too much of any one particular food
            </Typography>
            <Typography variant="body1" gutterBottom>
              Supplements: Tryrosine, l-Dopa, DLPA, Mucuna, Quercetin
            </Typography>
            <Typography variant="h6" gutterBottom>
              For 24 hours prior to testing you will also need to avoid:
            </Typography>
            <Typography variant="body1" gutterBottom>
              Drinks: No caffeine or alcohol day before and day of collection
            </Typography>
            <Typography variant="body1" gutterBottom>
              Exercise – no vigorous on day of collection
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1" id="demo-controlled-radio-buttons-group">
                Will you be able to prepare for two days prior to the 1st or maximum the 2nd day of your testing window?
              </Typography>
              <RadioGroup
                row
                aria-label="controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                defaultValue="Y"
              >
                <FormControlLabel
                  value="Y"
                  control={<Radio />}
                  label={
                    <>
                      <Typography variant="body1">Yes</Typography>
                    </>
                  }
                />
                <FormControlLabel
                  value="N"
                  control={<Radio />}
                  label={
                    <>
                      <Typography variant="body1">No</Typography>
                    </>
                  }
                />
              </RadioGroup>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography variant="body1">Your availability to take the samples</Typography>
      </AccordionSummary>
      <AccordionDetails>
      <Box>
          <Typography variant="h6" gutterBottom>
            Your availability to take the samples at the specific time required throughout the day
          </Typography>
          <Typography variant="h6" gutterBottom>
            Urine and saliva samples will need to be taken throughout the day. See below the collection times so that you
            can ensure you have the time to take the samples
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
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography variant="body1">Confirm sampling date</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box>
          <Typography variant="caption">
            <Box>
              <Typography variant="body1">
                Sampling Date: Monday, June 19th, 2023 at 5:30:00 AM
              </Typography>
            </Box>
          </Typography>
        </Box>
      </AccordionDetails>
    </Accordion>
    </div>
    </>    
  );
};

export default HormoneTestForm;
