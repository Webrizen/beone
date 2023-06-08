import React from 'react';
import '../styles/ProgressRing.css';

const ProgressRing = ({ percentage }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const progress = circumference - (percentage / 100) * circumference;

  return (
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
    </div>
  );
};

export default ProgressRing;
