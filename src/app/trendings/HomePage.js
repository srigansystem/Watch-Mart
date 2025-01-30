"use client"

import Link from "next/link";
import "./HomePage.css";
import { useContext } from "react";
import DataContext from "../context/dataContext";
import Image from "next/image";
// import Image from "next/image"
const HomePage = ({data}) => {
  const {addtocard,setAddtocard}=useContext(DataContext);
  // const myLoader = ({ src, width, quality }) => {
  //   return `${src}?w=${width}&q=${quality || 75}`;
  // };
  return (
    <>  <div  id='trendingBody'>
          <span className="relative flex justify-center">
          <div
          className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75">

          </div>
          <span className="relative z-10 bg-white px-6">Trendings</span>
          </span>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-8">
          {
          data.map((product,index)=>(
            <Link
            key={index}
            href={{
              pathname: "/details",
              query: { "id":product.id,"name":product.name,"image":product.image,"price":product.price,"stock":product.stock,"details":product.details},
          }}
    >
            
    
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
            <div className="relative pb-[100%]">
              <Image
              src={product.image}
                alt="testing"
                className="absolute top-0 left-0 w-full h-full object-contain"
                width={100}
                    height={100}
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
                      <span className="text-lg font-bold" style={{color:"black"}}>{product.price}</span>
                      <span className="text-sm text-gray-500 ml-2 line-through">1000
                      </span>
                    
                      <span className="text-sm text-green-600 ml-2">20% off</span>
                    </div>
                    <button
                    onClick={()=>setAddtocard(addtocard+1)}
                      className="mt-3 w-full bg-[#ff9f00] text-white py-2 rounded-sm hover:bg-[#ff9000] transition-colors"
                      >Add to Cart
                    </button>
                  </div>
                </div>
                </Link>
              )
            )
        }
        </div>
        </div>
    </>
  )
}

export default HomePage