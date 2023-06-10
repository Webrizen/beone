import React, { useState, useContext, useEffect } from 'react';
import Button from '@mui/material/Button';
import Navbar from './components/navbar';
import UserContext from './utils/user_context';
import './index.css';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Profile from './pages/profile';
import ErrorPage from './pages/error-page';
import baseApi, { Set_order } from './utils/common';
import ProfileEdit from './pages/edits/profileEdits';
// import UserContext from './utils/user_context';
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import CurrOrderContext from './utils/order_context';
function App() {
  let params = useParams();
  const [main_user, setmain_user] = useState({});
  const [currOrder, setCurrOrder] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      baseApi
        .get("/user")
        .then((response) => {

          console.log("response data", response.data);
          setmain_user({ ...response.data });
          console.log({ "main_user": main_user });
          Set_order(localStorage.getItem("currOrder"), setCurrOrder)
        })
        .catch((error) => {
          console.error(error);
        });

      // alert(localStorage.getItem("currOrder"))
    } else {
      setmain_user({ firstName: "" });
    }
  }, []);


  useEffect(() => {
    // const params = useParams();
    console.log("params form app", params.id);
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
      path: "/dashboard/:id",
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
      path: "*",
      element: <ErrorPage />,
    }
  ]);
  return (
    <UserContext.Provider value={{ main_user, setmain_user }}>
      <CurrOrderContext.Provider value={{ currOrder, setCurrOrder }}>
        <RouterProvider router={router} />
      </CurrOrderContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
