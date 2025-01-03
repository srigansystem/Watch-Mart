import React, { useEffect, useState } from 'react';
import './ImageSlider.css';  // You will add your styles here

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
        const images = [
                "./images/logo.jpeg",
                        "./images/logo.jpeg",
                                "./images/logo.jpeg",
                                        "./images/logo.jpeg",
                                                "./images/logo.jpeg"
                                                    ];
                                                        
                                                            const totalImages = images.length;

                                                                // Function to scroll images automatically
                                                                    const scrollImages = () => {
                                                                            setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
                                                                                };

                                                                                    // Use useEffect to set up the interval for auto-scrolling
                                                                                        useEffect(() => {
                                                                                                const interval = setInterval(scrollImages, 3000); // Change image every 3 seconds

                                                                                                        // Clear interval when the component is unmounted
                                                                                                                return () => clearInterval(interval);
                                                                                                                    }, []);

                                                                                                                        return (
                                                                                                                                <div className="banner-container">
                                                                                                                                            <div
                                                                                                                                                            className="image-slider"
                                                                                                                                                                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                                                                                                                                                                                        >
                                                                                                                                                                                                        {images.map((src, index) => (
                                                                                                                                                                                                                            <img key = {index} src = {images} alt={`Watch ${index + 1}`} />
                                                                                                                                                                                                                                            ))}
                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                    );
                                                                                                                                                                                                                                                                    };

                                                                                                                                                                                                                                                                    export default ImageSlider;
