"use client"
import { useContext } from "react";
import DataContext from "./context/dataContext";
import HomepageAbout from "./HomepageAbout";
import HomepageHeading from "./HomepageHeading";
import MenuBook from "./MenuBook";
import Loading from "./loading";
import Footer from "./trendings/footer";
import Categories from "./Categories";
import ImageSlider from "./ImageSlider";
import MyAccount from "./MyAccount";
import WatchesByBrand from "./WatchesByBrand";
import FilterSlide from "./FilterSlide.js";
import { Search, ShoppingCart, Menu, X, Edit } from 'lucide-react';
export default function Home() {
  const {loading,addtocard,setAddtocard}=useContext(DataContext)
  console.log(addtocard);
  
  return (
    
    <>
    {/* <HomepageHeading /> */}
    {
      loading?(<Loading/>):(
    <>

      <ImageSlider/>
      
      {addtocard > 0 && (
  <div
    style={{
      color: "black",
      position: "fixed",
      bottom: "20px",
      right: "20px",
      backgroundColor: "#D39D55", // Changed from "inherent" to white for visibility
      borderRadius: "50%",
      width: "60px",
      height: "60px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "10px", // Adjusted padding for better alignment
      boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)", // Lighter shadow for modern look
      zIndex: 999, // Ensure it's always on top
    }}
  >
    <ShoppingCart size={24} style={{ color: "black" }} />
    <span
      style={{
        position: "absolute",
        top: "-5px", // Adjusted position for better alignment
        right: "-5px",
        backgroundColor: "#8D0B41", // More vibrant red color for better visibility
        color: "white",
        borderRadius: "50%",
        width: "20px",
        height: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "12px",
        fontWeight: "bold",
        boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.3)", // Subtle shadow for the badge
      }}
    >
      {addtocard}
    </span>
  </div>
)}

      <MenuBook/>
      <FilterSlide/>
      <Footer/></>
      )
    }
    
</>
  );
}