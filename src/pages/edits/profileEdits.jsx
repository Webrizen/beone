import React, { useState, useEffect, useContext } from "react";
import Swal from "sweetalert2";
import "../../styles/profile.css";
import Calendar from "../../components/calendar";
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
import VerticalStepper from "../../components/verticalstepper";
import Navbar from "../../components/navbar";
import {
  AccountCircle,
  LocationOn,
  Phone,
  Email,
  Description,
  Edit,
} from "@mui/icons-material";
import RouteGuard from "../../components/routeguard";
import Layout from "../../components/Layout/layout";

// import BaseUrl from "../config/config";
import { BASE_API } from "../../utils/common";
import baseApi from "../../utils/common";
import UserContext from "../../utils/user_context";
const ProfileEdit = () => {
  const [open, setOpen] = useState(false);

  const { main_user, setmain_user } = useContext(UserContext);
  const [newValue, setnewValue] = useState({ ...main_user });

  useEffect(() => {
    // const { id, roles, shopifyCustomerId, ...rest_data } = main_user
    setnewValue({ ...main_user });
  }, [main_user]);
  useEffect(() => {
    console.log("checking data if chnaged", newValue);
    return () => {};
  }, [newValue]);

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

  // Dummy data
  var personalInformation = {};

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

  // const [user, setuser] = useState({});

  // useEffect(() => {
  //   setnewValue(main_user);
  //   console.log("new value", newValue);
  // }, [main_user]);

  const handleUpdate = () => {
    baseApi
      .put("/user", newValue)
      .then((response) => {
        console.log(response.data);
        setmain_user(newValue);
        setOpen(false);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "User Details Updated",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // useEffect(() => {
  //   baseApi
  //     .get("/user")
  //     .then((response) => {
  //       console.log(response.data);
  //       setuser(response.data);
  //       setnewValue(response.data);
  //       delete newValue.roles;
  //       delete newValue.profilePic;
  //       console.log(newValue);
  //       // personalInformation = response.data;
  //       console.log({ "new value": newValue });
  //       setProfilePicFile(localStorage.getItem("img"));
  //       console.log(profilePicFile);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

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
        <div className="two-flex">
          <div className="ico" onClick={ToggleLeftSideBar}>
            <MenuOpenIcon />
          </div>
          <div className="ico" onClick={ToggleRightSideBar}>
            <WidgetsIcon />
          </div>
        </div>
        <div className="main-dashboard">
          <div className="left-dashboard" id="Left-Bar">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Select Your Order
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Select Your Order"
              >
                <MenuItem value="Student">Student</MenuItem>
                <MenuItem value="Teacher">Teacher</MenuItem>
                <MenuItem value="Admin">Admin</MenuItem>
              </Select>
            </FormControl>
            <div className="yourOrders">
              <a href="#">Your Order</a>
              <ArrowForwardIosIcon />
            </div>
            <Divider sx={{ margin: "1rem 0" }} />
            <VerticalStepper />
          </div>
          <div className="middle-dashboard">
            <div className="Profile">
              <Container maxWidth="md" className="cont-MUI">
              <div>
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
                      </div>
              </Container>
            </div>
          </div>
          <div className="right-dashboard" id="Right-Bar">
            <Calendar />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProfileEdit;
