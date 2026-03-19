import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import './Wishlist.css';

const Wishlist = () => {
    const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();
    const { addToCart } = useCart();
    const [addedIds, setAddedIds] = useState({});

    const handleAddToCart = (item) => {
        addToCart(item, item.weights?.[0] || '60ml');
        setAddedIds(prev => ({ ...prev, [item.id]: true }));
        setTimeout(() => {
            setAddedIds(prev => ({ ...prev, [item.id]: false }));
        }, 1500);
    };

    const wishlistTotal = wishlistItems.reduce((sum, item) => sum + (item.price || 0), 0);

    return (
        <main className="wl-page">
            <div className="wl-container">

                {/* ── LEFT ── */}
                <div className="wl-left">

                    {/* Top bar */}
                    <div className="wl-topbar">
                        <Link to="/shop" className="wl-continue-link">
                            <span className="wl-cs-icon">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 8 8 12 12 16" />
                                    <line x1="16" y1="12" x2="8" y2="12" />
                                </svg>
                            </span>
                            Continue shopping
                        </Link>
                    </div>

                    <h1 className="wl-title">Your wishlist</h1>

                    {wishlistItems.length === 0 ? (
                        <div className="wl-empty">
                            <div className="wl-empty-icon">
                                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.5">
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                                </svg>
                            </div>
                            <p>Your wishlist is currently empty.</p>
                            <Link to="/shop" className="wl-btn-shop">Start Shopping</Link>
                        </div>
                    ) : (
                        <>
                            {/* Table Header */}
                            <div className="wl-table-header">
                                <div className="wl-col wl-col-image">PRODUCT IMAGE</div>
                                <div className="wl-col wl-col-name">PRODUCT NAME / PRICE</div>
                                <div className="wl-col wl-col-action">ADD TO CART</div>
                                <div className="wl-col wl-col-del"></div>
                            </div>

                            {/* Items */}
                            <div className="wl-items-list">
                                {wishlistItems.map((item) => (
                                    <div key={item.id} className="wl-item-row">

                                        {/* Image */}
                                        <div className="wl-col wl-col-image">
                                            <div className="wl-item-img">
                                                <img src={item.image} alt={item.name} />
                                            </div>
                                        </div>

                                        {/* Details + Price */}
                                        <div className="wl-col wl-col-name">
                                            <div className="wl-item-details">
                                                <span className="wl-item-brand">{item.brand}</span>
                                                <h3 className="wl-item-name">{item.name}</h3>
                                                {item.weights && (
                                                    <p className="wl-item-meta">
                                                        Weight: <span>{item.weights[0]}</span>
                                                    </p>
                                                )}
                                                {item.originalPrice && (
                                                    <del className="wl-item-old-price">${item.originalPrice.toFixed(2)}</del>
                                                )}
                                                <span className="wl-item-price wl-item-price-inline">${item.price?.toFixed(2)}</span>
                                            </div>
                                        </div>

                                        {/* Add to Cart */}
                                        <div className="wl-col wl-col-action">
                                            <button
                                                className={`wl-add-btn${addedIds[item.id] ? ' added' : ''}`}
                                                onClick={() => handleAddToCart(item)}
                                            >
                                                {addedIds[item.id] ? (
                                                    <>
                                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                            <polyline points="20 6 9 17 4 12"/>
                                                        </svg>
                                                        Added!
                                                    </>
                                                ) : (
                                                    'Add To Cart'
                                                )}
                                            </button>
                                        </div>

                                        {/* Delete */}
                                        <div className="wl-col wl-col-del">
                                            <button
                                                className="wl-delete-btn"
                                                onClick={() => removeFromWishlist(item.id)}
                                                aria-label="Remove from wishlist"
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
                        </>
                    )}
                </div>

                {/* ── RIGHT SIDEBAR ── */}
                {wishlistItems.length > 0 && (
                    <div className="wl-right">

                        {/* Summary */}
                        <div className="wl-summary-box">
                            <h3 className="wl-summary-title">Wishlist Summary</h3>

                            <div className="wl-summary-row">
                                <span className="wl-summary-label">Items</span>
                                <span className="wl-summary-value">{wishlistItems.length}</span>
                            </div>
                            <div className="wl-summary-row">
                                <span className="wl-summary-label">Total value</span>
                                <span className="wl-summary-value">${wishlistTotal.toFixed(2)}</span>
                            </div>

                            <p className="wl-summary-note">
                                Prices may vary. Taxes and shipping calculated at{' '}
                                <a href="#" className="wl-summary-link">checkout</a>
                            </p>

                            <button
                                className="wl-move-all-btn"
                                onClick={() => {
                                    wishlistItems.forEach(item => addToCart(item, item.weights?.[0] || '60ml'));
                                }}
                            >
                                Move All To Cart
                            </button>

                            <button className="wl-clear-btn" onClick={clearWishlist}>
                                Clear Wishlist
                            </button>
                        </div>

                    </div>
                )}

            </div>
        </main>
    );
};

export default Wishlist;
