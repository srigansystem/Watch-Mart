"use client"
import React, { useContext } from 'react'
import DataContext from './context/dataContext'
import "./page.css"
import Link from 'next/link'
const MenuBook = () => {
  const {dataset,setAddtocard,addtocard,filteredData}=useContext(DataContext)
  return (
    <>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-8" id='showcasecard'>
        {
          filteredData.map((product,index)=>(
            <Link
            key={index}
            href={{
              pathname: "/details",
              query: { "id":product.id,"name":product.name,"image":product.image,"price":product.price,"stock":product.stock,"details":product.details},
          }}
    >
            <div className="bg-[#FFF8E6] p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
            <div className="relative pb-[100%]">
              <img
              src={product.image}
                alt={product.name}
                className="absolute top-0 left-0 w-full h-full object-contain"
              />
                </div>
                  <div className="mt-4">
                    <h3 className="text-sm font-medium text-gray-700 line-clamp-2">{product.name}</h3>
                    <div className="flex items-center mt-2">
                      <div className="flex items-center bg-green-600 text-white px-1.5 rounded text-sm">
                        <span>4.5</span>
                      </div>
                      <span className="text-gray-500 text-sm ml-2">({product.stock})</span>
                    </div>
                    <div className="mt-2">
                      <span className="text-lg font-bold" style={{color:"black"}}>Rs.{product.price}</span>
                      <span className="text-sm text-gray-500 ml-2 line-through">1000
                      </span>
                    
                      <span className="text-sm text-green-600 ml-2">20% off</span>
                    </div>
                    <button
                    onClick={()=>setAddtocard(addtocard+1)}
                      className="mt-3 w-full bg-[#D39D55] text-white py-2 rounded-sm hover:bg-[#D39D55] transition-colors"
                      >Add to Cart
                    </button>
                  </div>
                </div>
          
    </Link>
              )
            )
        }
        </div>
      </>
  )
}

export default MenuBook