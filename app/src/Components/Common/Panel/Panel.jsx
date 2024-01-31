import React from 'react'
import './style.css'

export const Panel = ({ panelChilds }) => {
    return (
      <div className="panel-container">
        <h2 className="panel-title">Panel</h2>
        <p className="panel-content">
          Welcome to the beautiful and enhanced panel. Customize the content based on your needs.
        </p>
        {panelChilds && (
          <div className="panel-children-container">
            {panelChilds.map((child, index) => (
              <div
                key={index}
                className={`panel-child panel-position-${child.position} ${child.special ? 'special-panel' : ''}`}
              >
                {child.content}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };