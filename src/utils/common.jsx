import axios from "axios";
import { useContext } from "react";
import CurrOrderContext from "./order_context";
import { Navigate, redirect, useNavigate } from "react-router-dom";
const getUserToken = () => {
    return localStorage.getItem("token");
};
export const BASE_API = "https://2fe4-2405-201-4036-c084-d3d7-3544-417-8e9d.ngrok-free.app/api";

const baseApi = axios.create({
    //withCredentials: true
});

baseApi.interceptors.request.use((config) => {
    const token = getUserToken();
    config.baseURL = BASE_API
    if (token && typeof token === "string") {
        config.headers.authorization = `Bearer ${token}`; //Bearer 27|xbMKsmE55AT4K7WfU4EXO8mQVxi7hcDEDLSHjp5Z
    }

    return config;
},);

export default baseApi;

export const Set_order = (id, setCurrOrder) => {
    // const navigate = useNavigate();

    // const { currOrder, setCurrOrder } = useContext(CurrOrderContext);
    // const navigate = useHis;
    baseApi.get(`/dashboard/${id}`).then((response) => {
        console.log(
            "setting current order",
            id,
            response.data
        );
        const steps = response.data;
        // console.log("current order", id, response.data)
        setCurrOrder(response.data);
        localStorage.setItem("currOrder", id);
        // for (let index = 0; index < steps.length; index++) {
        //     const element = steps[index];
        //     if (element.status != "Done") {
        //         // createhas
        //         // history.push(`/order/${id}/planning`);
        //         console.log("redirecting");
        //         return "welcome";
        //         // return element.stepId;
        //         // break;
        //         // return <Navigate to='/order/404040/planning' />
        //         // window.location.href = `/order/${id}/planning`;
        //         // navigate(`/order/${id}/planning`);
        //     } else {
        //         console.log(element);
        //         console.log("no redirecting");
        //     }
        // }
        // return ("welcome");
        // steps.map(element => {

        // });
        // navigate(`/dashboard/${id}`);
        // return id;
        // response.data.map((order, index) => {
        //   if (order.status == "PENDING") {
        //     Set_order(order.orderId);
        //     break;
        //   }
        // })

    }).catch((error) => {
        console.log("set order api", error)
    })

}
