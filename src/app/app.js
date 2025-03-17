"use client";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import MySales from "./MySales";
import Catalog from "./Catalog";
import ShippingPickup from "./ShippingPickup";
import Settings from "./Settings";
import Reports from "./Reports";
import SalesChannels from "./SalesChannels";

const App = () => {
  return (
    <Router>
      <div className="layout">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/Administrator" element={<Dashboard />} />
            <Route path="/my-sales" element={<MySales />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/shipping-pickup" element={<ShippingPickup />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/sales-channels" element={<SalesChannels />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
