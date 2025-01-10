"use client"
import React, { useContext, useState } from 'react'
import "./AppInputData.css"
import DataContext from '../context/dataContext';
import { useRef } from "react";
// Function to process the file in the backend-like logic

const AppInputData = () => {
  const [inputfile,setInputFile] = useState('')
  const {extractinginputfile,loading,setAddbtnclicked,setLoading}=useContext(DataContext)
  const reachingServer=async (file)=>{
    extractinginputfile(file);
    setInputFile(file);
    setLoading(true);
  }
  const fileuploading=async (file)=>{
    setLoading(true)
    await extractinginputfile(file);
    setAddbtnclicked(false)
    setLoading(false);
    alert("File uploaded sucessfully")
  } 
  const targetRef = useRef(null);


  return (
    <div className='input' ref={targetRef}>
<div className="card px-8 py-6 rounded-lg bg-gray-800 w-82">
  <h1 className="text-center font-bold text-3xl text-white">Add Data</h1>
  <form className="my-6">
    <input className="p-2 my-2 rounded w-[100%] focus:outline-blue-600" placeholder="Name" type="file" accept='.xlsx' onChange={(e)=>reachingServer(e.target.files[0])} id='import'></input>
    <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold p-2 mt-3 rounded w-[100%]" onClick={()=>fileuploading(inputfile)} disabled={loading}  id='updatebtn'>Import</button>
  </form>
</div>

    </div>
  );
}

export default AppInputData;