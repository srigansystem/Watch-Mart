"use client";
import React, { useContext, useState, useEffect } from 'react';
import DataContext from './context/dataContext';
import Link from 'next/link';
import { 
  UserCircle, 
  ChevronDown, 
  LogIn, 
  ShoppingBasket, 
  UserRoundCog, 
  Shield, 
  LogOut,
  FilterIcon,
  ShoppingBag,
  Menu,
  X
} from 'lucide-react';

const HomepageHeading = () => {
  const cartCount = 9;
  const { addtocard, setAddtocard, setIsFilterOpen } = useContext(DataContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isAdmin = true;

  const NavLink = ({ href, children }) => (
    <Link 
      href={href} 
      className="relative group px-4 py-2 text-white transition-colors hover:text-blue-100"
    >
      <span>{children}</span>
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
    </Link>
  );

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-blue-600 shadow-lg' : 'bg-[#2874f0]'
    }`} id='header'>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Time */}
          <div className="flex items-center space-x+4">
            <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Eswari Times
            </h1>
            <div className="hidden sm:flex items-center justify-center px-0 py-1 bg-blue-000 rounded-md">
              <span className="text-white text-sm font-medium">{currentTime}</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-4">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/contact">Contact Us</NavLink>
            </nav>

            {/* User Menu and Actions */}
            <div className="flex items-center space-x-4">
              {/* Filter Button */}
              <button
                onClick={() => setIsFilterOpen(true)}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors duration-200 flex items-center space-x-2"
              >
                <FilterIcon size={18} />
                {/* <span>Filters</span> */}
              </button>

              {/* Cart */}
              

              {/* User Menu */}
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
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50 border border-gray-200 overflow-hidden">
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
                      {/* <button className="w-full flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-50">
                        <ShoppingBasket style={{ width: "20px", height: "20px" }} />
                        <a href='/handleInputData'>
                          <span>Store</span>
                        </a>
                      </button> */}
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 py-3 space-y-4 bg-blue-700">
          <div className="flex flex-col space-y-3">
            <Link href="/" className="text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-colors">
              Home
            </Link>
            <Link href="/contact" className="text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-colors">
              Contact Us
            </Link>
          </div>
          
          <div className="pt-4 border-t border-white/10">
            <div className="flex flex-col space-y-2">
              {isAdmin && (
                <Link href="/administrator" className="flex items-center space-x-2 text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-colors">
                  <Shield className="w-5 h-5" />
                  <span>Administrator</span>
                </Link>
              )}
              {[
                { icon: LogIn, label: 'Login', href: '/login' },
                { icon: UserRoundCog, label: 'Manage Account', href: '/myaccount' },
                { icon: ShoppingBasket, label: 'Store', href: '/handleInputData' },
                { icon: LogOut, label: 'Log out', href: '#' }
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-2 text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-colors"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HomepageHeading;