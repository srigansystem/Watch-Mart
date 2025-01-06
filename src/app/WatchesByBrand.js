import React, { useState } from "react";
import "./WatchesByBrand.css";

const WatchesByBrand = () => {
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 15000,
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

  const brands = ["All", "Rolex", "Omega", "TAG Heuer", "Casio"];
  const materials = ["Steel", "Gold", "Leather", "Rubber"];
  const caseShapes = ["Round", "Square", "Oval"];
  const strapColors = ["Black", "Brown", "Blue", "Red"];
  const watches = [
    { id: 1, brand: "Rolex", name: "Daytona", price: 12000, rating: 5, img: "rolex.jpg", case: "Gold", strap: "Leather", strapColor: "Black", caseShape: "Round", waterResistant: true, waterDepth: 100 },
    { id: 2, brand: "Omega", name: "Seamaster", price: 8000, rating: 4, img: "omega.jpg", case: "Steel", strap: "Rubber", strapColor: "Blue", caseShape: "Round", waterResistant: true, waterDepth: 200 },
    { id: 3, brand: "TAG Heuer", name: "Carrera", price: 4500, rating: 4.5, img: "tagheuer.jpg", case: "Steel", strap: "Leather", strapColor: "Brown", caseShape: "Round", waterResistant: false, waterDepth: 0 },
    { id: 4, brand: "Casio", name: "G-Shock", price: 200, rating: 4, img: "casio.jpg", case: "Plastic", strap: "Rubber", strapColor: "Black", caseShape: "Square", waterResistant: true, waterDepth: 500 },
  ];

  const filteredWatches = watches
    .filter((watch) => {
      const inBrand = selectedBrand === "All" || watch.brand === selectedBrand;
      const inPriceRange = watch.price >= filters.minPrice && watch.price <= filters.maxPrice;
      const inCaseMaterial = filters.caseMaterial.length === 0 || filters.caseMaterial.includes(watch.case);
      const inStrapMaterial = filters.strapMaterial.length === 0 || filters.strapMaterial.includes(watch.strap);
      const inStrapColor = filters.strapColor.length === 0 || filters.strapColor.includes(watch.strapColor);
      const inCaseShape = filters.caseShape.length === 0 || filters.caseShape.includes(watch.caseShape);
      const isWaterResistantDepth = watch.waterDepth >= filters.waterResistantDepth;
      return (
        inBrand &&
        inPriceRange &&
        inCaseMaterial &&
        inStrapMaterial &&
        inStrapColor &&
        inCaseShape &&
        isWaterResistantDepth
      );
    })
    .sort((a, b) => {
      if (sortOption === "Price: Low to High") return a.price - b.price;
      if (sortOption === "Price: High to Low") return b.price - a.price;
      if (sortOption === "Rating: High to Low") return b.rating - a.rating;
      return 0;
    });

  const paginatedWatches = filteredWatches.slice(
    (currentPage - 1) * watchesPerPage,
    currentPage * watchesPerPage
  );

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
      maxPrice: 15000,
      caseMaterial: [],
      strapMaterial: [],
      strapColor: [],
      caseShape: [],
      waterResistantDepth: 0,
    });
    setSelectedBrand("All");
  };

  const openDetails = (id) => {
    const watch = watches.find((watch) => watch.id === id);
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

  return (
    <div className="watches-container" onScroll={handleScroll}>
      <h1 className="watches-title">Explore Watches by Brand</h1>

      <div className="main-content">
        {/* Filters and Sorting */}
        <div className="filter-sort-container">
          {/* Filters */}
          <div className="filters-container">
            <button className="reset-btn" onClick={resetFilters}>Reset Filters</button>
            <div className="brand-filter">
              <h3>Brands</h3>
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

            <h3>Filters</h3>
            <label className="price">Price Range: ₹{filters.minPrice} - ₹{filters.maxPrice}</label>
            <input
              type="range"
              min="0"
              max="15000"
              step="100"
              value={filters.maxPrice}
              onChange={(e) => setFilters({ ...filters, maxPrice: +e.target.value })}
            />
            <h4>Case Material</h4>
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
            <h4>Strap Color</h4>
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
            <h4>Case Shape</h4>
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
            <h4>Water Resistance Depth (m)</h4>
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
        <div className="watches-grid">
          {paginatedWatches.map((watch) => (
            <div key={watch.id} className="watch-card">
              <img src={watch.img} alt={watch.name} className="watch-image" />
              <h3>{watch.name}</h3>
              <p>{watch.brand}</p>
              <p>₹{watch.price.toLocaleString()}</p>
              <div className="actions">
                <button onClick={() => openDetails(watch.id)} className="view-details">View Details</button>
                <span
                  className={`favorite-icon ${favorites.includes(watch.id) ? "favorited" : ""}`}
                  onClick={() => toggleFavorite(watch.id)}
                >
                  ❤️
                </span>
                <button
                  onClick={() => toggleCompare(watch.id)}
                  className={`compare-btn ${compare.includes(watch.id) ? "compared" : ""}`}
                >
                  {compare.includes(watch.id) ? "Remove from Compare" : "Add to Compare"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Compare Watches */}
      {compare.length > 0 && (
        <div className="compare-section">
          <h2>Compare Watches</h2>
          {compare.map((id) => {
            const watch = watches.find((w) => w.id === id);
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

      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: Math.ceil(filteredWatches.length / watchesPerPage) }).map((_, idx) => (
          <button
            key={idx}
            className={`page-btn ${currentPage === idx + 1 ? "active" : ""}`}
            onClick={() => setCurrentPage(idx + 1)}
          >
            {idx + 1}
          </button>
        ))}
      </div>

      {/* Watch Details Modal */}
      {showDetails && (
        <div className="modal-overlay" onClick={closeDetails}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{showDetails.name}</h2>
            <p>{showDetails.brand}</p>
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
