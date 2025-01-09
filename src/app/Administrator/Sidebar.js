import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Store Management</h2>
      <ul className="sidebar-menu">
        <li>Dashboard</li>
        <li>My Sales</li>
        <li>Catalog</li>
        <li>Shipping & Pickup</li>
        <li>Settings</li>
        <li>Reports</li>
        <li>Sales Channels</li>
      </ul>
    </div>
  );
};

export default Sidebar;
