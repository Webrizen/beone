import React, { useState } from "react";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Box,
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
  Button,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

const HormoneTestForm = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const handleNextAccordion = () => {
    setActiveAccordion((prevAccordion) => prevAccordion + 1);
  };

  return (
    <>
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Accordion expanded={activeAccordion === 0}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            onClick={handleNextAccordion}
          >
            <Typography variant="body1">Introduction</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box>
              <Typography variant="h6" gutterBottom>
                Hormone test
              </Typography>
              <Typography variant="body1" gutterBottom>
                There are three main criteria that dictate when the test can be
                done:
              </Typography>
              <Typography variant="body1" gutterBottom>
                1: Length of your cycle – the test needs to be done 5 days post
                ovulation
              </Typography>
              <Typography variant="body1" gutterBottom>
                2: Preparation time prior to taking the samples – two days prior
                to the test there are foods and supplements to avoid
              </Typography>
              <Typography variant="body1" gutterBottom>
                3: Your availability to take the samples at the specific times
                required throughout the day
              </Typography>
              <Button variant="contained" onClick={handleNextAccordion}>
                Next
              </Button>
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={activeAccordion === 1}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            onClick={handleNextAccordion}
          >
            <Typography variant="body1">Length of your cycle</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box>
              <Typography variant="h6" gutterBottom>
                Length of your cycle - Calculate the next testing window in your
                cycle
              </Typography>
              <Typography variant="h6" gutterBottom>
                If you have a regular cycle:
              </Typography>
              <Typography variant="body1" gutterBottom>
                For women with a 28-day cycle, the test should be done between
                day 19-22 (day 1 is the 1st day of your menstruation). If the
                cycle is longer, e.g. 29 days, add one day – test between day
                20-23. If the cycle is shorter, e.g. 27 days, remove one day –
                test between day 18-21. Adjust according to your cycle length.
              </Typography>
              <Typography variant="h6" gutterBottom>
                If you have an irregular cycle:
              </Typography>
              <Typography variant="body1" gutterBottom>
                You will need to use ovulation strips to ensure that you test at
                the right time. Ovulation strips can be purchased in most
                pharmacies as well as online. Use 1 ovulation test each morning
                starting on day 7 of your cycle until a positive result is
                detected. Once a positive result is detected, the test should be
                done 5 days after the positive result. Please note: once you get
                a positive ovulation test result, it can take between 24 to 36
                hours for the egg to be released.
              </Typography>
              <Button variant="contained" onClick={handleNextAccordion}>
                Next
              </Button>
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={activeAccordion === 2}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            onClick={handleNextAccordion}
          >
            <Typography variant="body1">
              Preparation time prior to taking the samples
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box>
              <Typography variant="h6" gutterBottom>
                Foods and supplements to avoid
              </Typography>
              <Typography variant="body1" gutterBottom>
                In order to obtain accurate hormone test results, there are
                certain foods and supplements you should avoid in the 48 hours
                leading up to the test. These include:
              </Typography>
              <ul>
                <li>Caffeine</li>
                <li>Alcohol</li>
                <li>Supplements containing hormones</li>
                <li>Birth control pills</li>
              </ul>
              <Typography variant="body1" gutterBottom>
                Make sure to avoid these substances before taking the test. It's
                recommended to consult with your healthcare provider for
                specific instructions related to your situation.
              </Typography>
              <Button variant="contained" onClick={handleNextAccordion}>
                Next
              </Button>
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={activeAccordion === 3}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            onClick={handleNextAccordion}
          >
            <Typography variant="body1">
              Your availability to take the samples at the specific time
              required throughout the day
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box>
              <Typography variant="h6" gutterBottom>
                Available sampling times
              </Typography>
              <Typography variant="body1" gutterBottom>
                The hormone test requires samples to be taken at specific times
                throughout the day. Please indicate your availability for each
                time slot below:
              </Typography>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Time Slot</TableCell>
                      <TableCell align="center">Available</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>5:30 AM</TableCell>
                      <TableCell align="center">
                        <RadioGroup
                          row
                          aria-label="5:30 AM"
                          defaultValue="available"
                        >
                          <FormControlLabel
                            value="available"
                            control={<Radio />}
                            label="Available"
                          />
                          <FormControlLabel
                            value="unavailable"
                            control={<Radio />}
                            label="Unavailable"
                          />
                        </RadioGroup>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>11:00 AM</TableCell>
                      <TableCell align="center">
                        <RadioGroup
                          row
                          aria-label="11:00 AM"
                          defaultValue="available"
                        >
                          <FormControlLabel
                            value="available"
                            control={<Radio />}
                            label="Available"
                          />
                          <FormControlLabel
                            value="unavailable"
                            control={<Radio />}
                            label="Unavailable"
                          />
                        </RadioGroup>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>4:30 PM</TableCell>
                      <TableCell align="center">
                        <RadioGroup
                          row
                          aria-label="4:30 PM"
                          defaultValue="available"
                        >
                          <FormControlLabel
                            value="available"
                            control={<Radio />}
                            label="Available"
                          />
                          <FormControlLabel
                            value="unavailable"
                            control={<Radio />}
                            label="Unavailable"
                          />
                        </RadioGroup>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>9:00 PM</TableCell>
                      <TableCell align="center">
                        <RadioGroup
                          row
                          aria-label="9:00 PM"
                          defaultValue="available"
                        >
                          <FormControlLabel
                            value="available"
                            control={<Radio />}
                            label="Available"
                          />
                          <FormControlLabel
                            value="unavailable"
                            control={<Radio />}
                            label="Unavailable"
                          />
                        </RadioGroup>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              <Button variant="contained" onClick={handleNextAccordion}>
                Next
              </Button>
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={activeAccordion === 4}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="body1">Conclusion</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box>
              <Typography variant="body1" gutterBottom>
                Thank you for completing the hormone test form. Please review
                your answers before submitting the form. If everything looks
                correct, click the "Submit" button below.
              </Typography>
              <Button variant="contained" color="primary">
                Submit
              </Button>
            </Box>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};

export default HormoneTestForm;
