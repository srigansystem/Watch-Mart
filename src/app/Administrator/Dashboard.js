"use client";
import React, { useState, useEffect, useCallback } from "react";
import Sidebar from "./Sidebar";
import Modal from "./Modal";
import { LineChart, PieChart } from "./Charts";
import { downloadCSV } from "./Utils";
import "./Dashboard.css";

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const [data, setData] = useState({
    orders: { notPaid: 10, needsShipping: 5 },
    fulfillment: { orders: 8 },
    overview: { visitors: 1200, productViews: 4500, ordersReceived: 50, revenue: 75000, abandonedCarts: 10000 },
    recovery: { emailsSent: 20, recoveredRevenue: 5000 },
  });
  const [loading, setLoading] = useState(false);
  const [notifications, setNotifications] = useState([]);

  // Simulate data update
  const simulateDataUpdate = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setData((prev) => ({
        orders: { notPaid: prev.orders.notPaid + 1, needsShipping: prev.orders.needsShipping + 1 },
        fulfillment: { orders: prev.fulfillment.orders + 2 },
        overview: {
          visitors: prev.overview.visitors + 100,
          productViews: prev.overview.productViews + 200,
          ordersReceived: prev.overview.ordersReceived + 5,
          revenue: prev.overview.revenue + 5000,
          abandonedCarts: prev.overview.abandonedCarts + 1000,
        },
        recovery: { emailsSent: prev.recovery.emailsSent + 2, recoveredRevenue: prev.recovery.recoveredRevenue + 1000 },
      }));
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const interval = setInterval(simulateDataUpdate, 3600000); // Auto-refresh every 60 mins
    return () => clearInterval(interval);
  }, [simulateDataUpdate]);

  // Handle theme toggle
  const toggleTheme = () => setDarkMode(!darkMode);

  // Handle notifications
  useEffect(() => {
    if (data.orders.notPaid > 15) {
      setNotifications((prev) => [...prev, "Warning: More than 15 unpaid orders!"]);
    }
  }, [data.orders]);

  // Handle Modal Opening
  const openModal = (title, content) => {
    setModalData({ title, content });
    setShowModal(true);
  };

  return (
    <div className={`admin-container ${darkMode ? "dark-mode" : "light-mode"}`}>
      <Sidebar />
      <div className="admin-content">
        <h1 className="admin-title">Dashboard</h1>
        <p>Greetings! Let's take a look at what's happening in your store right now.</p>

        {/* Theme Toggle Button */}
        <button className="theme-toggle-button" onClick={toggleTheme}>
          Toggle to {darkMode ? "Light" : "Dark"} Mode
        </button>

        {/* Notifications */}
        <div className="notifications">
          {notifications.map((notif, idx) => (
            <div key={idx} className="notification">{notif}</div>
          ))}
        </div>

        {/* Advanced Data Visualizations */}
        <div className="charts">
          <LineChart
            data={[
              { month: "Jan", revenue: 10000 },
              { month: "Feb", revenue: 12000 },
              { month: "Mar", revenue: 15000 },
            ]}
          />
          <PieChart data={{ paid: 10, unpaid: 15, shipped: 5 }} />
        </div>

        <div className="dashboard-cards">
          {/* Orders Card */}
          <div className="card" onClick={() => openModal("Orders", "More details about orders will be shown here.")}>
            <h3>Orders</h3>
            <p>Not Paid: <span className="highlight">{data.orders.notPaid}</span></p>
            <p>Needs to be Shipped: <span className="highlight">{data.orders.needsShipping}</span></p>
          </div>

          {/* Fulfillment Card */}
          <div className="card" onClick={() => openModal("Fulfillment", "Fulfillment details go here.")}>
            <h3>Fulfillment in Process</h3>
            <p>Orders: <span className="highlight">{data.fulfillment.orders}</span></p>
          </div>

          {/* Overview Card */}
          <div className="card" onClick={() => openModal("Overview", "Detailed overview can be viewed here.")}>
            <h3>Overview</h3>
            <p>Visitors: <span className="highlight">{data.overview.visitors}</span></p>
            <p>Revenue (INR): <span className="highlight">₹{data.overview.revenue}</span></p>
          </div>

          {/* Recovery Card */}
          <div className="card" onClick={() => openModal("Recovery", "Recovery statistics available.")}>
            <h3>Recovery</h3>
            <p>Emails Sent: <span className="highlight">{data.recovery.emailsSent}</span></p>
            <p>Recovered Revenue: <span className="highlight">₹{data.recovery.recoveredRevenue}</span></p>
          </div>
        </div>

        {/* Export Data Button */}
        <button className="export-button" onClick={() => downloadCSV([data.orders, data.recovery, data.overview])}>
          Export Data to CSV
        </button>

        {/* Loading Spinner */}
        {loading && <div>Updating data...</div>}

        {/* Modal for Data Details */}
        <Modal show={showModal} onClose={() => setShowModal(false)} title={modalData.title} content={modalData.content} />
      </div>
    </div>
  );
};

export default Dashboard;


