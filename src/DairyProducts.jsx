import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './dairyproducts.css'; // Import the specific CSS file for dairy products
import { addToCart } from './store';

const DairyProducts = () => {
    const dairyProducts = useSelector((state) => state.products.dairy);
    const dispatch = useDispatch();

    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = dairyProducts.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(dairyProducts.length / itemsPerPage);

    const goToPage = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="dairyproducts-container">
            <h1>Milk Products</h1>
            <div className="dairyproducts-grid">
                {currentItems.map((product, index) => (
                    <div key={`dairy-${index}`} className="dairyproducts-card">
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>Price: ₹{product.price}</p>
                        <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
                    </div>
                ))}
            </div>
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
};

export default DairyProducts;
