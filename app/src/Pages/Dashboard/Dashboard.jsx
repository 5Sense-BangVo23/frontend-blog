import React, { useEffect, useState, useRef } from "react";
import "../Dashboard/style.css";
import { TimeBar } from "../../Components/Common/TimeBar/TimeBar";
import { DashboardLayout } from "../../Components/Layouts/DashboardLayout";

export const Dashboard = () => {
  const [timeLeft, setTimeLeft] = useState(60);
  const [progress, setProgress] = useState(100);
  const [loginMessageVisible, setLoginMessageVisible] = useState(true);
  const [intervalActive, setIntervalActive] = useState(true);
  const [timeBarContainerVisible, setTimeBarContainerVisible] = useState(true);

  const intervalRef = useRef(null);

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newTime = prevTime - 1;
        const newProgress = newTime > 0 ? Math.max((60 - newTime) / 60 * 100, 0) : 0; 
  
        setProgress(newProgress);
        setLoginMessageVisible(newTime > 0);
        setIntervalActive(newTime > 0);
        setTimeBarContainerVisible(newTime > 0);
      });

      console.log("Interval running");
      console.log("timeLeft", timeLeft);
      console.log("progress", progress);
      console.log("loginMessageVisible", loginMessageVisible);
      console.log("intervalActive", intervalActive);
      console.log("intervalRef", intervalRef);
      console.log("intervalRef.current", intervalRef.current);
    }, 1000);
    console.log("Interval started");
  };
  

  useEffect(() => {
    startInterval();

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const handleAnimationEnd = () => {
    setIntervalActive(false);
  };

  return (
    <div>
        <DashboardLayout />
          <div className="dashboard-container">
            
          {intervalActive && (
            <TimeBar
              progress={progress}
              loginMessageVisible={loginMessageVisible}
              onAnimationEnd={handleAnimationEnd}
              showTimeBarContainer={timeBarContainerVisible}
            />
          )}
        
        </div>
    </div>
  );

};
