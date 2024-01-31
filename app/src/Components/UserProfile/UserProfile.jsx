import React from 'react'
import '../UserProfile/style.css'

export const UserProfile = ({ email, avatarUrl }) => {
    return (
      <div className="user-profile">
      
        <div className="user-info">
            <img src={avatarUrl} alt="User Avatar" className="avatar" />
            <span>{email}</span>
        </div>
      </div>
    );
  };