import React, { useState, useEffect, useContext } from "react";
import Swal from "sweetalert2";
import "../styles/profile.css";
import { Link } from "react-router-dom";
import Calendar from "../components/calendar";
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
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Modal,
  Box,
  TextField,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import WidgetsIcon from "@mui/icons-material/Widgets";
import VerticalStepper from "../components/verticalstepper";
import Navbar from "../components/navbar";
import UserOrders from "../components/userOrders";
import {
  AccountCircle,
  LocationOn,
  Phone,
  Email,
  Description,
  Edit,
} from "@mui/icons-material";
import RouteGuard from "../components/routeguard";
import Layout from "../components/Layout/layout";

// import BaseUrl from "../config/config";
import { BASE_API } from "../utils/common";
import baseApi from "../utils/common";
import UserContext from "../utils/user_context";

const Skeleton = () => (
  <div className="Skeleton">
    <div className="Skeleton-avatar" />
    <div className="Skeleton-title" />
    <div className="Skeleton-button" />
    <div className="Skeleton-info" />
  </div>
);

const Profile = () => {
  const [open, setOpen] = useState(false);

  const { main_user, setmain_user } = useContext(UserContext);
  // const [newValue, setnewValue] = useState({ ...main_user });

  useEffect(() => {
    // setnewValue({ ...main_user });
    setLoading(false);
  }, [main_user]);
  // useEffect(() => {
  //   console.log("checking data if chnaged", newValue);
  //   return () => {};
  // }, [newValue]);

  const handleOpen = () => {
    setOpen(true);
    setProfilePicFile(null);
  };

  const [profilePicFile, setProfilePicFile] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    baseApi
      .post("/files?purpose=PROFILE_PIC", formData)
      .then((response) => {
        console.log(response.data);
        main_user.profilePic = response.data.id;
        setmain_user({ ...main_user });
        setProfilePicFile(response.data.id);
        // localStorage.setItem("img", response.data.id);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "profile image updated",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error(error);
      });
    setProfilePicFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  function ToggleLeftSideBar() {
    const LeftBar = document.getElementById("Left-Bar");
    if (LeftBar.style.transform === "translateX(-200%)") {
      LeftBar.style.transform = "translateX(3%)";
    } else {
      LeftBar.style.transform = "translateX(-200%)";
    }
  }

  function ToggleRightSideBar() {
    const RightBar = document.getElementById("Right-Bar");
    if (RightBar.style.transform === "translateX(200%)") {
      RightBar.style.transform = "translateX(3%)";
    } else {
      RightBar.style.transform = "translateX(200%)";
    }
  }

  // const handleUpdate = () => {
  //   baseApi
  //     .put("/user", newValue)
  //     .then((response) => {
  //       console.log(response.data);
  //       setmain_user(newValue);
  //       setOpen(false);
  //       Swal.fire({
  //         position: "center",
  //         icon: "success",
  //         title: "User Details Updated",
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  const [age, setAge] = useState(""); //Calculatying Age :)
  const calculateAge = (dob) => {
    const currentDate = new Date();
    const birthDate = new Date(dob);
    const diffInMilliseconds = currentDate - birthDate;
    const ageDate = new Date(diffInMilliseconds);
    const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
    setAge(calculatedAge);
  };

  //Manage Units:
  const [weightUnit, setWeightUnit] = useState("Kg");
  const [heightUnit, setHeightUnit] = useState("cm");

  return (
    <>
      <Layout>
        <RouteGuard />
        {loading ? (
          <Skeleton />
        ) : (
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
                      {main_user.profilePic ? (
                        <img
                          className="profile-img"
                          src={`${BASE_API}/files/${main_user.profilePic}/serve`}
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
                      <Edit />
                    </label>
                  </Grid>
                  <Grid item className="GridProfile-MUI">
                    <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                      {main_user.title} {main_user.firstName}{" "}
                      {main_user.lastName}
                    </Typography>

                    <Link to="/edit/profile">
                      <Button variant="text">Edit Profile</Button>
                    </Link>
                    {/* <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="model-model-title"
                      aria-describedby="model-model-description"
                      className="CustomModel"
                    >
                      <Box className="Model-box">
                        <Typography
                          id="model-model-title"
                          variant="h4"
                          component="h2"
                        >
                          Edit Profile
                        </Typography>
                        <Divider sx={{ margin: "1rem 0" }} />
                        <form onSubmit={handleSubmit}>
                          <Grid
                            container
                            spacing={2}
                            className="main-body-model"
                          >
                            <Grid item xs={12} sm={6}>
                              <TextField
                                label="Title"
                                variant="outlined"
                                fullWidth
                                defaultValue={main_user.title}
                                onChange={(event) => {
                                  newValue.title = event.target.value;
                                  setnewValue({ ...newValue });
                                  console.log(newValue);
                                }}
                              />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <TextField
                                label="First Name"
                                variant="outlined"
                                fullWidth
                                defaultValue={main_user.firstName}
                                onChange={(event) => {
                                  newValue.firstName = event.target.value;
                                  setnewValue({ ...newValue });
                                  console.log(newValue);
                                }}
                              />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <TextField
                                label="Middle Name"
                                variant="outlined"
                                fullWidth
                                defaultValue={main_user.middleName}
                                onChange={(event) => {
                                  newValue.middleName = event.target.value;
                                  setnewValue({ ...newValue });
                                  console.log(newValue);
                                }}
                              />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <TextField
                                label="Last Name"
                                variant="outlined"
                                fullWidth
                                defaultValue={main_user.lastName}
                                onChange={(event) => {
                                  newValue.lastName = event.target.value;
                                  setnewValue({ ...newValue });
                                  console.log(newValue);
                                }}
                              />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                              <TextField
                                label="Gender"
                                variant="outlined"
                                fullWidth
                                defaultValue={main_user.gender}
                                onChange={(event) => {
                                  newValue.gender = event.target.value;
                                  setnewValue({ ...newValue });
                                  console.log(newValue);
                                }}
                              />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <TextField
                                label="Date of Birth"
                                variant="outlined"
                                fullWidth
                                type="date"
                                defaultValue={main_user.dob}
                                onChange={(event) => {
                                  const newDob = event.target.value;
                                  calculateAge(newDob); // Calculate the age based on the new DOB
                                  newValue.dob = newDob;
                                  setnewValue({ ...newValue });
                                }}
                              />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                              <TextField
                                label="Age"
                                variant="outlined"
                                fullWidth
                                value={age} // Use the age state as the value
                                onChange={(event) => {
                                  const newAge = event.target.value;
                                  setAge(newAge); // Update the age state
                                  newValue.ageInYears = newAge;
                                  setnewValue({ ...newValue });
                                }}
                              />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                              <TextField
                                label="Height"
                                variant="outlined"
                                fullWidth
                                defaultValue={main_user.height}
                                onChange={(event) => {
                                  newValue.height = event.target.value;
                                  setnewValue({ ...newValue });
                                  console.log(newValue);
                                }}
                              />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <TextField
                                label="Height Unit"
                                variant="outlined"
                                fullWidth
                                defaultValue={main_user.heightUnit}
                                onChange={(event) => {
                                  newValue.heightUnit = event.target.value;
                                  setnewValue({ ...newValue });
                                  console.log(newValue);
                                }}
                              />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <TextField
                                label="Weight"
                                variant="outlined"
                                fullWidth
                                defaultValue={main_user.weight}
                                onChange={(event) => {
                                  newValue.weight = event.target.value;
                                  setnewValue({ ...newValue });
                                  console.log(newValue);
                                }}
                              />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <TextField
                                label="Weight Unit"
                                variant="outlined"
                                fullWidth
                                defaultValue={main_user.weightUnit}
                                onChange={(event) => {
                                  newValue.weightUnit = event.target.value;
                                  setnewValue({ ...newValue });
                                  console.log(newValue);
                                }}
                              />
                            </Grid>
                            <Grid item xs={12}>
                              <TextField
                                label="Mobile Number"
                                variant="outlined"
                                fullWidth
                                defaultValue={main_user.mobileNumber}
                                onChange={(event) => {
                                  newValue.mobileNumber = event.target.value;
                                  setnewValue({ ...newValue });
                                  console.log(newValue);
                                }}
                              />
                            </Grid>
                          </Grid>
                          <Divider sx={{ margin: "0.5rem 0" }} />
                          <Button
                            variant="contained"
                            onClick={handleUpdate}
                            size="medium"
                            color="success"
                            type="submit"
                          >
                            Save Changes
                          </Button>
                        </form>
                      </Box>
                    </Modal> */}
                  </Grid>
                </Grid>
                <Grid container spacing={4} className="Data">
                  <Grid item xs={12} sm={6}>
                    <Typography variant="h6" sx={{ marginBottom: "1rem" }}>
                      Personal Information
                    </Typography>
                    <List disablePadding>
                      {/* <ListItem disablePadding>
                        <ListItemAvatar>
                          <Avatar>
                            <LocationOn />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary="Address"
                          secondary="123 Medical Street, City"
                        />
                      </ListItem> */}
                      <ListItem disablePadding>
                        <ListItemAvatar>
                          <Avatar>
                            <Phone />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary="Phone"
                          secondary={main_user.mobileNumber}
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
                          secondary={main_user.email}
                        />
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="h6" sx={{ marginBottom: "1rem" }}>
                      Other Details
                    </Typography>
                    <List disablePadding>
                      <Box>
                        <ListItem disablePadding>
                          <ListItemAvatar>
                            <Avatar>
                              <Description />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary="Age"
                            secondary={`${main_user.ageInYears} years`}
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
                            secondary={main_user.gender}
                          />
                        </ListItem>
                      </Box>
                      <ListItem disablePadding>
                        <ListItemAvatar>
                          <Avatar>
                            <Description />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary="Height"
                          secondary={`${main_user.height} ${main_user.heightUnit}`}
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
                          secondary={`${main_user.weight} ${main_user.weightUnit}`}
                        />
                      </ListItem>
                    </List>
                  </Grid>
                </Grid>
              </Paper>
            </Container>
          </div>
        )}
      </Layout>
    </>
  );
};

export default Profile;
