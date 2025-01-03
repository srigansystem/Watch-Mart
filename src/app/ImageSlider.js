import React, { useEffect, useState } from 'react';
import './ImageSlider.css';  // You will add your styles here

const ImageSlider = () => {
        const images = [
                "./images/logo.jpeg",
                        "./images/logo.jpeg",
                                "./images/logo.jpeg",
                                        "./images/logo.jpeg",
                                                "./images/logo.jpeg"
                                                    ];
                                                        
                                                            const totalImages = images.length;

                                                                                                                        return (
                                                                                                                                <div className="banner-container" style={{margin:100}}>
                                                                                                                                            <div
                                                                                                                                                            className="image-slider"
                                                                                                                                                                           
                                                                                                                                                                                        >
                                                                                                                                                                                                        {images.map((src, index) => (
                                                                                                                                                                                                                            <img key = {index} src = {images} alt={`Watch ${index + 1}`} />
                                                                                                                                                                                                                                            ))}
                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                    );
                                                                                                                                                                                                                                                                    };

                                                                                                                                                                                                                                                                    export default ImageSlider;
