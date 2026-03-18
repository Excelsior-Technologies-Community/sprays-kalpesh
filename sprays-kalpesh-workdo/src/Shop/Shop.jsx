import React, { useState, useMemo } from 'react';
import './Shop.css';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard/ProductCard';
import ExploringVersatility from '../components/ExploringVersatility/ExploringVersatility';

const Shop = () => {
    // ── STATE ──
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedWeights, setSelectedWeights] = useState([]);
    const [availability, setAvailability] = useState({ inStock: false, outOfStock: false });
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(150);
    const [sortBy, setSortBy] = useState('alphabetical-az');
    const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

    // Collapsible filter sections: true = open, false = collapsed
    const [openSections, setOpenSections] = useState({
        availability: true,
        price: true,
        brand: true,
        weight: true,
    });

    const toggleSection = (key) =>
        setOpenSections(prev => ({ ...prev, [key]: !prev[key] }));

    // ── DERIVED DATA ──
    const allBrands = useMemo(() => [...new Set(products.map(p => p.brand))], []);
    const allWeights = useMemo(() => {
        const weights = new Set();
        products.forEach(p => p.weights.forEach(w => weights.add(w)));
        return [...weights].sort();
    }, []);

    const highestPrice = useMemo(() => Math.max(...products.map(p => p.price)), []);

    // ── FILTER LOGIC ──
    const filteredProducts = useMemo(() => {
        let result = [...products];

        if (selectedBrands.length > 0) result = result.filter(p => selectedBrands.includes(p.brand));
        if (selectedWeights.length > 0) result = result.filter(p => p.weights.some(w => selectedWeights.includes(w)));

        if (availability.inStock && !availability.outOfStock) result = result.filter(p => p.reviewCount >= 0);
        if (!availability.inStock && availability.outOfStock) result = result.filter(p => p.reviewCount < 0);

        result = result.filter(p => p.price >= minPrice && p.price <= maxPrice);

        switch (sortBy) {
            case 'price-low-high': result.sort((a, b) => a.price - b.price); break;
            case 'price-high-low': result.sort((a, b) => b.price - a.price); break;
            case 'alphabetical-az': result.sort((a, b) => a.name.localeCompare(b.name)); break;
            case 'alphabetical-za': result.sort((a, b) => b.name.localeCompare(a.name)); break;
            default: break;
        }
        return result;
    }, [selectedBrands, selectedWeights, availability, minPrice, maxPrice, sortBy]);

    const handleBrandToggle = (brand) =>
        setSelectedBrands(prev => prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]);

    const handleWeightToggle = (weight) =>
        setSelectedWeights(prev => prev.includes(weight) ? prev.filter(w => w !== weight) : [...prev, weight]);

    const inStockCount = products.length;
    const outOfStockCount = 0;
    const availabilitySelected = (availability.inStock ? 1 : 0) + (availability.outOfStock ? 1 : 0);

    return (
        <main className="shop-main">
            {/* ── TOP BANNER ── */}
            <section className="common-banner-section">
                <div className="shop-container">
                    <a className="back-btn" href="/">
                        <span className="svg-ic">
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="5" viewBox="0 0 11 5" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M10.5791 2.28954C10.5791 2.53299 10.3818 2.73035 10.1383 2.73035L1.52698 2.73048L2.5628 3.73673C2.73742 3.90636 2.74146 4.18544 2.57183 4.36005C2.40219 4.53467 2.12312 4.53871 1.9485 4.36908L0.133482 2.60587C0.0480403 2.52287 -0.000171489 2.40882 -0.000171488 2.2897C-0.000171486 2.17058 0.0480403 2.05653 0.133482 1.97353L1.9485 0.210321C2.12312 0.0406877 2.40219 0.044729 2.57183 0.219347C2.74146 0.393966 2.73742 0.673036 2.5628 0.842669L1.52702 1.84888L10.1383 1.84875C10.3817 1.84874 10.5791 2.04609 10.5791 2.28954Z" fill="white"></path>
                            </svg>
                        </span>
                        Back to Return
                    </a>
                    <h2 className="heading">Men's Fragrances</h2>
                </div>
            </section>

            {/* ── PRODUCT GRID + SIDEBAR ── */}
            <section className="product-listing-section">
                <div className="shop-container">
                    {/* Mobile Filter Button */}
                    <button
                        className="mobile-filter-trigger"
                        onClick={() => setIsMobileFiltersOpen(true)}
                    >
                        <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                            <path d="M15.75 3H2.25L7.65 9.42V13.5L10.35 15V9.42L15.75 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Filters
                    </button>

                    <div className={`filter-overlay ${isMobileFiltersOpen ? 'active' : ''}`} onClick={() => setIsMobileFiltersOpen(false)}></div>

                    <div className="shop-layout">
                        {/* ── SIDEBAR ── */}
                        <aside className={`sidebar-filters ${isMobileFiltersOpen ? 'open' : ''}`}>

                            <div className="sidebar-top-row">
                                <h4 className="filter-main-title">Filters</h4>
                                <button className="close-filters-btn" onClick={() => setIsMobileFiltersOpen(false)}>
                                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                                        <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </button>
                            </div>
                            <hr className="sidebar-divider" />

                            {/* Availability */}
                            <div className="filter-widget">
                                <div className="filter-widget-header" onClick={() => toggleSection('availability')}>
                                    <h5 className="acnav-label">AVAILABILITY</h5>
                                    <button className="collapse-btn" aria-label="toggle">
                                        {openSections.availability ? (
                                            <svg width="12" height="2" viewBox="0 0 12 2" fill="none"><line x1="0" y1="1" x2="12" y2="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                                        ) : (
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><line x1="6" y1="0" x2="6" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><line x1="0" y1="6" x2="12" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                                        )}
                                    </button>
                                </div>
                                {openSections.availability && (
                                    <div className="filter-widget-body">
                                        <div className="filter-meta-row">
                                            <span className="filter-selected-count">{availabilitySelected} selected</span>
                                            {availabilitySelected > 0 && (
                                                <button className="filter-reset-btn" onClick={() => setAvailability({ inStock: false, outOfStock: false })}>Reset</button>
                                            )}
                                        </div>
                                        <div className="filter-list">
                                            <label className="facet-checkbox">
                                                <input type="checkbox" checked={availability.inStock} onChange={() => setAvailability(prev => ({ ...prev, inStock: !prev.inStock }))} />
                                                <span className="check-label">In stock <em>({inStockCount})</em></span>
                                            </label>
                                            <label className="facet-checkbox">
                                                <input type="checkbox" checked={availability.outOfStock} onChange={() => setAvailability(prev => ({ ...prev, outOfStock: !prev.outOfStock }))} />
                                                <span className="check-label">Out of stock <em>({outOfStockCount})</em></span>
                                            </label>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <hr className="filter-divider" />

                            {/* Price */}
                            <div className="filter-widget">
                                <div className="filter-widget-header" onClick={() => toggleSection('price')}>
                                    <h5 className="acnav-label">PRICE</h5>
                                    <button className="collapse-btn" aria-label="toggle">
                                        {openSections.price ? (
                                            <svg width="12" height="2" viewBox="0 0 12 2" fill="none"><line x1="0" y1="1" x2="12" y2="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                                        ) : (
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><line x1="6" y1="0" x2="6" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><line x1="0" y1="6" x2="12" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                                        )}
                                    </button>
                                </div>
                                {openSections.price && (
                                    <div className="filter-widget-body">
                                        <div className="filter-meta-row">
                                            <span className="filter-highest-price">The highest price is <strong>${highestPrice.toFixed(2)}</strong></span>
                                            <button className="filter-reset-btn" onClick={() => { setMinPrice(0); setMaxPrice(highestPrice); }}>Reset</button>
                                        </div>
                                        <div className="price-slider-wrapper">
                                            <input
                                                type="range"
                                                min="0"
                                                max={highestPrice}
                                                value={maxPrice}
                                                onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                                                className="price-slider"
                                            />
                                        </div>
                                        <div className="price-inputs-row">
                                            <div className="price-input-group">
                                                <label>Min price:</label>
                                                <input
                                                    type="number"
                                                    className="price-input"
                                                    value={minPrice}
                                                    min="0"
                                                    max={maxPrice}
                                                    onChange={(e) => setMinPrice(parseInt(e.target.value) || 0)}
                                                />
                                            </div>
                                            <div className="price-input-group">
                                                <label>Max price:</label>
                                                <input
                                                    type="number"
                                                    className="price-input"
                                                    value={maxPrice}
                                                    min={minPrice}
                                                    max={highestPrice}
                                                    onChange={(e) => setMaxPrice(parseInt(e.target.value) || highestPrice)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <hr className="filter-divider" />

                            {/* Brand */}
                            <div className="filter-widget">
                                <div className="filter-widget-header" onClick={() => toggleSection('brand')}>
                                    <h5 className="acnav-label">BRAND</h5>
                                    <button className="collapse-btn" aria-label="toggle">
                                        {openSections.brand ? (
                                            <svg width="12" height="2" viewBox="0 0 12 2" fill="none"><line x1="0" y1="1" x2="12" y2="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                                        ) : (
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><line x1="6" y1="0" x2="6" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><line x1="0" y1="6" x2="12" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                                        )}
                                    </button>
                                </div>
                                {openSections.brand && (
                                    <div className="filter-widget-body">
                                        {selectedBrands.length > 0 && (
                                            <div className="filter-meta-row">
                                                <span className="filter-selected-count">{selectedBrands.length} selected</span>
                                                <button className="filter-reset-btn" onClick={() => setSelectedBrands([])}>Reset</button>
                                            </div>
                                        )}
                                        <div className="filter-list max-height-scroll">
                                            {allBrands.map(brand => (
                                                <label key={brand} className="facet-checkbox">
                                                    <input type="checkbox" checked={selectedBrands.includes(brand)} onChange={() => handleBrandToggle(brand)} />
                                                    <span className="check-label">{brand}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                            <hr className="filter-divider" />

                            {/* Weight */}
                            <div className="filter-widget">
                                <div className="filter-widget-header" onClick={() => toggleSection('weight')}>
                                    <h5 className="acnav-label">WEIGHT</h5>
                                    <button className="collapse-btn" aria-label="toggle">
                                        {openSections.weight ? (
                                            <svg width="12" height="2" viewBox="0 0 12 2" fill="none"><line x1="0" y1="1" x2="12" y2="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                                        ) : (
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><line x1="6" y1="0" x2="6" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><line x1="0" y1="6" x2="12" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                                        )}
                                    </button>
                                </div>
                                {openSections.weight && (
                                    <div className="filter-widget-body">
                                        {selectedWeights.length > 0 && (
                                            <div className="filter-meta-row">
                                                <span className="filter-selected-count">{selectedWeights.length} selected</span>
                                                <button className="filter-reset-btn" onClick={() => setSelectedWeights([])}>Reset</button>
                                            </div>
                                        )}
                                        <div className="filter-list max-height-scroll">
                                            {allWeights.map(w => (
                                                <label key={w} className="facet-checkbox">
                                                    <input type="checkbox" checked={selectedWeights.includes(w)} onChange={() => handleWeightToggle(w)} />
                                                    <span className="check-label">{w}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                        </aside>

                        {/* ── MAIN CONTENT ── */}
                        <div className="shop-main-content">
                            <div className="product-toolbar">
                                <nav className="breadcrumb">
                                    <a href="/">Home</a>
                                    <span className="breadcrumb-sep"> / </span>
                                    <span className="breadcrumb-active">Products</span>
                                </nav>
                                <div className="sorting-wrapper">
                                    <span className="sort-label">Sort by:</span>
                                    <div className="sort-select-wrapper">
                                        <select
                                            className="sort-select"
                                            value={sortBy}
                                            onChange={(e) => setSortBy(e.target.value)}
                                        >
                                            <option value="alphabetical-az">Alphabetically, A-Z</option>
                                            <option value="alphabetical-za">Alphabetically, Z-A</option>
                                            <option value="price-low-high">Price, low to high</option>
                                            <option value="price-high-low">Price, high to low</option>
                                            <option value="featured">Featured</option>
                                        </select>
                                        <svg className="sort-arrow" width="10" height="6" viewBox="0 0 10 6" fill="none">
                                            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="products-grid-3col">
                                {filteredProducts.length > 0 ? (
                                    filteredProducts.map(product => (
                                        <ProductCard key={product.id} product={product} />
                                    ))
                                ) : (
                                    <div className="no-products">No products match your filters.</div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ExploringVersatility />
        </main>
    );
};

export default Shop;
