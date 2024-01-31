import React, { useState, useEffect } from 'react'
import './style.css'
export const Clock = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentTime(new Date());
        }, 1000);
    
        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
      }, []);


  return (
     <div className="clock-container">
      <div className="clock-text">{currentTime.toLocaleTimeString()}</div>
    </div>
  )
}
