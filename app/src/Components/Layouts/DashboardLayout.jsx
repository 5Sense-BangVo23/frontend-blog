import React from 'react'
import '../Layouts/style.css';
import { Sidebar } from '../Common/Sidebar/Sidebar';
import { Header } from '../Common/Header/Header';
import { Content } from '../Common/Content/Content';

export const DashboardLayout = () => {

  const mainContentStyle = {
    background:'#fff'
  }
  return (
    <div className="dashboard-layout" style={mainContentStyle}>
      <div className='left'>
         <div className="sidebar">{<Sidebar />}</div>
      </div>
      <div className='right'>
        <div className="header">{<Header />}</div>
        <div className="main-content">{<Content />}</div>
      </div>
    </div>
  );
};
