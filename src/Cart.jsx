// Cart.jsx

import React,{ useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import QRCode from "react-qr-code";
import "./Cart.css";
import { clearCart, decrementCart, incrementCart, orderDetails, removeCart } from "./store";

function Cart() {
  const cartObjects = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentDiscount, setDiscount] = useState(0);
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [couponName, setCouponName] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const couponRef = useRef();

  const applyCoupon = () => {
    const couponCode = couponRef.current.value.trim().toUpperCase();
    switch (couponCode) {
      case "SOUL10":
        setCouponDiscount(10);
        setCouponName("Save 10%");
        break;
      case "SOUL20":
        setCouponDiscount(20);
        setCouponName("Save 20%");
        break;
      case "SOUL30":
        setCouponDiscount(30);
        setCouponName("Save 30%");
        break;
      default:
        alert("Invalid coupon code. Please try again.");
    }
  };

  const calculateAmount = () => {
    const totalPrice = cartObjects.reduce((total, item) => total + item.price * item.quantity, 0);
    const discountAmount = (totalPrice * (currentDiscount + couponDiscount)) / 100;
    const priceAfterDiscount = totalPrice - discountAmount;
    const tax = (priceAfterDiscount * 10) / 100;
    const finalPrice = priceAfterDiscount + tax;
    return { totalPrice, priceAfterDiscount, tax, finalPrice, discountAmount };
  };

  const { totalPrice, priceAfterDiscount, tax, finalPrice, discountAmount } = calculateAmount();

  const handleCompletePurchase = () => {
    const orderId = Math.floor(100000 + Math.random() * 900000);
    const purchaseDate = new Date().toLocaleDateString();
    const purchaseDetails = {
      order_id: orderId,
      date: purchaseDate,
      items: [...cartObjects],
      finalPrice,
    };

    dispatch(clearCart());
    dispatch(orderDetails(purchaseDetails));
    alert("Purchase completed successfully!");
    setTimeout(() => {
      navigate("/orders");
    }, 2000);
  };

  const handleCardPayment = (e) => {
    e.preventDefault();
    // Implement your actual card payment processing logic here.
    alert("Payment successful via Card!"); // Placeholder
    handleCompletePurchase();
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Cart</h1>

      {cartObjects.length === 0 ? (
        <p className="empty-cart">Your cart is empty!</p>
      ) : (
        <>
          <div className="cart-list">
            {cartObjects.map((item, index) => (
              <div className="cart-item" key={index}>
                <div className="cart-item-image-container">
                  <img
                    className="cart-item-image"
                    src={item.image}
                    alt={item.name}
                  />
                </div>
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-price">₹{item.price}</p>
                  <div className="cart-item-quantity-controls">
                    <button onClick={() => dispatch(decrementCart(item))} className="quantity-btn">-</button>
                    <span className="cart-item-quantity">{item.quantity}</span>
                    <button onClick={() => dispatch(incrementCart(item))} className="quantity-btn">+</button>
                  </div>
                  <button onClick={() => dispatch(removeCart(item))} className="remove-cart-btn">Remove</button>
                </div>
              </div>
            ))}
          </div>

          <div className="discount-coupon-section">
            <h2 className="section-title">Apply Discounts and Coupons</h2>
            <div className="discounts">
              <button onClick={() => setDiscount(10)} className="discount-btn">10% Discount</button>
              <button onClick={() => setDiscount(20)} className="discount-btn">20% Discount</button>
              <button onClick={() => setDiscount(30)} className="discount-btn">30% Discount</button>
            </div>
            <div className="coupon-input-container">
              <input type="text" ref={couponRef} className="coupon-input" placeholder="Enter coupon code" />
              <button onClick={applyCoupon} className="apply-coupon-btn">Apply Coupon</button>
            </div>
            {couponName && <p className="coupon-text">Applied Coupon: <strong>{couponName}</strong></p>}

            <p>Total Discount ({currentDiscount + couponDiscount}%): - ₹{discountAmount.toFixed(2)}</p>


          </div>

          <div className="order-summary">
            <h2 className="section-title">Order Summary</h2>
            <p>Total Price: ₹{totalPrice.toFixed(2)}</p>
            <p>Price After Discount: ₹{priceAfterDiscount.toFixed(2)}</p> {/* Simplified */}
            <p>Tax (10%): ₹{tax.toFixed(2)}</p>
            <p className="final-price">Final Price: ₹{finalPrice.toFixed(2)}</p>
          </div>

          <h2>Select payment method:</h2>
          <div className="payment-buttons">
            <button onClick={() => setPaymentMethod("qr")} className={`payment-btn ${paymentMethod === 'qr' ? 'active' : ''}`}>QR Code</button>
            <button onClick={() => setPaymentMethod("card")} className={`payment-btn ${paymentMethod === 'card' ? 'active' : ''}`}>Card</button>
          </div>

          {paymentMethod === "qr" && (
            <>
              <h4>Scan UPI QR to pay ₹{finalPrice}</h4>
              <QRCode value={`upi://pay?pa=9640984355@ibl&pn=adarshstore&am=${finalPrice}&cu=INR`} />
              <p>UPI ID: adarsh@ibl</p> {/* Replace with your UPI ID */}
              <button className="btn btn-success mt-2" onClick={handleCompletePurchase}>Complete Purchase</button>
            </>
          )}

          {paymentMethod === "card" && (
            <div className="card-form mt-3">
              <h4>Enter Card Details to pay ₹{finalPrice.toFixed(2)}</h4>
              <form className="needs-validation" noValidate onSubmit={handleCompletePurchase}>
                 <div className="mb-3">
                  <label className="form-label">Card Number</label>
                  <input type="text" className="form-control" required placeholder="1234 5678 9012 3456" maxLength="19" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Card Holder Name</label>
                  <input type="text" className="form-control" required placeholder="Your Name" />
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Expiry</label>
                    <input type="text" className="form-control" required placeholder="MM/YY" maxLength="5" />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">CVV</label>
                    <input type="password" className="form-control" required placeholder="123" maxLength="3" />
                  </div>
                </div>
                <button type="submit" className="btn btn-success w-100">Pay ₹{finalPrice.toFixed(2)}</button>
              </form>
            </div>
          )}
        </>
      )}
    </div>
  );
}


export default Cart;