import React, { useState, useContext, useEffect } from 'react';
import Button from '@mui/material/Button';
import Navbar from './components/navbar';
import UserContext from './utils/user_context';
import './index.css';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Kitarrival from './pages/kitarrival';
import Planning from './pages/planning';
import Profile from './pages/profile';
import ErrorPage from './pages/error-page';
import baseApi from './utils/common';
import ProfileEdit from './pages/edits/profileEdits';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
function App() {
  const [main_user, setmain_user] = useState({});
  useEffect(() => {
    if (localStorage.getItem("token")) {
      baseApi
        .get("/user")
        .then((response) => {

          console.log("response data", response.data);
          setmain_user({ ...response.data });
          console.log({ "main_user": main_user });
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setmain_user({ firstName: "" });
    }
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/edit/profile",
      element: <ProfileEdit />,
    },
    {
      path: "/kit-arrival",
      element: <Kitarrival/>,
    },
    {
      path: "/planning",
      element: <Planning/>,
    },
    {
      path: "*",
      element: <ErrorPage />,
    }
  ]);
  return (
    <UserContext.Provider value={{ main_user, setmain_user }}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
}

export default App;
