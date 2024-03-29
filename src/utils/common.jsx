import axios from "axios";
import { useContext } from "react";
import CurrOrderContext from "./order_context";
import { Navigate, redirect, useNavigate, } from "react-router-dom";
const getUserToken = () => {
    return localStorage.getItem("token");
};
export const BASE_API = process.env.REACT_APP_BASE_URL;

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

export const Set_order = (id, setCurrOrder, navigate) => {
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
        console.log("current order", id, response.data)
        setCurrOrder(response.data);
        localStorage.setItem("currOrder", id);
        // navigate("/order/404040/planning")
        // return <Navigate to='/order/404040/planning' />;
        let findFirstNotDone = false
        let foundData = {}
        for (let index = 0; index < steps.length; index++) {
            const element = steps[index];

            if (!findFirstNotDone) {
                if (element.status === "Pending") {
                    findFirstNotDone = true
                    foundData = steps[index - 1]
                    // alert("null2");
                } else {
                    // console.log(element);
                    // console.log("no redirecting");
                }
            }
        };
        if (!(foundData.stepId)) {
            // alert("null");
            // foundData.stepId = "welcome";
            navigate(`/order/${id}/resultsAndPersonalizedProtocol`);
        } else {
            // alert("null3");
            navigate(`/order/${id}/${foundData.stepId}`);

        }

    }).catch((error) => {
        console.log("set order api", error)
    })

}

export function toCamelCaseWithSpacing(str) {
    // Split the string by uppercase characters
    var words = str.split(/(?=[A-Z])/);

    // Capitalize the first character of each word
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }

    // Join the words with spaces in between
    return words.join(' ');
}
export const change_format = (val) => {
    // return
    // var mydate = new Date(val);
    // if (val.includes("T")) {
    // console.log(val.indexOf("T"));
    // console.log("val dta,", val);
    // var i = val.split("T");
    // val = val.substring(0, i);
    // }
    // alert("val" + val);
    // const time = val;
    // alert(time);

    const date = new Date(val);

    const options = {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
    };
    const formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
};
