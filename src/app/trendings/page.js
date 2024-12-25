"use client"
import React, { useContext } from 'react'
import HomePage from './HomePage'
import Heading from './Heading'
// import Footer from './footer'
import DataContext from '../context/dataContext'
import Loading from '../loading'
import Footer from './footer';
import Link from 'next/link'
export default function Page(){
    const{loading,filteredData}=useContext(DataContext);
    console.log(filteredData);
    
    return (
    <>
    <Heading/>
    {
      loading?(<Loading/>):(
        <>
            <HomePage data={filteredData} />
        
        <Footer />
        </>
      )
    }
    {/* <Footer/> */}
    </>
  );
}
