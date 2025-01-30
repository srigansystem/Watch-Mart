import { useState, useEffect } from "react";
import Image from "next/image";
import slider from "./images/International.jpg"
import slider2 from "./images/BestSellers.jpg"
import slider3 from "./images/NewArrivals.jpg"
import slider4 from "./images/Smart.jpg"
import slider5 from "./images/WoMen.jpg"
import "./ImageSlider.css"

const ImageSlider=() =>{
        const [currentIndex, setCurrentIndex] = useState(0);
        const [isAutoPlaying, setIsAutoPlaying] = useState(true);
        const images = [
          slider,
          slider2,
          slider3,
          slider4,
          slider5,
                                              ];
        useEffect(() => {
         
          let interval;
          if (isAutoPlaying) {
            interval = setInterval(() => {
              setCurrentIndex((prev) => (prev + 1) % images.length);
            }, 5000);
          }
          return () => clearInterval(interval);
        }, [isAutoPlaying]);
      
        const goToNext = () => {
          setCurrentIndex((prev) => (prev + 1) % images.length);
        };
      
        const goToPrevious = () => {
          setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
        };
      
        return (
          <div className="relative w-full max-w-8xl mx-auto overflow-hidden rounded-lg shadow-xl group" id="slider">
            <div className="relative h-[600px]">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={cn(
                    "absolute inset-0 transition-opacity duration-1000",
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  )}
                >
                  <Image
                    src={image}
                    alt="{image}"
                    className="object-cover w-full h-full"
                    id="image"
                    width={100}
                    height={100}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="absolute bottom-0 w-full p-8 text-white">
                      <h2 className="text-3xl font-bold mb-2">image</h2>
                      <p className="text-lg opacity-90">des</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
      
            {/* Navigation Buttons */}
            <button
              variant="ghost"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={goToPrevious}
              id="prevbtn"
            ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
             
            </button>
      
            <button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={goToNext}
              id="nextbtn"
            ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
            </button>
      
            {/* Dots Navigation */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    index === currentIndex
                      ? "bg-white w-4"
                      : "bg-white/50 hover:bg-white/75"
                  )}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        );
      }
export default ImageSlider
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
