"use client"
import React, { useContext } from 'react';
import HandlingInputData from "./HandlingInputData.js"
import "./HandlingInputData.css";
import Loading from "../loading.js";
import ProductList from './ProductList.js';
import DataContext from '../context/dataContext.js';

const HandlingFiles = () => {
  const {addbtnclicked,id,name,image,price,details,editbtnclicked,setEditbtnclicked,setName,setImage,setPrice,setDetails,setId,updatefunction,stock,setStock,loading,setLoading}=useContext(DataContext);
  const editbtnfunction=async ()=>{
    setLoading(true);
    await updatefunction(id,name,price,image,details,stock)
    setEditbtnclicked(false);
    setLoading(false)

  }
  const cancel=()=>{
    setEditbtnclicked(false)
    setLoading(false)
  }
  return (
    <>
    {loading ?<Loading/>: <></>}
    {editbtnclicked?(<div  style={{
  position:editbtnclicked?'relative':'static',  
}} >
<ProductList/>
<div style={{
  opacity: editbtnclicked ? 1 :0, // Adjust opacity based on condition
  position:editbtnclicked?' absolute':'static',
  visibility:!editbtnclicked?'hidden':'visible',
  display:!editbtnclicked?'none':'flex',
  justifyContent:'center',
  top: 200,
  left: '50%',
  transform: 'translate(-50%, -50%)',
}}  >
<div>
        <div className="card px-8 py-6 rounded-lg bg-gray-800 w-72" id='input'>
            <h1 className="text-center font-bold text-3xl text-white">Edit Data</h1>
            <div className="my-6">
                <div id='label'><label>Id</label><input className="p-2 my-2 rounded w-[100%] focus:outline-blue-600" placeholder="Product Number" type="text" value={id||''} onChange={(e)=>setId(e.target.value)} style={{color:'black'}} disabled={true}></input></div>
                <div id='label'><label>Name</label><input className="p-2 my-2 rounded w-[100%] focus:outline-blue-600" placeholder="Name" type="text" value={name||''} onChange={(e)=>setName(e.target.value)} style={{color:'black'}}></input></div>
                <div id='label'><label>Price</label><input className="p-2 my-2 rounded w-[100%] focus:outline-blue-600" placeholder="Price" type="text"  value={price||''} onChange={(e)=>setPrice(e.target.value)} style={{color:'black'}}></input></div>
                <div id='label'><label>Details</label><input className="p-2 my-2 rounded w-[100%] focus:outline-blue-600" placeholder="Details" type="text"  value={details||''} onChange={(e)=>setDetails(e.target.value)} style={{color:'black'}}></input></div>
                <div id='label'><label>ImageURL</label><input className="p-2 my-2 rounded w-[100%] focus:outline-blue-600" placeholder="Image" type="text"  value={image||''} onChange={(e)=>setImage(e.target.value)} style={{color:'black'}}></input></div>
                <div id='label'><label>Number of Stocks</label><input className="p-2 my-2 rounded w-[100%] focus:outline-blue-600" placeholder="Stock" type="text"  value={stock||''} onChange={(e)=>setStock(e.target.value)} style={{color:'black'}}></input></div>
                <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold p-2 mt-3 rounded w-[100%]" onClick={()=>editbtnfunction()} id='updatebtn'>Update</button>
                <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold p-2 mt-3 rounded w-[100%]" onClick={()=>cancel()} id='cancelbtn'>Cancel</button>
            </div>
        </div>
    </div>

</div>
</div>):(<div  style={{
  position:addbtnclicked?'relative':'static',
}} >
      <ProductList/>
      <div style={{
          opacity: addbtnclicked ? 1 :0, // Adjust opacity based on condition
          position:addbtnclicked?' absolute':'static',
          visibility:!addbtnclicked?'hidden':'visible',
          display:!addbtnclicked?'none':'flex',
          justifyContent:'space-between',
          top: 200,
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}  >
        <HandlingInputData/>

      </div>
    </div>)}
  </>
  )
}
export default HandlingFiles;