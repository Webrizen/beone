import React, { useState, useContext } from 'react';
import Button from '@mui/material/Button';
import Navbar from './components/navbar';
import UserContext from './utils/user_context';
import './index.css';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Profile from './pages/profile';
import ErrorPage from './pages/error-page';
// import UserContext from './utils/user_context';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
function App() {
  // const user = useContext(UserContext)
  const [main_user, setmain_user] = useState({ "name": "ziya zamir" });
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
      path: "*",
      element: <ErrorPage />,
    }
  ]);
  return (
    <UserContext.Provider value={{ main_user, setmain_user }}><RouterProvider router={router} /></UserContext.Provider>

  );
}

export default App;
