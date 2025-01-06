"use client"
import React, { useContext } from 'react'
import "./Heading.css"
import { Search, ShoppingCart, Menu, X } from 'lucide-react';
import DataContext from "../context/dataContext";
const Heading = () => {
  const {addtocard,handlesearch,setLoading}=useContext(DataContext);
  const searchChange=async (searchData)=>{
    setLoading(true);
    await handlesearch(searchData);

  }
  return (
    <>
    <nav className="bg-[#2874f0] text-white py-2.5 fixed w-full top-0 z-50" id='header'>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <strong style={{fontSize:"40px"}}>Eswari Times</strong>
            </div>
      
            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products"
                  className="w-full py-2 px-4 pr-10 rounded-sm text-black focus:outline-none"
                  onChange={(e)=>searchChange(e.target.value)}
                />
                <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
              </div>
              </nav>
              <div className="relative">
                  <ShoppingCart size={24}  style={{color:"white"}} />
                  {addtocard >0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      {addtocard}
                    </span>
                  )}
                </div>
            </div>
          </div>
        </div>
      </nav>
    
    </>
  )
}
export default Heading