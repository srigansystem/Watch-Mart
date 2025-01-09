"use client"
import React, { useContext } from 'react'
import { Search, ShoppingCart, Menu, X, Edit } from 'lucide-react';
import DataContext from './context/dataContext';
import "./page.css"
import EditBtn from './EditBtn';
import Link from 'next/link';
const HomepageHeading = () => {
  const {addtocard,setAddtocard}=useContext(DataContext)
  return (
    <>
    <nav className="bg-[#2874f0] text-white py-2.5 fixed w-full top-0 z-50" id='header'>
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <div className="flex-1 md:flex md:items-center md:gap-12">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-9">
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
          </svg>

          <strong style={{fontSize:"40px",margin:-50}}>Eswari Times</strong>
        </div>
  
        <div className="md:flex md:items-center md:gap-12">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
            <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="#" style={{color:"#FFFFFB"}}> Home </a>
              </li>
              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="#" style={{color:"#FFFFFB"}}> Contact us </a>
              </li>
  
              
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                href="/login" style={{backgroundColor:"#FFC145"}}
              >
                <h3 style={{color:"black"}}>Login</h3>
              </a>
  
              <div className="hidden sm:flex">
                <a
                  className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                  href="register"  style={{backgroundColor:"#FFFFFB"}}
                >
                  <h3  style={{color:"black"}}>Register</h3>
                </a>
                
              </div> 
               
            </div>
            <a href='/Administrator'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>
            </a>

          </div>
          <div className="relative">
              <ShoppingCart size={24}  style={{color:"white"}} />
              {addtocard > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {addtocard}
                </span>
              )}
            </div>
            <div className="relative">
              <Link href="/handleInputData">
              <EditBtn/>
              </Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
    </>
  )
}

export default HomepageHeading;