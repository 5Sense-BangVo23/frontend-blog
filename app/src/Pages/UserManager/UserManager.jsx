import React from 'react'
import './style.css'

export const UserManager = () => {
  return (
    <div className="user-manager-container">
      <div className="dropdown">
        <button className="dropbtn">Actions</button>
        <div className="dropdown-content">
          <a href="#">View</a>
          <a href="#">Edit</a>
          <a href="#" className="avatar-icon">Icon Avatar</a>
        </div>
      </div>
    </div>
  )
}
