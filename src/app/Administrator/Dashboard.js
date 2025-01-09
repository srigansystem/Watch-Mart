"use client";
import React from "react";
import Sidebar from "./Sidebar";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="admin-container">
      <Sidebar />
      <div className="admin-content">
        <h1 className="admin-title">Dashboard</h1>
        <p>Greetings! Let's take a look at what's happening in your store right now.</p>

        <div className="dashboard-cards">
          <div className="card">
            <h3>Orders</h3>
            <p>Not Paid: <span className="highlight">10</span></p>
            <p>Needs to be Shipped: <span className="highlight">5</span></p>
          </div>

          <div className="card">
            <h3>Fulfillment in Process</h3>
            <p>Orders: <span className="highlight">8</span></p>
          </div>

          <div className="card overview">
            <h3>Overview</h3>
            <p>Visitors: <span className="highlight">1200</span></p>
            <p>Product Views: <span className="highlight">4500</span></p>
            <p>Orders Received: <span className="highlight">50</span></p>
            <p>Revenue (INR): <span className="highlight">₹75,000</span></p>
            <p>Abandoned Carts: <span className="highlight">₹10,000</span></p>
          </div>

          <div className="card recovery">
            <h3>Recovery</h3>
            <p>Emails Sent: <span className="highlight">20</span></p>
            <p>Recovered Revenue: <span className="highlight">₹5,000</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
