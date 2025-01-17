"use client";
import React, { useContext, useState, useEffect } from 'react';
import DataContext from './context/dataContext';
import "./page.css";
import Link from 'next/link';
import { UserCircle, ChevronDown, LogIn, ShoppingBasket, UserRoundCog, Shield, LogOut } from 'lucide-react';

const HomepageHeading = () => {
  const { addtocard, setAddtocard } = useContext(DataContext);
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  // Update time every minute
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
    }, 60000); // Update time every minute

    // Set time initially
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    setCurrentTime(`${hours}:${minutes}`);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const isAdmin = true; // This would normally come from your auth context/state

  return (
    <>
      <nav className="bg-[#2874f0] text-white py-2.5 fixed w-full top-0 z-50" id='header'>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <strong style={{ fontSize: "40px", margin: -40, fontFamily: "sans-serif" }}>Eswari Times</strong>
              {/* Updated notification-style time display */}
              <div className="-ml-1 -mt-2 flex items-center justify-center w-8 h-5 bg-blue-999 text-white text-xs">
                {currentTime}
              </div>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <a className="my-2 px-2 py-2 w-auto bg-blue-999 text-white rounded-md text-center shadow-md text-lg cursor-pointer transition-all transform hover:scale-[1.05] hover:shadow-[0px_4px_8px_rgba(0,_0,_0,_15)] flex-1" href="#">Home</a>
                  </li>
                  <li>
                    <a className="my-2 px-2 py-2 w-auto bg-blue-999 text-white rounded-md text-center shadow-md text-lg cursor-pointer transition-all transform hover:scale-[1.05] hover:shadow-[0px_4px_8px_rgba(0,_0,_0,_15)] flex-1" href="#">Contact Us</a>
                  </li>
                </ul>
              </nav>

              <div className="flex items-center gap-2" >
                <div className="relative">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm hover:bg-gray-50 transition-colors duration-200"
                     >
                    <UserCircle className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-700">Login</span>
                    <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50 border border-gray-100">
                      {isAdmin && (
                        <>
                          <div className="px-4 py-2 text-xs text-gray-500 border-b border-gray-100">Administration</div>
                          <button className="w-full flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-50">
                            <Shield style={{ width: "20px", height: "20px" }} />
                            <a href='/Administrator'>
                              <span>Administrator</span>
                            </a>
                          </button>
                        </>
                      )}

                      <div className="px-4 py-2 text-xs text-gray-500 border-b border-gray-100">My Account</div>
                      <button className="w-full flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-50">
                        <LogIn style={{ width: "20px", height: "20px" }} />
                        <a href='/login'>
                          <span>Login</span>
                        </a>
                      </button>
                      <button className="w-full flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-50">
                        <UserRoundCog style={{ width: "20px", height: "20px" }} />
                        <a href='/MyAccount'>
                          <span>Manage Account</span>
                        </a>
                      </button>
                      <button className="w-full flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-50">
                        <ShoppingBasket style={{ width: "20px", height: "20px" }} />
                        <a href='/handleInputData'>
                          <span>Store</span>
                        </a>
                      </button>
                      <button className="w-full flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-50">
                        <LogOut style={{ width: "20px", height: "20px" }} />
                        <span>Log out</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default HomepageHeading;
