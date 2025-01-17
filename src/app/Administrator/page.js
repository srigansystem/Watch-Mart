"use client";  // Ensure that this file is treated as client-side only
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import dynamic from "next/dynamic"; // Next.js dynamic import for client-side rendering

// Dynamically import components with SSR disabled
const Sidebar = dynamic(() => import("./Sidebar"), { ssr: false });
const Dashboard = dynamic(() => import("./Dashboard"), { ssr: false });
const MySales = dynamic(() => import("./MySales"), { ssr: false });
const Catalog = dynamic(() => import("./Catalog"), { ssr: false });
const ShippingPickup = dynamic(() => import("./ShippingPickup"), { ssr: false });
const Settings = dynamic(() => import("./Settings"), { ssr: false });
const Reports = dynamic(() => import("./Reports"), { ssr: false });
const SalesChannels = dynamic(() => import("./SalesChannels"), { ssr: false });

const Page = () => {
  // Use state or effect hooks as needed
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This will be triggered once the component mounts on the client
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Loading...</div>;  // Show loading until client-side rendering is enabled
  }

  return (
    <Router>  {/* Wrap the app inside Router to enable routing */}
      <div className="layout">
        <Sidebar /> {/* Sidebar component */}
        <div className="content">
        <h1 className="flex items-center justify-center bg-blue-500 px-[3px] py-[3px] text-white h-[75px] w-auto text-2xl rounded-[5px]">Eswari Times - Admin</h1>
<Routes>  {/* Define Routes to render different components based on the URL */}
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

export default Page;
