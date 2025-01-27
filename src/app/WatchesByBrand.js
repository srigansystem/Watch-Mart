// WatchesByBrand.js
"use client"
import React, { useState, useContext, useEffect } from "react";
import Categories from "./Categories"; // Import Categories component
import "./WatchesByBrand.css";

import DataContext from './context/dataContext'
import "./page.css"

const WatchesByBrand = () => {
  const [selectedBrand, setSelectedBrand] = useState("All");
  // const [selectedCategory, setSelectedCategory] = useState("All");
  const {selectedCategory,setSelectedCategory,setFilteredData,filteredData,isFilterOpen}=useContext(DataContext)
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 100000,
    caseMaterial: [],
    strapMaterial: [],
    strapColor: [],
    caseShape: [],
    waterResistantDepth: 0,
  });
  const [favorites, setFavorites] = useState([]);
  const [compare, setCompare] = useState([]);
  const [sortOption, setSortOption] = useState("Price: Low to High");
  const [currentPage, setCurrentPage] = useState(1);
  const watchesPerPage = 8;
  const [showDetails, setShowDetails] = useState(null);
  const {dataset,setAddtocard,addtocard}=useContext(DataContext)
  const brands = ["All", "Rolex", "Omega", "TAG Heuer", "Casio"];
  const materials = ["Steel", "Gold", "Leather", "Rubber"];
  const caseShapes = ["Round", "Square", "Oval"];
  const strapColors = ["Black", "Brown", "Blue", "Red"];
console.log("test",selectedBrand);
const categories = [
  "Wedding Collection",
  "Smart Watches",
  "Sports Watches",
  "Kids Collection",
  "More...",
];
useEffect(() => {
  var filteredWatches = dataset
    .filter((watch) => {
      const inCategories = selectedCategory === "All" || watch.category === selectedCategory;
      const inBrand = selectedBrand === "All" || watch.brand == selectedBrand;
      console.log("test2",inBrand);
      const inPriceRange = watch.price >= filters.minPrice && watch.price <= filters.maxPrice;
      // const inCaseMaterial = filters.caseMaterial.length === 0 || filters.caseMaterial.includes(watch.case);
      // const inStrapMaterial = filters.strapMaterial.length === 0 || filters.strapMaterial.includes(watch.strap);
      // const inStrapColor = filters.strapColor.length === 0 || filters.strapColor.includes(watch.strapColor);
      // const inCaseShape = filters.caseShape.length === 0 || filters.caseShape.includes(watch.caseShape);
      // const isWaterResistantDepth = watch.waterDepth >= filters.waterResistantDepth;
      return (
        inCategories &&
        inBrand &&
        inPriceRange 
        // inCaseMaterial &&
        // inStrapMaterial &&
        // inStrapColor &&
        // inCaseShape &&
        // isWaterResistantDepth
      );
    })
    .sort((a, b) => {
      if (sortOption === "Price: Low to High") return a.price - b.price;
      if (sortOption === "Price: High to Low") return b.price - a.price;
      if (sortOption === "Rating: High to Low") return b.rating - a.rating;
      return 0;
    });
    console.log("filter",filteredWatches);
    
  setFilteredData(filteredWatches)
},[isFilterOpen])
  
  const toggleFavorite = (id) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]));
  };

  const toggleCompare = (id) => {
    setCompare((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const resetFilters = () => {
    setFilters({
      minPrice: 0,
      maxPrice: 100000,
      caseMaterial: [],
      strapMaterial: [],
      strapColor: [],
      caseShape: [],
      waterResistantDepth: 0,
    });
    setSelectedBrand("All");
    setSelectedCategory("All");
  };

  const openDetails = (id) => {
    const watch = dataset.find((watch) => watch.id === id);
    setShowDetails(watch);
  };

  const closeDetails = () => {
    setShowDetails(null);
  };

  const handleScroll = (e) => {
    if (e.target.scrollHeight === e.target.scrollTop + e.target.clientHeight) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to the first page when a category is selected
  };

  

  const handleAddToCart = () => {
    setAddtocard(addtocard + 1); // Add one more to cart
  };

  const handleRemoveFromCart = () => {
    setAddtocard(0); // Remove all from cart
  };

  const handleDecrement = () => {
    if (addtocard > 1) {
      setAddtocard(addtocard - 1); // Decrement by 1
    }
  };

  return (
    <div className="watches-container" onScroll={handleScroll}>
      
      <div className="main-content">
        {/* Filters and Sorting */}
        <div className="filter-sort-container">
          {/* Filters */}
          <div className="filters-container">
            <button className="reset-btn" onClick={resetFilters}>Reset Filters</button>
            <div className="brand-filter">
              <p>Brands</p>
              {brands.map((brand) => (
                <button
                  key={brand}
                  className={`filter-btn ${selectedBrand === brand ? "active" : ""}`}
                  onClick={() => setSelectedBrand(brand)}
                >
                  {brand}
                </button>
              ))}
            </div>

            <div className="category-filter">
              <p>Category</p>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`filter-btn ${selectedCategory === category ? "active" : ""}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <p>Filters</p>
            <label className="price">Price Range: ₹{filters.minPrice} - ₹{filters.maxPrice}</label>
            <input
              type="range"
              min="0"
              max="100000"
              step="100"
              value={filters.maxPrice}
              onChange={(e) => setFilters({ ...filters, maxPrice: +e.target.value })}
            />
            <p>Case Material</p>
            {materials.map((material) => (
              <button
                key={material}
                className={`filter-btn ${filters.caseMaterial.includes(material) ? "active" : ""}`}
                onClick={() =>
                  setFilters((prev) => ({
                    ...prev,
                    caseMaterial: prev.caseMaterial.includes(material)
                      ? prev.caseMaterial.filter((item) => item !== material)
                      : [...prev.caseMaterial, material],
                  }))
                }
              >
                {material}
              </button>
            ))}
            <p>Strap Color</p>
            {strapColors.map((color) => (
              <button
                key={color}
                className={`filter-btn ${filters.strapColor.includes(color) ? "active" : ""}`}
                onClick={() =>
                  setFilters((prev) => ({
                    ...prev,
                    strapColor: prev.strapColor.includes(color)
                      ? prev.strapColor.filter((item) => item !== color)
                      : [...prev.strapColor, color],
                  }))
                }
              >
                {color}
              </button>
            ))}
            <p>Case Shape</p>
            {caseShapes.map((shape) => (
              <button
                key={shape}
                className={`filter-btn ${filters.caseShape.includes(shape) ? "active" : ""}`}
                onClick={() =>
                  setFilters((prev) => ({
                    ...prev,
                    caseShape: prev.caseShape.includes(shape)
                      ? prev.caseShape.filter((item) => item !== shape)
                      : [...prev.caseShape, shape],
                  }))
                }
              >
                {shape}
              </button>
            ))}
            <p>Water Resistance Depth (m)</p>
            <input
              type="number"
              value={filters.waterResistantDepth}
              onChange={(e) => setFilters({ ...filters, waterResistantDepth: +e.target.value })}
              min="0"
            />
          </div>

          {/* Sorting */}
          <div className="sorting">
            <label>Sort By</label>
            <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Rating: High to Low</option>
            </select>
          </div>
        </div>

        {/* Watches Grid */}

</div>
      {/* Compare Watches */}
      {compare.length > 0 && (
        <div className="compare-section">
          <h2>Compare Watches</h2>
          {compare.map((id) => {
            const watch = dataset.find((w) => w.id === id);
            return (
              <div key={watch.id} className="compare-card">
                <img src={watch.img} alt={watch.name} />
                <h3>{watch.name}</h3>
                <p>₹{watch.price}</p>
              </div>
            );
          })}
        </div>
      )}

     

      {/* Watch Details Modal */}
      {showDetails && (
        <div className="modal-overlay" onClick={closeDetails}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{showDetails.name}</h2>
            <p>{showDetails.brand}</p>
            <p>{showDetails.category}</p>
            <p>Price: ₹{showDetails.price}</p>
            <p>Case: {showDetails.case}</p>
            <p>Strap: {showDetails.strap}</p>
            <p>Water Resistance: {showDetails.waterDepth} meters</p>
            <button onClick={closeDetails}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WatchesByBrand;
