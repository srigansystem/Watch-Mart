"use client"
import React, { createContext, useEffect, useState } from "react";
import * as XLSX from 'xlsx';
import axios from "axios";

const DataContext = createContext({});
export const DataProvider = ({ children }) => {
    const [loading,setLoading]=useState(true);
    const [dataset,setDataSet]=useState([]);
    const [error,setError]=useState('');
    const [json,setData]=useState('');
    const [addbtnclicked,setAddbtnclicked]=useState(false);
    const [editbtnclicked,setEditbtnclicked]=useState(false);
    const [id,setId]=useState('');
    const [name,setName]=useState('');
    const [image,setImage]=useState('');
    const [price,setPrice]=useState('');
    const [details,setDetails]=useState('');
    const [stock,setStock]=useState('');
    const [offer,setOffer]=useState('');
    const [addtocard,setAddtocard]=useState(0);
    const [filteredData,setFilteredData]=useState([]);
    const [discountValues, setDiscountValues] = useState({});
    const [discountType, setDiscountType] = useState("percentage");
    //getting data throw api
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/api');
                if (!response.ok) {
                  throw new Error('Network response was not ok');
                }
                const data = await response.json(); // Ensure it's parsed as JSON
                console.log(data.fileContents);
                setDataSet(data.fileContents);
                setFilteredData(data.fileContents);
        
            setTimeout(() => {
                setLoading(false);
            }, 2000);
            //console.log(dataset.data);
            } catch (err) {
                setError(err.message);
                console.log(err);
            }
        }
        fetchData();
    },[loading]);
    //Start user defined func for read excel file
    async function readFileAsBinaryString(file) {
        return new Promise((resolve, reject) => {
          const reader = new FileReader(null);
          
          reader.readAsBinaryString(file);
      
          reader.onload = (e) => {
            const binaryStr=e.target.result; // Resolve with the binary string
            const workbook = XLSX.read(binaryStr, { type: 'binary' });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(worksheet);
            //console.log("sk",jsonData);
            resolve(jsonData);
          };
      
          reader.onerror = (err) => {
            reject(err); // Reject with the error
          };
        });
      }
    async function filereader(file) {
       try{
        setLoading(true);
        const binaryStr =await readFileAsBinaryString(file);
        setData(binaryStr);
        setLoading(false);
        return binaryStr
       }catch(error){
        return error;
       }
    
    }
    //End user defined func
    const extractinginputfile=async (file,isFile=true)=>{
        //console.log(file);
        if(isFile){
            await filereader(file)
            const response = await fetch(`/api`,
                {
                    
                    method: 'POST',
                    body:JSON.stringify(json),
                }
            )
        }
        else{
           const response = await fetch(`/api`,
            {
                
                method: 'POST',
                body:JSON.stringify(file),
            }
        )
        }

        
        
        
        };
        const updatefunction=async(id,name,price,image,details,stock,currentprice,offer,isSingleUpdate=true)=>{

            const data={'id':id,'name':name,'price':price,'image':image,'details':details,'stock':stock,'currentprice':currentprice,'offer':offer}
            //console.log(id,name,price,image,details);
            const put=fetch(`api`,{
                method:'PUT',
                body:JSON.stringify(data),
            })
            if(put.ok){
                alert("Data updated sucessfully")
                
            }
        } 
        const handlesearch=(query)=>{
            const filtered = dataset.filter((product) => product.name.toLowerCase().includes(query.toLowerCase())
            );
              setFilteredData(filtered);
              setLoading(false);
        }
        
        
    return(
        <DataContext.Provider value={{dataset,
            loading,
            setLoading,
            error,
            setDataSet,
            extractinginputfile,
            json,loading,addbtnclicked,
            setAddbtnclicked,
            setEditbtnclicked,
            editbtnclicked,
            setId,
            id,
            setName,
            name,
            setImage,
            image,
            setPrice,
            price,
            setDetails,
            details,
            updatefunction,
            stock,
            setStock,
            setAddtocard,
            addtocard,
            handlesearch,
            filteredData,
            setFilteredData,
            discountValues,
            setDiscountValues,
            discountType,
            setDiscountType,
            offer,
            setOffer,

            }}>{children}
</DataContext.Provider>
    );
};
export default DataContext;
