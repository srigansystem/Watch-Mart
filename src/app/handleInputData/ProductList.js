"use client"
import React, { useContext } from 'react'
import "./ProductList.css"
import DataContext from '../context/dataContext';
const ProductList = () => {
    const {dataset,setAddbtnclicked,setEditbtnclicked,setName,setImage,setPrice,setDetails,setId,setLoading,setStock}=useContext(DataContext);
    //console.log(dataset); 
    const addbtn=()=>{
      setAddbtnclicked(true);
    }
    const editbtn=(id,name,image,price,details,stock)=>{
      //console.log(id,name,image,price,details);
      setEditbtnclicked(true);
      setId(id);
      setName(name);
      setImage(image);
      setPrice(price);
      setDetails(details);
      setStock(stock);

    }
  return (
    <>
    <span className="relative flex justify-center">
  <div
    className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
  ></div>

  <span className="relative z-10 bg-white px-6" id='EditPageHeading'>Products</span>
</span>
    <div id='container'>
      <div className='list' id='productHead'>
        <div id='items'>
          <h3 id='EditPageText'>Name</h3>
        </div>
        <div id='items'>
          <h3 id='EditPageText'>Number of Stocks</h3>
        </div>
        <div id='items'>
          <h3 id='EditPageText'>Edit</h3>
        </div>
        </div>
      {dataset.map((data,index)=>(
        <div className='list' key={index}>
        <div id='items'>
          <img src={data.image} id='image'></img>
          <h3 id='EditPageText'>{data.name}</h3>
        </div>
        <div id='items'>
          <h3 id='EditPageText'>{data.stock}</h3>
        </div>
        <div id='items'>
        <button
  className="rounded-lg relative w-36 h-10 cursor-pointer flex items-center border border-green-500 bg-green-500 group hover:bg-green-500 active:bg-green-500 active:border-green-500"
id='edit' onClick={()=>editbtn(data.id,data.name,data.image,data.price,data.details,data.stock)}>
  <span
    className="text-gray-200 font-semibold ml-8 transform group-hover:translate-x-20 transition-all duration-300"
    >Edit</span
  >
  <span
    className="absolute right-0 h-full w-10 rounded-lg bg-green-500 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300"
  id='editicon'>
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30" color='white'>
    <path d="M 22.828125 3 C 22.316375 3 21.804562 3.1954375 21.414062 3.5859375 L 19 6 L 24 11 L 26.414062 8.5859375 C 27.195062 7.8049375 27.195062 6.5388125 26.414062 5.7578125 L 24.242188 3.5859375 C 23.851688 3.1954375 23.339875 3 22.828125 3 z M 17 8 L 5.2597656 19.740234 C 5.2597656 19.740234 6.1775313 19.658 6.5195312 20 C 6.8615312 20.342 6.58 22.58 7 23 C 7.42 23.42 9.6438906 23.124359 9.9628906 23.443359 C 10.281891 23.762359 10.259766 24.740234 10.259766 24.740234 L 22 13 L 17 8 z M 4 23 L 3.0566406 25.671875 A 1 1 0 0 0 3 26 A 1 1 0 0 0 4 27 A 1 1 0 0 0 4.328125 26.943359 A 1 1 0 0 0 4.3378906 26.939453 L 4.3632812 26.931641 A 1 1 0 0 0 4.3691406 26.927734 L 7 26 L 5.5 24.5 L 4 23 z"></path>
</svg>
  </span>
</button>        </div>
        
      </div>
      
      ))} 
      <div id='Addbtn'>
      <button onClick={()=>addbtn()}
  className="rounded-lg relative w-36 h-10 cursor-pointer flex items-center border border-green-500 bg-green-500 group hover:bg-green-500 active:bg-green-500 active:border-green-500"
>
  <span
    className="text-gray-200 font-semibold ml-8 transform group-hover:translate-x-20 transition-all duration-300"
    >Add</span
  >
  <span
    className="absolute right-0 h-full w-10 rounded-lg bg-green-500 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300"
  >
    <svg
      className="svg w-8 text-white"
      fill="none"
      height="24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="12" x2="12" y1="5" y2="19"></line>
      <line x1="5" x2="19" y1="12" y2="12"></line>
    </svg>
  </span>
</button>

      </div>
      </div>
    </>
  )
}

export default ProductList