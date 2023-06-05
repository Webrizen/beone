import React, { useState } from "react";
import "../styles/profile.css";
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
} from "@mui/material";
import Navbar from "../components/navbar";
import {
  AccountCircle,
  LocationOn,
  Phone,
  Email,
  Description,
  Edit
} from "@mui/icons-material";

const Profile = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
    setProfilePicFile(null);
  };

  const [profilePicFile, setProfilePicFile] = useState(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    setProfilePicFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  // Dummy data
  const personalInformation = {
    ageInYears: 25,
    createdAt: "2023-06-05T05:51:27.249Z",
    dob: "1998-01-01",
    email: "john.doe@example.com",
    firstName: "John",
    gender: "Male",
    height: 180,
    heightUnit: "cm",
    id: "123456",
    lastName: "Doe",
    middleName: "",
    mobileNumber: "+1 123-456-7890",
    profilePic: "path/to/profile-pic.jpg",
    roles: [
      {
        id: "role1",
        name: "User",
      },
    ],
    shopifyCustomerId: "shopify123",
    title: "Medical Patient",
    updatedAt: "2023-06-05T05:51:27.249Z",
    username: "johndoe",
    weight: 75,
    weightUnit: "kg",
  };

  return (
    <>
      <Navbar />
      <div className="Profile">
        <Container maxWidth="md" className="cont-MUI">
          <Paper elevation={3} sx={{ padding: "2rem" }} className="Bg-cont">
            <Grid
              container
              spacing={4}
              alignItems="center"
              className="BG-profile"
            >
              <Grid item className="GridProfile-MUI">
                <Avatar sx={{ width: 150, height: 150 }}>
                  {profilePicFile ? (
                    <img
                      src={URL.createObjectURL(profilePicFile)}
                      alt="Profile"
                    />
                  ) : (
                    <AccountCircle sx={{ width: "100%", height: "100%" }} />
                  )}
                </Avatar>
                <input
                  accept="image/*"
                  id="profile-pic-input"
                  type="file"
                  style={{ display: "none" }}
                  onChange={handleProfilePicChange}
                />
                <label htmlFor="profile-pic-input" className="Picedit">
                    <Edit/>
                </label>
              </Grid>
              <Grid item className="GridProfile-MUI">
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                  {personalInformation.firstName} {personalInformation.lastName}
                </Typography>
                <Typography variant="body1">
                  {personalInformation.title}
                </Typography>
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
                      <Grid container spacing={2} className="main-body-model">
                        <Grid item xs={12} sm={6}>
                          <TextField
                            label="First Name"
                            variant="outlined"
                            fullWidth
                            defaultValue="string"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            label="Last Name"
                            variant="outlined"
                            fullWidth
                            defaultValue="string"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            label="Middle Name"
                            variant="outlined"
                            fullWidth
                            defaultValue="string"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            label="Gender"
                            variant="outlined"
                            fullWidth
                            defaultValue="string"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            label="Date of Birth"
                            variant="outlined"
                            fullWidth
                            defaultValue="string"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            label="Age"
                            variant="outlined"
                            fullWidth
                            defaultValue={0}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            label="Title"
                            variant="outlined"
                            fullWidth
                            defaultValue="string"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            label="Height"
                            variant="outlined"
                            fullWidth
                            defaultValue={0}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            label="Height Unit"
                            variant="outlined"
                            fullWidth
                            defaultValue="string"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            label="Weight"
                            variant="outlined"
                            fullWidth
                            defaultValue={0}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            label="Weight Unit"
                            variant="outlined"
                            fullWidth
                            defaultValue="string"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            label="Mobile Number"
                            variant="outlined"
                            fullWidth
                            defaultValue="string"
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
                <Typography variant="h6" sx={{ marginBottom: "1rem" }}>
                  Personal Information
                </Typography>
                <List disablePadding>
                  <ListItem disablePadding>
                    <ListItemAvatar>
                      <Avatar>
                        <LocationOn />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Address"
                      secondary="123 Medical Street, City"
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemAvatar>
                      <Avatar>
                        <Phone />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Phone"
                      secondary={personalInformation.mobileNumber}
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemAvatar>
                      <Avatar>
                        <Email />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Email"
                      secondary={personalInformation.email}
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" sx={{ marginBottom: "1rem" }}>
                  Other Details
                </Typography>
                <List disablePadding>
                  <ListItem disablePadding>
                    <ListItemAvatar>
                      <Avatar>
                        <Description />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Age"
                      secondary={`${personalInformation.ageInYears} years`}
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemAvatar>
                      <Avatar>
                        <Description />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Gender"
                      secondary={personalInformation.gender}
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemAvatar>
                      <Avatar>
                        <Description />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Height"
                      secondary={`${personalInformation.height} ${personalInformation.heightUnit}`}
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemAvatar>
                      <Avatar>
                        <Description />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Weight"
                      secondary={`${personalInformation.weight} ${personalInformation.weightUnit}`}
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
