import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, cartSubtotal } = useCart();
    const [specialInstructions, setSpecialInstructions] = useState('');
    const [giftWrapAdded, setGiftWrapAdded] = useState(false);

    const GIFT_WRAP_PRICE = 5.00;

    const total = cartSubtotal + (giftWrapAdded ? GIFT_WRAP_PRICE : 0);

    return (
        <main className="cart-page">
            <div className="cart-container">

                {/* ── LEFT: Cart Content ── */}
                <div className="cart-left">

                    {/* Top bar */}
                    <div className="cart-topbar">
                        <Link to="/shop" className="continue-shopping-link">
                            <span className="cs-icon">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 8 8 12 12 16" />
                                    <line x1="16" y1="12" x2="8" y2="12" />
                                </svg>
                            </span>
                            Continue shopping
                        </Link>
                    </div>

                    <h1 className="cart-title">Your cart</h1>

                    {cartItems.length === 0 ? (
                        <div className="cart-empty">
                            <div className="cart-empty-icon">
                                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.5">
                                    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                                    <line x1="3" y1="6" x2="21" y2="6"/>
                                    <path d="M16 10a4 4 0 01-8 0"/>
                                </svg>
                            </div>
                            <p>Your cart is currently empty.</p>
                            <Link to="/shop" className="btn-go-shop">Start Shopping</Link>
                        </div>
                    ) : (
                        <>
                            {/* Table Header */}
                            <div className="cart-table-header">
                                <div className="ct-col ct-col-image">PRODUCT IMAGE</div>
                                <div className="ct-col ct-col-name">PRODUCT NAME</div>
                                <div className="ct-col ct-col-price">PRICE</div>
                                <div className="ct-col ct-col-qty">QUANTITY</div>
                                <div className="ct-col ct-col-total">TOTAL</div>
                            </div>

                            {/* Cart Items */}
                            <div className="cart-items-list">
                                {cartItems.map((item) => (
                                    <div key={`${item.id}-${item.weight}`} className="cart-item-row">

                                        {/* Image */}
                                        <div className="ct-col ct-col-image">
                                            <div className="cart-item-img">
                                                <img src={item.image} alt={item.name} />
                                            </div>
                                        </div>

                                        {/* Name / Details */}
                                        <div className="ct-col ct-col-name">
                                            <div className="cart-item-details">
                                                <span className="cart-item-brand">{item.brand}</span>
                                                <h3 className="cart-item-name">{item.name}</h3>
                                                <p className="cart-item-meta">Weight:<span>{item.weight}</span></p>
                                                {item.color && <p className="cart-item-meta">Color:<span>{item.color}</span></p>}
                                            </div>
                                        </div>

                                        {/* Price */}
                                        <div className="ct-col ct-col-price">
                                            <span className="cart-item-price">${item.price.toFixed(2)}</span>
                                        </div>

                                        {/* Quantity */}
                                        <div className="ct-col ct-col-qty">
                                            <div className="qty-control">
                                                <button
                                                    className="qty-btn"
                                                    onClick={() => updateQuantity(item.id, item.weight, -1)}
                                                    aria-label="Decrease quantity"
                                                >
                                                    <svg width="10" height="2" viewBox="0 0 10 2" fill="none">
                                                        <line x1="0" y1="1" x2="10" y2="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                    </svg>
                                                </button>
                                                <span className="qty-value">{item.quantity}</span>
                                                <button
                                                    className="qty-btn"
                                                    onClick={() => updateQuantity(item.id, item.weight, 1)}
                                                    aria-label="Increase quantity"
                                                >
                                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                        <line x1="5" y1="0" x2="5" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        <line x1="0" y1="5" x2="10" y2="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>

                                        {/* Line Total + Delete */}
                                        <div className="ct-col ct-col-total">
                                            <span className="cart-item-total">${(item.price * item.quantity).toFixed(2)}</span>
                                            <button
                                                className="delete-btn"
                                                onClick={() => removeFromCart(item.id, item.weight)}
                                                aria-label="Remove item"
                                            >
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="3 6 5 6 21 6"/>
                                                    <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/>
                                                    <line x1="10" y1="11" x2="10" y2="17"/>
                                                    <line x1="14" y1="11" x2="14" y2="17"/>
                                                </svg>
                                            </button>
                                        </div>

                                    </div>
                                ))}
                            </div>

                            {/* Gift Wrap Banner */}
                            <div className="gift-wrap-banner">
                                <div className="gift-wrap-left">
                                    <span className="gift-icon">
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 12 20 22 4 22 4 12"/>
                                            <rect x="2" y="7" width="20" height="5"/>
                                            <line x1="12" y1="22" x2="12" y2="7"/>
                                            <path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z"/>
                                            <path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"/>
                                        </svg>
                                    </span>
                                    <div>
                                        <p className="gift-wrap-text">Add a Gift Wrap to your order, For</p>
                                        <p className="gift-wrap-price">${GIFT_WRAP_PRICE.toFixed(2)}</p>
                                    </div>
                                </div>
                                <button
                                    className={`gift-wrap-btn ${giftWrapAdded ? 'added' : ''}`}
                                    onClick={() => setGiftWrapAdded(!giftWrapAdded)}
                                >
                                    {giftWrapAdded ? 'Remove Gift Wrap' : 'Add A Gift Wrap'}
                                </button>
                            </div>
                        </>
                    )}
                </div>

                {/* ── RIGHT: Order Summary ── */}
                {cartItems.length > 0 && (
                    <div className="cart-right">

                        {/* Special Instructions */}
                        <div className="order-instructions">
                            <h3 className="instructions-title">Order special instructions</h3>
                            <textarea
                                className="instructions-textarea"
                                placeholder="Order special instructions"
                                value={specialInstructions}
                                onChange={(e) => setSpecialInstructions(e.target.value)}
                                rows={4}
                            />
                        </div>

                        {/* Summary Box */}
                        <div className="order-summary-box">
                            <div className="summary-row">
                                <span className="summary-label">Subtotal</span>
                                <span className="summary-value">${cartSubtotal.toFixed(2)}</span>
                            </div>
                            {giftWrapAdded && (
                                <div className="summary-row">
                                    <span className="summary-label">Gift Wrap</span>
                                    <span className="summary-value">${GIFT_WRAP_PRICE.toFixed(2)}</span>
                                </div>
                            )}
                            <p className="summary-note">
                                Taxes and shipping calculated at checkout.
                            </p>
                            <button
                                className="checkout-btn"
                                onClick={() => alert('Checkout coming soon! Integration with payment gateway required.')}
                            >
                                Proceed To Checkout
                            </button>
                        </div>

                    </div>
                )}

            </div>
        </main>
    );
};

export default Cart;
