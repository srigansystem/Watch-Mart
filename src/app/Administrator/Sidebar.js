"use client";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar-container ${isCollapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        <h2 className="sidebar-title">{!isCollapsed ? "Admin Panel" : "AP"}</h2>
        <button className={`toggle-btn ${isCollapsed ? "collapsed" : "expanded"}`} onClick={toggleSidebar}>
  {isCollapsed ?"◁◁" : "▶▶"}
</button>
      </div>
      <div className="sidebar-menu">
        <NavLink to="/Administrator" className="sidebar-link">
          <span className="sidebar-icon">🏠</span>
          {!isCollapsed && <span className="sidebar-text">Dashboard</span>}
        </NavLink>
        <NavLink to="/my-sales" className="sidebar-link">
          <span className="sidebar-icon">📊</span>
          {!isCollapsed && <span className="sidebar-text">My Sales</span>}
        </NavLink>
        <NavLink to="/catalog" className="sidebar-link">
          <span className="sidebar-icon">📦</span>
          {!isCollapsed && <span className="sidebar-text">Catalog</span>}
        </NavLink>
        <NavLink to="/shipping-pickup" className="sidebar-link">
          <span className="sidebar-icon">🚚</span>
          {!isCollapsed && <span className="sidebar-text">Shipping & Pickup</span>}
        </NavLink>
        <NavLink to="/settings" className="sidebar-link">
          <span className="sidebar-icon">⚙️</span>
          {!isCollapsed && <span className="sidebar-text">Settings</span>}
        </NavLink>
        <NavLink to="/reports" className="sidebar-link">
          <span className="sidebar-icon">📄</span>
          {!isCollapsed && <span className="sidebar-text">Reports</span>}
        </NavLink>
        <NavLink to="/sales-channels" className="sidebar-link">
          <span className="sidebar-icon">🛒</span>
          {!isCollapsed && <span className="sidebar-text">Sales Channels</span>}
        </NavLink>
      </div>
      <div className="sidebar-footer">
        {!isCollapsed && <p>© 2025 SSAT, All rights reserved</p>}
      </div>
    </div>
  );
};

export default Sidebar;
