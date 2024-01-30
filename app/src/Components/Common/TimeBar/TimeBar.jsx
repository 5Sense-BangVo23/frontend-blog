import React from 'react'
import '../TimeBar/style.css'

export const TimeBar = ({ progress, loginMessageVisible, onAnimationEnd, showTimeBarContainer }) => {
    const timeBarContainerStyle = {
      display: showTimeBarContainer ? 'none' : 'block',
      display: 'block',
    };
  
    return (
      <div className="time-bar-container" style={timeBarContainerStyle}>
        {loginMessageVisible && (
          <div className="login-message" onAnimationEnd={onAnimationEnd}>
            Login Successfully!
          </div>
        )}
        <div className="time-bar" style={{ width: `${progress}%` }}></div>
      </div>
    );
  };