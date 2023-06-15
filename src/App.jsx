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
import ImmunePic from './pages/immune-pic';
import Questionnaire from './pages/questionnaire';
import Results from './pages/results';
import Settings from './pages/settings';
import Lifestyle from './pages/lifestyle';
import baseApi, { Set_order } from './utils/common';
import ProfileEdit from './pages/edits/profileEdits';
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
  useSearchParams,
} from "react-router-dom";
import CurrOrderContext from './utils/order_context';
import TestInstructions from './pages/TestInstructions';
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
    console.log("params form app", params);
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
      path: "/settings",
      element: <Settings/>
    },
    {
      path: "/order/:id/welcome",
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
      path: "/order/:id/kitArrival",
      element: <Kitarrival />,
    },
    {
      path: "/order/:id/planning",
      element: <Planning />,
    },
    {
      path: "/order/:id/testingInstructions",
      element: <TestInstructions />,
    },
    {
      path: "/order/:id/immuneTestPictureUpload",
      element: <ImmunePic />,
    },
    {
      path: "/order/:id/healthQuestionnaire",
      element: <Questionnaire />,
    },
    {
      path: "/order/:id/beginLifestyleProgram",
      element: <Lifestyle />,
    },
    {
      path: "/order/:id/resultsAndPersonalizedProtocol",
      element: <Results />,
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
