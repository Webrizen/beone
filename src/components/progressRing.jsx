import React, { useEffect, useState } from 'react';
import '../styles/ProgressRing.css';
import baseApi from '../utils/common';
const ProgressRing = ({ orderId }) => {
  // const [n, setn] = useState(0);
  const [percentage, setpercentage] = useState(0);
  const [order, setorder] = useState([]);
  useEffect(() => {
    baseApi
      .get(`/dashboard/${orderId}`)
      .then((response) => {
        // console.log("dashboard data", response.data);
        setorder(response.data);

        const doneSteps = response.data.filter(
          (item) => item.status === 'Done'
        ).length;

        setpercentage((doneSteps / 8) * 100);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  // useEffect(() => {
  //   console.log(orderId, n);
  // }, [n]);
  // const percentage = 70;
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const progress = circumference - (percentage / 100) * circumference;

  return (
    <>
      <div className="progress-ring-container">
        <svg className="progress-ring" width="120" height="120">
          <circle
            className="progress-ring-circle"
            strokeWidth="10"
            fill="transparent"
            r={radius}
            cx="60"
            cy="60"
          />
          <circle
            className="progress-ring-progress"
            strokeWidth="10"
            fill="transparent"
            r={radius}
            cx="60"
            cy="60"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: progress,
            }}
          />
        </svg>
        <div className="progress-percentage">{percentage}%</div>
        {/* <h2>{orderId}</h2> */}
      </div>
      <h4>Order ID: {orderId}</h4>
    </>
  );
};

export default ProgressRing;
