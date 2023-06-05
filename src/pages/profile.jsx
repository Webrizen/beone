import React, { useState } from 'react';
import '../styles/profile.css';
import {
  Container,
  Grid,
  Paper,
  Avatar,
  Typography,
  Divider,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Modal,
  Box,
  TextField,
} from '@mui/material';
import Navbar from '../components/navbar';
import { AccountCircle, LocationOn, Phone, Email, Description } from '@mui/icons-material';

const Profile = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <>
      <Navbar />
      <div className="Profile">
        <Container maxWidth="md" className='cont-MUI'>
          <Paper elevation={3} sx={{ padding: '2rem' }} className="Bg-cont">
            <Grid container spacing={4} alignItems="center" className="BG-profile">
              <Grid item className='GridProfile-MUI'>
                <Avatar sx={{ width: 150, height: 150 }}>
                  <AccountCircle sx={{ width: '100%', height: '100%' }} />
                </Avatar>
              </Grid>
              <Grid item className='GridProfile-MUI'>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                  John Doe
                </Typography>
                <Typography variant="body1">Medical Patient</Typography>
                <Button variant="text" onClick={handleOpen}>
                  Edit Profile
                </Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="model-model-title"
                  aria-describedby="model-model-description"
                >
                  <Box className="Model-box">
                    <Typography id="model-model-title" variant="h4" component="h2">
                      Edit Profile
                    </Typography>
                    <Divider sx={{ margin: '1rem 0' }} />
                    <form onSubmit={handleSubmit}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            label="Profile Name"
                            variant="outlined"
                            fullWidth
                            defaultValue="John Doe"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            label="Title"
                            variant="outlined"
                            fullWidth
                            defaultValue="Medical Patient"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            label="Address"
                            variant="outlined"
                            fullWidth
                            defaultValue="123 Medical Street, City"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            label="Profile Image"
                            variant="outlined"
                            fullWidth
                            type='file'
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            label="Phone"
                            variant="outlined"
                            fullWidth
                            defaultValue="+1 123-456-7890"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            defaultValue="john.doe@example.com"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            label="Diagnosis"
                            variant="outlined"
                            fullWidth
                            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            label="Treatment"
                            variant="outlined"
                            fullWidth
                            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            label="Medications"
                            variant="outlined"
                            fullWidth
                            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                          />
                        </Grid>
                      </Grid>
                      <Divider sx={{ margin: '0.5rem 0' }} />
                      <Button variant="contained" size="medium" color="success" type="submit">
                        Save Changes
                      </Button>
                    </form>
                  </Box>
                </Modal>
              </Grid>
            </Grid>
            <Grid container spacing={4} className="Data">
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" sx={{ marginBottom: '1rem' }}>
                  Personal Information
                </Typography>
                <List disablePadding>
                  <ListItem disablePadding>
                    <ListItemAvatar>
                      <Avatar>
                        <LocationOn />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Address" secondary="123 Medical Street, City" />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemAvatar>
                      <Avatar>
                        <Phone />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Phone" secondary="+1 123-456-7890" />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemAvatar>
                      <Avatar>
                        <Email />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Email" secondary="john.doe@example.com" />
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" sx={{ marginBottom: '1rem' }}>
                  Medical History
                </Typography>
                <List disablePadding>
                  <ListItem disablePadding>
                    <ListItemAvatar>
                      <Avatar>
                        <Description />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Diagnosis"
                      secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemAvatar>
                      <Avatar>
                        <Description />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Treatment"
                      secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemAvatar>
                      <Avatar>
                        <Description />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Medications"
                      secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </div>
    </>
  );
};

export default Profile;