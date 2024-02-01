import React from 'react'
import '../Sidebar/style.css'
import { ButtonLogout } from '../Common/ButtonLogout/ButtonLogout';
import { UserProfile } from '../UserProfile/UserProfile';
export const Sidebar = () => {

    const userEmail = "john.doe@example.com";
    const userAvatarUrl = "path/to/avatar.jpg";
  return (
    <aside className="sidebar-container">
      <ul className='sidebar-profile'>
        <li>
          <UserProfile email={userEmail} avatarUrl={userAvatarUrl} />
        </li>
      </ul>

      <ul className="dashboard-menu">
        <li>Dashboard</li>
        <li>Analytics</li>
        <li>Settings</li>
      </ul>

      <ul className="logout-menu">
        <li><ButtonLogout /></li>
      </ul>
    </aside>
  )
}
