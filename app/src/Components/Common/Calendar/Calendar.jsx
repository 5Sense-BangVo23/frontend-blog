import React from 'react'
import './style.css'

export const Calendar = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();

  return (
    <div className="calendar-container">
       <h2 className="calendar-title">
        Calendar <span className="current-date">- Current Date: {formattedDate}</span>
      </h2>
    </div>
  )
}
