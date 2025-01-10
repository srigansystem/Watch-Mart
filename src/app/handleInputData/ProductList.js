"use client";
import React, { useContext, useState } from "react";
import "./ProductList.css";
import DataContext from "../context/dataContext";



const ProductList = () => {
  const {
    extractinginputfile,
    setDiscountValues,
    dataset,
    setDataSet,
    setAddbtnclicked,
    setEditbtnclicked,
    setName,
    setImage,
    setPrice,
    setDetails,
    setId,
    setLoading,
    setStock,
    discountType,
    setDiscountType,
    setOffer,
    addbtnclicked,
    editbtnclicked
  } = useContext(DataContext);

  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [filterStock, setFilterStock] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const itemsPerPage = 10;
  
  const [bulkDiscountValue, setBulkDiscountValue] = useState(""); // Bulk discount input field value

  const handleSearch = (e) => setSearchQuery(e.target.value.toLowerCase());
  const handleSort = (e) => setSortBy(e.target.value);
  const handleFilterStock = (e) => setFilterStock(e.target.value);

  const openDeleteModal = (product) => {
    setProductToDelete(product);
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
    setProductToDelete(null);
  };

  const deleteProduct = async () => {
    const updatedDataset = dataset.filter((product) => product.id !== productToDelete.id);
    console.log("ieryrgcbkeudcgryk3irycg",updatedDataset);
    
    setDataSet(updatedDataset);
    closeDeleteModal();
  };

  // const handleDiscountChange = (productId, e) => {
  //   const value = e.target.value;
  //   setDiscountValues((prevState) => ({
  //     ...prevState,
  //     [productId]: value,
  //   }));
  // };



  const handleDiscountTypeChange = (e) => setDiscountType(e.target.value);

  const calculateDiscountedPrice = (price, discount, discountType) => {
    if (discountType === "percentage") {
      return price - (price * discount) / 100;
    }
    return price - discount;
  };

  const applyDiscount = (product) => {
    const discountValue = bulkDiscountValue || 0;
    return calculateDiscountedPrice(product.price, discountValue, discountType);
  };

  const displayDiscount = () => {
    const discountValue = bulkDiscountValue || 0;
    return discountType === "percentage"
      ? `${discountValue}% off`
      : `₹. ${discountValue} off`;
  };


  const applyBulkDiscount = () => {
    if (bulkDiscountValue) {
      const parsedDiscount = parseFloat(bulkDiscountValue);
      
        setDiscountValues(parsedDiscount);
        console.log("sk",bulkDiscountValue);
        
        dataset.map((product)=>{
          if(product.category=="Analog"){
            product["offer"]=displayDiscount(),product["currentprice"]=applyDiscount(product)
        }});
        extractinginputfile(dataset,false)
         
      }
  };

  const filteredProducts = dataset
    .filter((product) => product.name.toLowerCase().includes(searchQuery))
    .filter((product) => {
      if (filterStock === "inStock") return product.stock > 0;
      if (filterStock === "OutOfStock") return product.stock == 0;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "price") return a.price - b.price;
      if (sortBy === "stock") return b.stock - a.stock;
      return 0;
    });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const addbtn = () => setAddbtnclicked(true);

  const editbtn = (id, name, image, price, details, stock, offer,currentprice) => {
    setEditbtnclicked(true);
    setId(id);
    setName(name);
    setImage(image);
    setPrice(price);
    setDetails(details);
    setStock(stock);
    setOffer(offer);
    
  //   console.log("test",discountValues);
  //   const applyDiscount = (product) => {
  //     const discountValue = product.offer || 0;
  //     return calculateDiscountedPrice(product.price, discountValue, discountType);
  //   };
  

  //   setDiscountValues(discountValues);
  //   // setCategory(category);
  console.log();
  
};

  return (
    <div className="product-admin" style={{filter: `blur(${addbtnclicked || editbtnclicked? "0.5px" : "0px"})`,
    transition: "filter 0.3s ease",}}>
      <h1 className="page-heading">Product Management</h1>

      <div className="controls">
        <input
          type="text" className="search-box"
          placeholder="Search products..."
          onChange={handleSearch}
        />
        <select className="sort-dropdown" value={sortBy} onChange={handleSort}>
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="stock">Stock</option>
        </select>
        <select
          className="filter-dropdown"
          value={filterStock}
          onChange={handleFilterStock}
        >
          <option value="all">All Products</option>
          <option value="inStock">In Stock</option>
          <option value="OutOfStock">Out of Stock</option>
        </select>
      </div>

      <div className="discount-controls">
        <select
          className="discount-type-dropdown"
          value={discountType}
          onChange={handleDiscountTypeChange}
        >
          <option value="percentage">Percentage</option>
          <option value="amount">Amount</option>
        </select>

        <div className="bulk-discount">
          <input
            type="number"
            value={bulkDiscountValue}
            onChange={(e)=>setBulkDiscountValue(e.target.value)}
            placeholder="Enter Bulk Discount"
          />
          <button className="btn apply-bulk-discount" onClick={applyBulkDiscount}>
            Apply Bulk Discount
          </button>
        </div>
      </div>

      <div id="product-list">
        {paginatedProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <div className="product-details">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">
                {product.currentprice > 0 ? (
                  <>
                    <span className="product-price discounted">
                      ₹. {product.price}
                    </span>
                    ₹. {product.currentprice}
                  </>
                ) : (
                  `₹. ${product.price}`
                )}
              </p>
              <p className={`product-stock ${product.stock > 0 ? "in-stock" : "out-of-stock"}`}>
                {product.stock > 0 ? "In Stock" : "Out of Stock"}
              </p>
              {/* <p className="product-category">Category: {product.category}</p> */}
              {product.currentprice < product.price ? (
        <p className="product-discount">{product.offer}</p>):(<p style={{marginTop:"40px"}}></p>)
      }

              
            </div>
            <div className="product-actions">
              <button
                className="btn edit"
                onClick={() =>
                  editbtn(
                    product.id,
                    product.name,
                    product.image,
                    product.price,
                    product.details,
                    product.stock,
                    product.offer,
                    product.currentprice
                  )
                }
              >
                Edit
              </button>
              <button className="btn delete" onClick={() => openDeleteModal(product)}>
                Delete
              </button>
            </div>

            
          </div>
        ))}
      </div>

      {isDeleteModalOpen && (
        <div className="delete-modal">
          <div className="modal-content">
            <h2>Are you sure you want to delete this product?</h2>
            <button onClick={deleteProduct} className="btn delete">Yes, Delete</button>
            <button onClick={closeDeleteModal} className="btn cancel">Cancel</button>
          </div>
        </div>
      )}

      <div className="pagination">
        {[...Array(totalPages).keys()].map((num) => (
          <button
            key={num}
            className={`page-btn ${currentPage === num + 1 ? "active" : ""}`}
            onClick={() => setCurrentPage(num + 1)}
          >
            {num + 1}
          </button>
        ))}
      </div>
          <button className="add-btn" onClick={addbtn}>
            Add Product
          </button>
      
    </div>
  );
};

export default ProductList;
