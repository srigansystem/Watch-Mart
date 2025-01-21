"use client";
import React, { useState } from "react";
import "./MySales.css";

const MySales = () => {
  const [globalSearchTerm, setGlobalSearchTerm] = useState("");
  const [cartSearchTerm, setCartSearchTerm] = useState("");
  const [dateRange, setDateRange] = useState({ from: "", to: "" });
  const [paymentMethod, setPaymentMethod] = useState("");
  const [shippingMethod, setShippingMethod] = useState("");

  // Sample Data
  const abandonedCarts = [
    {
      id: 1,
      item: "Watch A",
      reason: "Left site",
      customer: "John Doe",
      date: "2023-01-10",
      paymentMethod: "Credit Card",
      shippingMethod: "Standard",
    },
    {
      id: 2,
      item: "Watch B",
      reason: "No payment method",
      customer: "Jane Smith",
      date: "2023-01-15",
      paymentMethod: "PayPal",
      shippingMethod: "Express",
    },
  ];

  const orders = [
    { id: 1, item: "Watch C", customer: "Alice Brown", date: "2023-01-12", status: "Shipped" },
    { id: 2, item: "Watch D", customer: "Bob Johnson", date: "2023-01-20", status: "Pending" },
  ];

  const customers = [
    { id: 1, name: "John Doe", email: "john@example.com", phone: "123-456-7890" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "987-654-3210" },
  ];

  // Dashboard Stats
  const totalAbandonedCarts = abandonedCarts.length;
  const totalOrders = orders.length;
  const totalCustomers = customers.length;
  const totalRedeemedSales = 0;

  // Filter Logic
  const filteredCarts = abandonedCarts.filter((cart) => {
    const matchesSearch = cart.item.toLowerCase().includes(cartSearchTerm.toLowerCase()) ||
                          cart.customer.toLowerCase().includes(cartSearchTerm.toLowerCase());

    const matchesDate =
      (!dateRange.from || new Date(cart.date) >= new Date(dateRange.from)) &&
      (!dateRange.to || new Date(cart.date) <= new Date(dateRange.to));

    const matchesPayment =
      !paymentMethod || cart.paymentMethod === paymentMethod;

    const matchesShipping =
      !shippingMethod || cart.shippingMethod === shippingMethod;

    return matchesSearch && matchesDate && matchesPayment && matchesShipping;
  });

  const filteredOrders = orders.filter(order => 
    order.item.toLowerCase().includes(globalSearchTerm.toLowerCase()) ||
    order.customer.toLowerCase().includes(globalSearchTerm.toLowerCase())
  );

  const filteredCustomers = customers.filter(customer => 
    customer.name.toLowerCase().includes(globalSearchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(globalSearchTerm.toLowerCase())
  );

  // Handle Cart Click
  const handleCartClick = (cart) => {
    alert(`Details for ${cart.item}:\nCustomer: ${cart.customer}\nReason: ${cart.reason}`);
  };

  return (
    <div className="my-sales-container">
      <header className="sales-header">
        <h1>My Sales</h1>
        <input
          type="text"
          placeholder="Search all containers..."
          value={globalSearchTerm}
          onChange={(e) => setGlobalSearchTerm(e.target.value)}
        />
      </header>

      {/* Abandoned Carts Container */}
      <div className="container abandoned-carts-container">
        <h2>Abandoned Carts</h2>
        
        {/* Dashboard */}
        <div className="dashboard">
          <div className="dashboard-item">
            <h3>Total Abandoned Carts</h3>
            <p>{totalAbandonedCarts}</p>
          </div>
          <div className="dashboard-item">
            <h3>Total Redeemed Sales</h3>
            <p>₹{totalRedeemedSales.toFixed(2)}</p>
          </div>
          <div className="dashboard-item">
            <h3>Automatic Recovery Emails</h3>
            <p>Enabled</p>
          </div>
        </div>

        {/* Filter and Search Bar for Abandoned Carts */}
        <div className="filter-search-container">
          <div className="filter-section">
            <label>Date:</label>
            <input
              type="date"
              value={dateRange.from}
              onChange={(e) => setDateRange({ ...dateRange, from: e.target.value })}
            />
            <input
              type="date"
              value={dateRange.to}
              onChange={(e) => setDateRange({ ...dateRange, to: e.target.value })}
            />
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="">Payment Method</option>
              <option value="Credit Card">Credit Card</option>
              <option value="PayPal">PayPal</option>
            </select>
            <select
              value={shippingMethod}
              onChange={(e) => setShippingMethod(e.target.value)}
            >
              <option value="">Shipping Method</option>
              <option value="Standard">Standard</option>
              <option value="Express">Express</option>
            </select>
          </div>

          <input
            type="text"
            placeholder="Search by cart item, customer name, etc."
            value={cartSearchTerm}
            onChange={(e) => setCartSearchTerm(e.target.value)}
          />
        </div>

        {/* Abandoned Carts Details */}
        {filteredCarts.map((cart) => (
          <div
            key={cart.id}
            className="abandoned-cart-detail"
            onClick={() => handleCartClick(cart)}
            style={{ cursor: 'pointer' }}
          >
            <h3>{cart.item}</h3>
            <p>Reason: {cart.reason}</p>
            <p>Customer: {cart.customer}</p>
            <p>Date: {cart.date}</p>
            <p>Payment Method: {cart.paymentMethod}</p>
            <p>Shipping Method: {cart.shippingMethod}</p>
          </div>
        ))}
      </div>

      {/* Orders Container */}
      <div className="container orders-container">
        <h2>Orders</h2>
        <div className="dashboard">
          <div className="dashboard-item">
            <h3>Total Orders</h3>
            <p>{totalOrders}</p>
          </div>
          <div className="dashboard-item">
            <h3>Total Revenue</h3>
            <p>₹{totalRedeemedSales.toFixed(2)}</p>
          </div>
        </div>

        {/* Search Bar for Orders */}
        <input
          type="text"
          placeholder="Search Orders..."
          value={globalSearchTerm}
          onChange={(e) => setGlobalSearchTerm(e.target.value)}
        />

        {/* Order Details */}
        {filteredOrders.map((order) => (
          <div key={order.id} className="order-detail">
            <h3>{order.item}</h3>
            <p>Customer: {order.customer}</p>
            <p>Date: {order.date}</p>
            <p>Status: {order.status}</p>
          </div>
        ))}
      </div>

      {/* Customers Container */}
      <div className="container customers-container">
        <h2>Customers</h2>
        <div className="dashboard">
          <div className="dashboard-item">
            <h3>Total Customers</h3>
            <p>{totalCustomers}</p>
          </div>
        </div>

        {/* Search Bar for Customers */}
        <input
          type="text"
          placeholder="Search Customers..."
          value={globalSearchTerm}
          onChange={(e) => setGlobalSearchTerm(e.target.value)}
        />

        {/* Customer Details */}
        {filteredCustomers.map((customer) => (
          <div key={customer.id} className="customer-detail">
            <h3>{customer.name}</h3>
            <p>Email: {customer.email}</p>
            <p>Phone: {customer.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySales;
