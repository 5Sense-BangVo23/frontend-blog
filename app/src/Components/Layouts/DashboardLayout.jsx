import React from 'react'

export const DashboardLayout = ({ children }) => {
    return (
      <div className="dashboard-layout">
        <Header />
        <div className="dashboard-content">
          <Sidebar />
          <main>{children}</main>
        </div>
      </div>
    );
  };
