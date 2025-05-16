import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './FruitsAndVegetables.css';
import { addToCart } from './store';

function FruitsAndVegetables() {
  const fruitProducts = useSelector((state) => state.products.fruits);
  const dispatch = useDispatch();

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = fruitProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(fruitProducts.length / itemsPerPage);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const FruitItemsList = currentItems.map((product, index) => (
    <div className="product-card" key={`fruit-${index}`}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Price: ₹{product.price}</p>
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  ));

  return (
    <div className="fruits-vegetables-container">
      <div className="category-section">
        <h2>Fruits</h2>
        <div className="products-container">{FruitItemsList}</div>
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
    </div>
  );
}

export default FruitsAndVegetables;
