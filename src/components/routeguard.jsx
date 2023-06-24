import React from 'react';
import { Navigate } from 'react-router-dom';
const RouteGuard = () => {
    if (!localStorage.getItem("token")) {
        return <Navigate to="/login" />
        // console.log("not logined");
    }
    const id = localStorage.getItem("currOrder");
    document.title = "BeOne - " + id + " | " + window.location.pathname.split("/").pop();
}
export default RouteGuard;