"use client"
import { useContext } from "react";
import DataContext from "./context/dataContext";
import HomepageAbout from "./HomepageAbout";
import HomepageHeading from "./HomepageHeading";
import MenuBook from "./MenuBook";
import Loading from "./loading";
import Footer from "./trendings/footer";

export default function Home() {
  const {loading}=useContext(DataContext);
  return (
    
    <>
    <HomepageHeading />{
      loading?(<Loading/>):(
      <>
      <HomepageAbout />
      <MenuBook />
      <Footer/></>
      )
    }
    
</>
  );
}
