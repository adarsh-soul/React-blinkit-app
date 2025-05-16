import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './NonVegItems.css';
import { addToCart } from './store';

function NonVegItems() {
  let nonVegProducts = useSelector((globalstate) => globalstate.products.nonVeg);
  const dispatch = useDispatch();

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = nonVegProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(nonVegProducts.length / itemsPerPage);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  let NonVegItemsList = currentItems.map((product, index) => (
    <div className="nonveg-card" key={index}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Price: ₹{product.price}</p>
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  ));

  return (
    <div className="nonveg-items-container">
      <h1>These are Non-Veg Products</h1>
      <div className="nonveg-products-container">{NonVegItemsList}</div>
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

export default NonVegItems;
