import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './VegItems.css'; // Importing the CSS file
import { addToCart } from './store';

function VegItems() {
  // Fetch veg products from Redux store
  let vegProducts = useSelector((globalstate) => globalstate.products.veg);
  const dispatch = useDispatch();

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = vegProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(vegProducts.length / itemsPerPage);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  // Map through veg products and create a card for each
  let VegItemsList = currentItems.map((product, index) => (
    <div className="veg-card" key={index}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Price: ₹{product.price}</p>
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  ));

  return (
    <div className="veg-items-container">
      <h1>These are Veg Products</h1>
      <div className="veg-products-container">{VegItemsList}</div>
      <div className="pagination-container">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={currentPage === index + 1 ? 'current-page' : ''}
            onClick={() => goToPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default VegItems;
