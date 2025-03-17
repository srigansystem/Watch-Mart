"use client";
import React, { useState } from "react";
import "./ShippingPickup.css";

const ShippingPickup = () => {
  const [orders, setOrders] = useState([
    { id: 1, customer: "John Doe", status: "Pending", shippingMethod: "Standard", pickupLocation: "", date: "2023-01-10" },
    { id: 2, customer: "Jane Smith", status: "Shipped", shippingMethod: "Express", pickupLocation: "", date: "2023-01-12" },
    { id: 3, customer: "Alice Johnson", status: "Pending", shippingMethod: "Standard", pickupLocation: "", date: "2023-01-15" },
  ]);

  const [newShippingMethod, setNewShippingMethod] = useState("");
  const [newPickupLocation, setNewPickupLocation] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showHistory, setShowHistory] = useState(false);
  const [error, setError] = useState("");

  const handleUpdateStatus = (id, newStatus) => {
    setOrders(orders.map(order => order.id === id ? { ...order, status: newStatus } : order));
  };

  const filteredOrders = orders.filter(order => order.customer.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleSetPickupLocation = (id) => {
    if (!newPickupLocation) {
      setError("Pickup location cannot be empty.");
      return;
    }
    setOrders(orders.map(order => order.id === id ? { ...order, pickupLocation: newPickupLocation } : order));
    setNewPickupLocation("");
    setError("");
  };

  const handleSetShippingMethod = (id) => {
    if (!newShippingMethod) {
      setError("Shipping method must be selected.");
      return;
    }
    setOrders(orders.map(order => order.id === id ? { ...order, shippingMethod: newShippingMethod } : order));
    setNewShippingMethod("");
    setError("");
  };

  return (
    <div className="shipping-pickup-container">
      <h1>Shipping & Pickup Management</h1>
      <input
        type="text"
        placeholder="Search by customer name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <button onClick={() => setShowHistory(!showHistory)} className="toggle-history-button">
        {showHistory ? "Hide Order History" : "Show Order History"}
      </button>

      {error && <p className="error-message">{error}</p>}

      {showHistory && (
        <div className="order-history">
          <h2>Order History</h2>
          {filteredOrders.length === 0 ? (
            <p>No orders found.</p>
          ) : (
            filteredOrders.map(order => (
              <div key={order.id} className={`order-item ${selectedOrder === order.id ? 'selected' : ''}`} onClick={() => setSelectedOrder(order.id)}>
                <h3>Order ID: {order.id}</h3>
                <p>Customer: {order.customer}</p>
                <p>Status: {order.status}</p>
                <p>Shipping Method: {order.shippingMethod}</p>
                <p>Pickup Location: {order.pickupLocation || "N/A"}</p>
                <p>Date: {order.date}</p>
                <div className="action-buttons">
                  <button onClick={() => handleUpdateStatus(order.id, "Shipped")} className="status-button">Mark as Shipped</button>
                  <button onClick={() => handleUpdateStatus(order.id, "Delivered")} className="status-button">Mark as Delivered</button>
                </div>
                {selectedOrder === order.id && (
                  <div className="update-section">
                    <select onChange={(e) => setNewShippingMethod(e.target.value)} value={newShippingMethod} className="shipping-select">
                      <option value="">Select Shipping Method</option>
                      <option value="Standard">Standard</option>
                      <option value="Express">Express</option>
                      <option value="Next Day">Next Day</option>
                    </select>
                    <button onClick={() => handleSetShippingMethod(order.id)} className="update-button">Update Shipping Method</button>
                    <input
                      type="text"
                      placeholder="Pickup Location"
                      value={newPickupLocation}
                      onChange={(e) => setNewPickupLocation(e.target.value)}
                      className="pickup-input"
                    />
                    <button onClick={() => handleSetPickupLocation(order.id)} className="update-button">Set Pickup Location</button>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default ShippingPickup;
