import React from "react";
import { useContext } from "react";
import CurrOrderContext from "./order_context";
import baseApi from "./common";
import { Navigate, useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import baseApi from "./common";
// const SetOrder = ({ id, setCurrOrder }) => {
//     // const navigate = useNavigate()
//     console.log("calling new setorder");
//     baseApi.get(`/dashboard/${id}`).then((response) => {
//         console.log(
//             "setting current order",
//             id,
//             response.data
//         );
//         const steps = response.data;

//         setCurrOrder(response.data);
//         localStorage.setItem("currOrder", id);
//         // navigate('/order/404040/planning');
//         return <Navigate to='/order/404040/planning' />;
//         // return "return data from setOrder";

//     }).catch((error) => {
//         console.log("set order api", error)
//     })

// }
const SetOrder = () => {
    return <Navigate to='/order/404040/planning' />;
}

export default SetOrder;