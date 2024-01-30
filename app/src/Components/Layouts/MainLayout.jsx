import React from 'react';
import { Outlet } from 'react-router-dom';

const sidebarWidth = 350;

const mainLayoutStyle = {
  display: 'flex',
};

 const mainContentStyle = {
  flexGrow: 1,
  padding: '1rem',
  height: '100vh',
  width: 'calc(100% - ' + sidebarWidth + 'px)',
  background:'#fff'
};

export const MainLayout = () => {
  return (
    <div style={mainLayoutStyle}>

      <div style={mainContentStyle}>
        <Outlet />
      </div>
    </div>
  );
};


