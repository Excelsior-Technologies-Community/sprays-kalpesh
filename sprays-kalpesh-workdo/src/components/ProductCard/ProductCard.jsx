import React, { useState } from 'react';
import './ProductCard.css';
import { useWishlist } from '../../context/WishlistContext';

const ProductCard = ({ product }) => {
    const {
        name, brand, price, originalPrice,
        rating, reviewCount = 0, badge,
        image, hoverImage, weights
    } = product;

    const [selectedWeight, setSelectedWeight] = useState(weights[0]);
    const { addToWishlist, isInWishlist } = useWishlist();
    const isWishlisted = isInWishlist(product.id);
    const [isCompared, setIsCompared] = useState(false);

    const handleAddToCart = () => {
        alert(`Added "${name}" (${selectedWeight}) to cart!`);
    };

    const renderStars = (score) => {
        return [...Array(5)].map((_, i) => (
            <span key={i} className={`jdgm-star ${i < score ? 'jdgm--on' : 'jdgm--off'}`}></span>
        ));
    };

    return (
        <div className="card product-card-inner">

            {/* ── TOP: badge + action icons ── */}
            <div className="card-top">

                {/* Badge pill (left) */}
                <div className="custom_label">
                    {badge && <span>{badge}</span>}
                </div>

                {/* Action icons (right) */}
                <div className="wish-lbl-wrp">

                    {/* Wishlist */}
                    <div className="pro-wishlist">
                        <label onClick={() => addToWishlist(product)}>
                            <span className={`wishlist-label ${isWishlisted ? 'active' : ''}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 24 24" fill={isWishlisted ? "black" : "none"} stroke="black" strokeWidth="2">
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                </svg>
                            </span>
                        </label>
                    </div>

                    {/* Compare */}
                    <div className="pro-compare">
                        <label onClick={() => setIsCompared(!isCompared)}>
                            <span className={`compare-label ${isCompared ? 'active' : ''}`}>
                                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.80006 12.5C9.66163 12.5 9.52632 12.4585 9.41123 12.3809C9.29614 12.3033 9.20644 12.193 9.15347 12.0639C9.1005 11.9349 9.08664 11.7928 9.11364 11.6558C9.14064 11.5188 9.20728 11.393 9.30515 11.2942L11.6103 8.96804H2.79991C2.61426 8.96804 2.4362 8.89361 2.30493 8.76114C2.17365 8.62866 2.0999 8.44899 2.0999 8.26164C2.0999 8.0743 2.17365 7.89462 2.30493 7.76215C2.4362 7.62967 2.61426 7.55525 2.79991 7.55525H13.3001C13.4386 7.55528 13.5739 7.59672 13.689 7.67435C13.8041 7.75197 13.8938 7.86228 13.9467 7.99134C13.9997 8.1204 14.0136 8.2624 13.9866 8.39941C13.9596 8.53642 13.8929 8.66227 13.795 8.76106L10.295 12.293C10.1637 12.4255 9.9857 12.5 9.80006 12.5ZM11.9001 4.72968C11.9001 4.54233 11.8264 4.36266 11.6951 4.23018C11.5638 4.09771 11.3857 4.02328 11.2001 4.02328H2.3897L4.69485 1.69713C4.82236 1.56391 4.89292 1.38547 4.89133 1.20025C4.88973 1.01504 4.81611 0.837869 4.68632 0.706898C4.55654 0.575927 4.38096 0.501636 4.19742 0.500027C4.01388 0.498417 3.83705 0.569618 3.70503 0.698293L0.204955 4.23026C0.107087 4.32905 0.0404406 4.4549 0.0134427 4.59191C-0.0135551 4.72892 0.000307272 4.87092 0.0532774 4.99998C0.106248 5.12904 0.195947 5.23935 0.311036 5.31697C0.426126 5.3946 0.561438 5.43604 0.699866 5.43607H11.2001C11.3857 5.43607 11.5638 5.36165 11.6951 5.22917C11.8264 5.0967 11.9001 4.91703 11.9001 4.72968Z" fill="currentColor" />
                                </svg>
                            </span>
                        </label>
                    </div>

                    {/* Quick View */}
                    <div className="quickview-btn">
                        <a href="#" style={{ textDecoration: 'none' }} onClick={(e) => e.preventDefault()}>
                            <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.99996 3.15912C5.70988 3.15912 4.66016 4.20885 4.66016 5.49892C4.66016 6.789 5.70988 7.83873 6.99996 7.83873C8.29004 7.83873 9.33977 6.789 9.33977 5.49892C9.33977 4.20885 8.29004 3.15912 6.99996 3.15912ZM6.99996 6.8724C6.24254 6.8724 5.62648 6.25635 5.62648 5.49892C5.62648 4.7415 6.24254 4.12545 6.99996 4.12545C7.75738 4.12545 8.37344 4.7415 8.37344 5.49892C8.37344 6.25635 7.75738 6.8724 6.99996 6.8724Z" fill="currentColor" />
                                <path d="M13.4184 4.21786C13.1537 3.8509 12.6889 3.28735 11.9785 2.68715C11.2954 2.10993 10.561 1.64782 9.79562 1.31368C8.87633 0.912544 7.9357 0.709106 7 0.709106C6.0643 0.709106 5.12367 0.912544 4.2041 1.31368C3.43875 1.64754 2.7043 2.10965 2.02125 2.68715C1.31086 3.28762 0.846016 3.8509 0.581328 4.21786C0.195781 4.7527 0 5.18418 0 5.5C0 5.81582 0.195508 6.24731 0.581602 6.78215C0.846289 7.14911 1.31113 7.71266 2.02152 8.31286C2.70457 8.89008 3.43902 9.35219 4.20437 9.68633C5.12367 10.0875 6.06457 10.2909 7.00027 10.2909C7.93598 10.2909 8.8766 10.0875 9.79617 9.68633C10.5615 9.35247 11.296 8.89036 11.979 8.31286C12.6894 7.71239 13.1543 7.14911 13.4189 6.78215C13.8045 6.24731 14 5.81582 14 5.5C14 5.18418 13.8045 4.7527 13.4184 4.21786ZM11.293 7.62653C10.3592 8.40118 8.85637 9.32457 7 9.32457C5.14363 9.32457 3.64109 8.40118 2.70703 7.62653C1.56406 6.67852 1.00816 5.73625 0.967422 5.5C1.00789 5.26375 1.56406 4.32149 2.70703 3.37348C3.64082 2.59883 5.14363 1.67543 7 1.67543C8.85609 1.67543 10.3589 2.59883 11.293 3.37348C12.4359 4.32149 12.9921 5.26375 13.0326 5.5C12.9918 5.73625 12.4359 6.67852 11.293 7.62653Z" fill="currentColor" />
                            </svg>
                        </a>
                    </div>

                </div>
            </div>

            {/* ── IMAGE (with hover swap) ── */}
            <div className="product-card-image">
                <div className="card__media">
                    <a href="#" className="product__media-item" onClick={(e) => e.preventDefault()}>
                        <img
                            loading="lazy"
                            className="default-img"
                            src={image}
                            alt={name}
                        />
                        {hoverImage && (
                            <img
                                loading="lazy"
                                className="hover-img"
                                src={hoverImage}
                                alt={name}
                            />
                        )}
                    </a>

                    {/* Countdown timer overlay */}
                    {product.showCountdown && (
                        <div className="card-countdown">
                            <div className="countdown-inner">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>
                                <span>142 : 09 : 08 : 38</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* ── CARD BOTTOM ── */}
            <div className="card-bottom">

                {/* Brand + Title */}
                <div className="card-top-inner">
                    <div className="label">{brand}</div>
                    <div className="card-title">
                        <h5 className="product-title">
                            <a href="#">{name}</a>
                        </h5>
                    </div>
                </div>

                {/* Variant + Rating + Price + Cart */}
                <div className="card-bottom-inner">

                    {/* Weight selector */}
                    <div className="product-form__input product-form__input--dropdown">
                        <div className="select select-box">
                            <label>Weight:</label>
                            <select
                                className="select__select"
                                value={selectedWeight}
                                onChange={(e) => setSelectedWeight(e.target.value)}
                            >
                                {weights.map((w) => (
                                    <option key={w} value={w}>{w}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Star rating */}
                    <div className="jdgm-widget jdgm-preview-badge">
                        <div className="jdgm-prev-badge">
                            <span className="jdgm-prev-badge__stars" aria-label={`${rating} stars`}>
                                {renderStars(rating)}
                            </span>
                            {reviewCount > 0 && (
                                <span className="jdgm-prev-badge__text">{reviewCount} reviews</span>
                            )}
                        </div>
                    </div>

                    {/* Price + Add to Cart */}
                    <div className="card-btn-wrapper">

                        <div className="price" role="status">
                            <ins className="price-item--regular">${price.toFixed(2)}</ins>
                            {originalPrice && (
                                <del className="price-item--sale">${originalPrice.toFixed(2)}</del>
                            )}
                        </div>

                        <button
                            type="button"
                            className="btn-secondary cart-btn cartb"
                            onClick={handleAddToCart}
                            aria-label="Add to Cart"
                        >
                            <span>Add to Cart</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.1258 5.12596H2.87416C2.04526 5.12596 1.38823 5.82533 1.43994 6.65262L1.79919 12.4007C1.84653 13.1581 2.47458 13.7481 3.23342 13.7481H10.7666C11.5254 13.7481 12.1535 13.1581 12.2008 12.4007L12.5601 6.65262C12.6118 5.82533 11.9547 5.12596 11.1258 5.12596ZM2.87416 3.68893C1.21635 3.68893 -0.0977 5.08768 0.00571155 6.74226L0.364968 12.4904C0.459638 14.0051 1.71574 15.1851 3.23342 15.1851H10.7666C12.2843 15.1851 13.5404 14.0051 13.635 12.4904L13.9943 6.74226C14.0977 5.08768 12.7837 3.68893 11.1258 3.68893H2.87416Z" fill="white" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.40723 4.40744C3.40723 2.42332 5.01567 0.81488 6.99979 0.81488C8.9839 0.81488 10.5923 2.42332 10.5923 4.40744V5.84447C10.5923 6.24129 10.2707 6.56298 9.87384 6.56298C9.47701 6.56298 9.15532 6.24129 9.15532 5.84447V4.40744C9.15532 3.21697 8.19026 2.2519 6.99979 2.2519C5.80932 2.2519 4.84425 3.21697 4.84425 4.40744V5.84447C4.84425 6.24129 4.52256 6.56298 4.12574 6.56298C3.72892 6.56298 3.40723 6.24129 3.40723 5.84447V4.40744Z" fill="white" />
                            </svg>
                        </button>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductCard;
