import React, { useEffect, useState } from 'react';
import './ProductWatches.css';
import Image from "next/image";
const ProductWatches = () => {
  const [watches, setWatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the data from the GET route
    const fetchWatchesData = async () => {
      try {
        const response = await fetch('/api');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setWatches(data.fileContents);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWatchesData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="watches-container">
      <h1 className="watches-title">Product Watches</h1>
      <div className="watches-grid">
        {watches.map((watch) => (
          <div key={watch.id} className="watch-card">
            <Image className="watch-image" src={watch.image} alt={watch.name} width={100}
                    height="100"/>
            <h3>{watch.name}</h3>
            <p>{watch.details}</p>
            <p>{watch.category}</p>
            <p className="price">Price: {watch.price}</p>
            <div className="actions">
              <button className="view-details">View Details</button>
              <button className="view-details">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button className="page-btn">1</button>
        <button className="page-btn">2</button>
      </div>
    </div>
  );
};

export default ProductWatches;
