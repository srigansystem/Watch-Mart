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
    orders: {
      notPaid: 10,
      needsShipping: 5,
      ordersList: [
        { id: 1, customer: "John Doe", status: "Unpaid", amount: 500 },
        { id: 2, customer: "Jane Smith", status: "Needs Shipping", amount: 120 },
        { id: 3, customer: "Sam Wilson", status: "Paid", amount: 300 },
      ]
    },
    fulfillment: { orders: 8, tasks: [{ id: 1, status: "Pending" }, { id: 2, status: "Completed" }] },
    overview: { visitors: 1200, productViews: 4500, ordersReceived: 50, revenue: 75000, abandonedCarts: 10000 },
    recovery: { emailsSent: 20, recoveredRevenue: 5000, recoveryEmails: [{ email: "email1@domain.com", status: "Opened" }, { email: "email2@domain.com", status: "Clicked" }] },
  });
  const [loading, setLoading] = useState(false);
  const [notifications, setNotifications] = useState([]);

  // Simulate data update
  const simulateDataUpdate = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setData((prev) => ({
        orders: { notPaid: prev.orders.notPaid + 1, needsShipping: prev.orders.needsShipping + 1, ordersList: prev.orders.ordersList },
        fulfillment: { orders: prev.fulfillment.orders + 2, tasks: prev.fulfillment.tasks },
        overview: {
          visitors: prev.overview.visitors + 100,
          productViews: prev.overview.productViews + 200,
          ordersReceived: prev.overview.ordersReceived + 5,
          revenue: prev.overview.revenue + 5000,
          abandonedCarts: prev.overview.abandonedCarts + 1000,
        },
        recovery: { emailsSent: prev.recovery.emailsSent + 2, recoveredRevenue: prev.recovery.recoveredRevenue + 1000, recoveryEmails: prev.recovery.recoveryEmails },
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
  const openModal = (title, content, type) => {
    setModalData({ title, content, type });
    setShowModal(true);
  };

  // Handle Modal Close
  const closeModal = () => setShowModal(false);

  // Handle Order Action (mark as Paid or Shipped)
  const handleOrderAction = (orderId, action) => {
    setData((prevData) => ({
      ...prevData,
      orders: {
        ...prevData.orders,
        ordersList: prevData.orders.ordersList.map((order) =>
          order.id === orderId ? { ...order, status: action } : order
        ),
      },
    }));
  };

  return (
    <div className={`admin-container ${darkMode ? "dark-mode" : "light-mode"}`}>
      <div className="admin-content">
        <h1 className="admin-title">Dashboard</h1>
        <p>Greetings</p>

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
            data={[{ month: "Jan", revenue: 10000 }, { month: "Feb", revenue: 12000 }, { month: "Mar", revenue: 15000 }]}
          />
          <PieChart data={{ paid: 10, unpaid: 15, shipped: 5 }} />
        </div>

        <div className="dashboard-cards">
          {/* Orders Card */}
          <div className="card" onClick={() => openModal("Orders", "View and manage orders.", "orders")}>
            <h3>Orders</h3>
            <p>Not Paid: <span className="highlight">{data.orders.notPaid}</span></p>
            <p>Needs to be Shipped: <span className="highlight">{data.orders.needsShipping}</span></p>
          </div>

          {/* Fulfillment Card */}
          <div className="card" onClick={() => openModal("Fulfillment", "Manage fulfillment tasks.", "fulfillment")}>
            <h3>Fulfillment in Process</h3>
            <p>Orders: <span className="highlight">{data.fulfillment.orders}</span></p>
          </div>

          {/* Overview Card */}
          <div className="card" onClick={() => openModal("Overview", "View your store's overview.", "overview")}>
            <h3>Overview</h3>
            <p>Visitors: <span className="highlight">{data.overview.visitors}</span></p>
            <p>Revenue (INR): <span className="highlight">₹{data.overview.revenue}</span></p>
          </div>

          {/* Recovery Card */}
          <div className="card" onClick={() => openModal("Recovery", "Track recovery email statistics.", "recovery")}>
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
        {showModal && (
          <Modal
            show={showModal}
            onClose={closeModal}
            title={modalData.title}
            content={
              modalData.type === "orders" ? (
                <div>
                  <ul>
                    {data.orders.ordersList.map((order) => (
                      <li key={order.id}>
                        <p>Order ID: {order.id}</p>
                        <p>Customer: {order.customer}</p>
                        <p>Status: {order.status}</p>
                        <p>Amount: ₹{order.amount}</p>
                        {order.status === "Unpaid" && (
                          <button onClick={() => handleOrderAction(order.id, "Paid")}>Mark as Paid</button>
                        )}
                        {order.status === "Needs Shipping" && (
                          <button onClick={() => handleOrderAction(order.id, "Shipped")}>Mark as Shipped</button>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : modalData.type === "fulfillment" ? (
                <div>
                  <ul>
                    {data.fulfillment.tasks.map((task) => (
                      <li key={task.id}>{task.status}</li>
                    ))}
                  </ul>
                </div>
              ) : modalData.type === "overview" ? (
                <div>
                  <p>Visitors: {data.overview.visitors}</p>
                  <p>Revenue: ₹{data.overview.revenue}</p>
                </div>
              ) : (
                <div>
                  <ul>
                    {data.recovery.recoveryEmails.map((email, index) => (
                      <li key={index}>{email.email} - {email.status}</li>
                    ))}
                  </ul>
                </div>
              )
            }
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
