"use client";
import React, { useState } from "react";
import "./MySales.css";

const MySales = () => {
  const [feedbacks, setFeedbacks] = useState([
    { id: 1, message: "Excellent service! Will buy again." },
    { id: 2, message: "Fast delivery and amazing quality!" },
  ]);

  const [inventory, setInventory] = useState([
    { id: 1, name: "Watch A", stock: 20, price: 100 },
    { id: 2, name: "Watch B", stock: 10, price: 200 },
  ]);

  const [salesMetrics, setSalesMetrics] = useState({
    totalSales: 150,
    revenue: 10000,
    unitsSold: 500,
    salesTarget: 200,
  });

  const [filter, setFilter] = useState({ minPrice: 0, maxPrice: 5000 });

  // Add Feedback
  const addFeedback = () => {
    const newFeedback = prompt("Enter new customer feedback:");
    if (newFeedback) {
      setFeedbacks([
        ...feedbacks,
        { id: feedbacks.length + 1, message: newFeedback },
      ]);
    }
  };

  // Add Sale
  const addSale = () => {
    const itemName = prompt("Enter the item sold (e.g., Watch A):");
    const quantity = parseInt(prompt("Enter the quantity sold:"));
    const itemPrice = parseFloat(prompt("Enter the price of the item:"));

    if (itemName && quantity && itemPrice) {
      const updatedInventory = inventory.map((item) =>
        item.name === itemName
          ? { ...item, stock: item.stock - quantity }
          : item
      );
      setInventory(updatedInventory);

      const totalRevenue = salesMetrics.revenue + itemPrice * quantity;
      const totalUnitsSold = salesMetrics.unitsSold + quantity;

      setSalesMetrics({
        ...salesMetrics,
        revenue: totalRevenue,
        unitsSold: totalUnitsSold,
        totalSales: salesMetrics.totalSales + 1,
      });
    }
  };

  // Update Inventory
  const updateInventory = (id, newStock, newPrice) => {
    setInventory(
      inventory.map((item) =>
        item.id === id
          ? { ...item, stock: newStock, price: newPrice }
          : item
      )
    );
  };

  // Filter Inventory by Price
  const handlePriceFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({
      ...filter,
      [name]: parseFloat(value),
    });
  };

  // Sales Progress Bar
  const salesProgress = (
    (salesMetrics.totalSales / salesMetrics.salesTarget) * 100
  ).toFixed(2);

  return (
    <div className="my-sales-container">
      <header className="sales-header">
        <h1>My Sales Dashboard</h1>
        <button onClick={addFeedback}>Add Feedback</button>
        <button onClick={addSale}>Add Sale</button>
      </header>

      {/* Sales Performance Section */}
      <section className="sales-performance">
        <h2>Sales Performance</h2>
        <div className="performance-metrics">
          <div className="metric-card">
            <h3>Total Sales</h3>
            <p>{salesMetrics.totalSales}</p>
          </div>
          <div className="metric-card">
            <h3>Revenue</h3>
            <p>${salesMetrics.revenue}</p>
          </div>
          <div className="metric-card">
            <h3>Units Sold</h3>
            <p>{salesMetrics.unitsSold}</p>
          </div>
          <div className="metric-card">
            <h3>Sales Target</h3>
            <p>{salesMetrics.salesTarget}</p>
            <div className="sales-progress">
              <progress value={salesMetrics.totalSales} max={salesMetrics.salesTarget}></progress>
            </div>
            <p>{salesProgress}% Progress</p>
          </div>
        </div>
      </section>

      {/* Inventory Section */}
      <section className="sales-inventory">
        <h2>Inventory</h2>
        <div className="filter-section">
          <input
            type="number"
            name="minPrice"
            placeholder="Min Price"
            value={filter.minPrice}
            onChange={handlePriceFilterChange}
          />
          <input
            type="number"
            name="maxPrice"
            placeholder="Max Price"
            value={filter.maxPrice}
            onChange={handlePriceFilterChange}
          />
        </div>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Stock</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {inventory
              .filter((item) => item.price >= filter.minPrice && item.price <= filter.maxPrice)
              .map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.stock}</td>
                  <td>${item.price}</td>
                  <td>
                    <button
                      onClick={() =>
                        updateInventory(item.id, prompt("New Stock:", item.stock), prompt("New Price:", item.price))
                      }
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>

      {/* Customer Feedback Section */}
      <section className="customer-feedback">
        <h2>Customer Feedback</h2>
        {feedbacks.map((feedback) => (
          <div key={feedback.id} className="feedback-card">
            <p>{feedback.message}</p>
            <button
              onClick={() => {
                const updatedMessage = prompt("Edit feedback message:");
                if (updatedMessage) {
                  setFeedbacks(
                    feedbacks.map((item) =>
                      item.id === feedback.id
                        ? { ...item, message: updatedMessage }
                        : item
                    )
                  );
                }
              }}
            >
              Edit
            </button>
            <button
              onClick={() =>
                setFeedbacks(feedbacks.filter((item) => item.id !== feedback.id))
              }
            >
              Delete
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default MySales;
