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
import { Search, ShoppingCart, Menu, X, Edit } from 'lucide-react';
import ProductWatches from "./ProductWatches";

export default function Home() {
  const {loading,addtocard,setAddtocard}=useContext(DataContext)
  console.log(addtocard);
  
  return (
    
    <>
    <HomepageHeading />{
      loading?(<Loading/>):(
    <>
      <Categories/>
      <ImageSlider/>
      <ProductWatches/> 
      <WatchesByBrand/>
        {addtocard>0&&
        <div style={{color:"black",position:"fixed",bottom:"20px",right:"20px",backgroundColor:"yellow",borderRadius:"50%",width:60,height:60,alignContent:"center",padding:20,boxShadow:"2px 2px 10px black"}}>
        <ShoppingCart size={24}  style={{color:"black"}} />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            {addtocard}
          </span>
      </div>}     
      <MenuBook/>
      <Footer/></>
      )
    }
    
</>
  );
}