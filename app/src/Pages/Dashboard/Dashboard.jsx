import React, { useEffect, useState, useRef } from "react";
import "../Dashboard/style.css";

export const Dashboard = () => {
  const [timeLeft, setTimeLeft] = useState(60);
  const [progress, setProgress] = useState(100);
  const [loginMessageVisible, setLoginMessageVisible] = useState(true);
  const [intervalActive, setIntervalActive] = useState(true);

  const intervalRef = useRef(null);

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newTime = prevTime - 1;
        const newProgress = Math.max((60 - newTime) / 60 * 100, 0);
        setProgress(newProgress);
  
        if (newTime === 0) {
          clearInterval(intervalRef.current);
          setIntervalActive(false); // Set intervalActive to false when the interval completes
          setLoginMessageVisible(false);
        }
      });
    }, 1000);
  };

  useEffect(() => {
    startInterval();

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="dashboard-container">
      {intervalActive && (
        <div className={`time-bar-container`}>
          {loginMessageVisible && (
            <div className="login-message">Login Successfully!</div>
          )}
          <div className="time-bar" style={{ width: `${progress}%` }}></div>
        </div>
      )}
      <h2>Welcome to the Dashboard</h2>
    </div>
  );
};
