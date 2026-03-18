import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';
import './Navbar.css';

const navConfig = {
  announcer: {
    hours: "Monday - Friday 8:00 AM - 9:00 PM",
    utilities: [
      { id: 'lang', type: 'dropdown', label: 'English', icon: 'https://flagcdn.com/w20/gb.png' },
      { id: 'curr', type: 'dropdown', label: 'USD', icon: 'https://flagcdn.com/w20/us.png' },
      { id: 'faq', type: 'link', label: 'Faq', url: '/faqs' },
      { id: 'about', type: 'link', label: 'About Us', url: '/about' }
    ]
  },
  mainNav: [
    {
      id: "categories",
      label: "All Categories",
      url: "#",
      type: "mega-categories",
      columns: [
        {
          title: "Universal Fragrances",
          links: ["Cassili Eau De Parfum", "Delina La Rosee Eau De Parfum", "Delina Eau De Parfum", "Pegasus Eau De Parfum", "Oriana Eau De Parfum"]
        },
        {
          title: "Signature Perfumes",
          links: ["Althair Eau De Parfum", "Carlisle Eau De Parfum", "Greenley Eau De Parfum", "Herod Eau De parfum"]
        },
        {
          title: "Unisex Perfume",
          links: ["Cologne Arabic Air", "Cologne Gripped Rose", "Cologne Sapphire Sea", "Cologne To The Races"]
        }
      ],
      featuredImage: "https://sprays-workdo.myshopify.com/cdn/shop/files/product-img-1.png?v=1700128395"
    },
    {
      id: "pages",
      label: "Pages",
      url: "/pages",
      type: "dropdown",
      links: [
        { label: "Contact", url: "/contact" },
        { label: "About us", url: "/about" },
        { label: "Faqs", url: "/faqs" },
        { label: "privacy policy", url: "/privacy-policy" },
        { label: "Shipping & Policy", url: "/shipping-policy" },
        { label: "Terms & Conditions", url: "/terms-conditions" }
      ]
    },
    {
      id: "collections",
      label: "Collections",
      url: "/collections",
      type: "mega-collections",
      items: [
        { label: "Signature Perfumes", image: "https://sprays-workdo.myshopify.com/cdn/shop/files/bottle-that-has-word-message-it_1.jpg?v=1737625387", url: "/shop" },
        { label: "Unisex Perfume", image: "https://sprays-workdo.myshopify.com/cdn/shop/files/aloe-vera-leaves-with-beauty-cream-bottle_1.jpg?v=1737625387", url: "/shop" },
        { label: "Men's Fragrances", image: "https://sprays-workdo.myshopify.com/cdn/shop/files/skin-care-product-grass_1.jpg?v=1737625387", url: "/shop" },
        { label: "Universal Fragrances", image: "https://sprays-workdo.myshopify.com/cdn/shop/files/front-view-argan-product-assortment_1.jpg?v=1737625387", url: "/shop" }
      ]
    },
    {
      id: "blog",
      label: "Blog",
      url: "/blog",
      type: "dropdown",
      className: "blog-dropdown",
      links: [
        { label: "Blog page", url: "/blog" },
        { label: "Article page", url: "/article" }
      ]
    }
  ]
};

const Navbar = () => {
  const { wishlistItems } = useWishlist();
  const { cartCount } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenuId, setOpenSubmenuId] = useState(null);
  const [openMegaId, setOpenMegaId] = useState(null);
  const closeTimerRef = useRef(null);
  const headerRef = useRef(null);

  // Track header height and publish as CSS variable for the fixed mega menu
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        const h = headerRef.current.getBoundingClientRect().height;
        document.documentElement.style.setProperty('--header-height', `${h}px`);
      }
    };
    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [isMobileMenuOpen]);

  // Clean up timer on unmount
  useEffect(() => {
    return () => clearTimeout(closeTimerRef.current);
  }, []);

  const handleMegaEnter = (id) => {
    clearTimeout(closeTimerRef.current);
    setOpenMegaId(id);
  };

  const handleMegaLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setOpenMegaId(null);
    }, 100);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
    setOpenSubmenuId(null);
  };

  const handleSubmenuToggle = (id, e) => {
    e.preventDefault();
    setOpenSubmenuId(prev => (prev === id ? null : id));
  };

  return (
    <>
      <header className="site-header" role="banner" ref={headerRef}>

        {/* 1. Announce Bar */}
        <div className="announcebar">
          <div className="container">
            <div className="announce-row">
              <div className="announce-left">
                <p aria-label="Operating hours">
                  <b>Monday - Friday</b> 8:00 AM - 9:00 PM
                </p>
              </div>
              <div className="announce-right">
                <ul className="top-utility-links" role="list">
                  {navConfig.announcer.utilities.map((item) => (
                    <li key={item.id} className={item.type === 'dropdown' ? 'dropdown pill' : ''}>
                      {item.type === 'dropdown' ? (
                        <button className="utility-btn" aria-haspopup="true" aria-expanded="false">
                          <img src={item.icon} alt={`${item.label} flag`} className="flag-icon" />
                          <span>{item.label}</span>
                          <svg width="8" height="5" viewBox="0 0 10 6" fill="none" className="chevron-down" aria-hidden="true">
                            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>
                      ) : (
                        <a href={item.url} className="utility-link">{item.label}</a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Main Navigation Bar */}
        <div className="main-navigationbar">
          <div className="container">
            <div className="navigationbar-row">

              <div className="nav-left-section">
                {/* Hamburger */}
                <button
                  className={`mobile-toggle-btn ${isMobileMenuOpen ? 'active' : ''}`}
                  onClick={toggleMobileMenu}
                  aria-label="Toggle mobile menu"
                >
                  <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                  </span>
                </button>

                {/* Logo */}
                <div className="logo-col">
                  <Link to="/" aria-label="Sprays Home">
                    <img
                      src="https://sprays-workdo.myshopify.com/cdn/shop/files/sprays_-2_100x.png?v=1700128236"
                      alt="Sprays luxury fragrance logo"
                    />
                  </Link>
                </div>

                {/* Desktop Nav */}
                <nav className="menu-items-col desktop-only" role="navigation" aria-label="Main menu">
                  <ul className="main-nav" role="list">
                    {navConfig.mainNav.map((menu) => (
                      <li
                        key={menu.id}
                        className={`menu-lnk has-mega ${menu.isActive ? 'active-lnk' : ''} ${openMegaId === menu.id ? 'mega-open' : ''}`}
                        onMouseEnter={() => handleMegaEnter(menu.id)}
                        onMouseLeave={handleMegaLeave}
                      >
                        <Link to={menu.url} aria-haspopup="true" aria-expanded={openMegaId === menu.id}>
                          {menu.label}
                          <svg width="8" height="5" viewBox="0 0 10 6" fill="none" className="nav-chevron" aria-hidden="true">
                            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </Link>

                        {/* Mega / Dropdown panel */}
                        <div className={`mega-menu ${menu.type === 'dropdown' ? `simple-dropdown ${menu.className || ''}` : menu.type === 'mega-collections' ? 'collections-mega' : ''}`}>

                          {/* Categories Mega */}
                          {menu.type === 'mega-categories' && (
                            <div className="mega-container categories-mega">
                              {menu.columns.map((col, cIdx) => (
                                <div key={cIdx} className="mega-column">
                                  <h4 className="list-title">{col.title}</h4>
                                  <ul role="list">
                                    {col.links.map((link, lIdx) => (
                                      <li key={lIdx}><a href="#">{link}</a></li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                              <div className="mega-image-col">
                                <img src={menu.featuredImage} alt="Featured fragrance" className="mega-img" />
                              </div>
                            </div>
                          )}

                          {/* Simple Dropdown */}
                          {menu.type === 'dropdown' && (
                            <ul className="dropdown-list" role="list">
                              {menu.links.map((link, lIdx) => (
                                <li key={lIdx}><Link to={link.url}>{link.label}</Link></li>
                              ))}
                            </ul>
                          )}

                          {/* Collections Mega */}
                          {menu.type === 'mega-collections' && (
                            <div className="mega-container grid-4">
                              {menu.items.map((item, iIdx) => (
                                <div key={iIdx} className="collection-card">
                                  <Link to={item.url || "/shop"}>
                                    <div className="card-image">
                                      <img src={item.image} alt={item.label} />
                                    </div>
                                    <p className="card-label">{item.label}</p>
                                  </Link>
                                </div>
                              ))}
                            </div>
                          )}

                        </div>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Right Icons */}
              <div className="menu-right">
                <button className="account-icon" aria-label="User account">
                  <svg width="14" height="16" viewBox="0 0 16 22" fill="none" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.3699 21.0448H4.60183C4.11758 21.0448 3.72502 20.6522 3.72502 20.168C3.72502 19.6837 4.11758 19.2912 4.60183 19.2912H13.3699C13.8542 19.2912 14.2468 18.8986 14.2468 18.4143V14.7756C14.2026 14.2836 13.9075 13.8492 13.4664 13.627C10.0296 12.2394 6.18853 12.2394 2.75176 13.627C2.31062 13.8492 2.01554 14.2836 1.97140 14.7756V20.168C1.97140 20.6522 1.57883 21.0448 1.09459 21.0448C0.610335 21.0448 0.217773 20.6522 0.217773 20.168V14.7756C0.256548 13.5653 0.986136 12.4845 2.09415 11.9961C5.95255 10.4369 10.2656 10.4369 14.124 11.9961C15.232 12.4845 15.9616 13.5653 16.0004 14.7756V18.4143C16.0004 19.8671 14.8227 21.0448 13.3699 21.0448ZM12.493 4.38406C12.493 1.96281 10.5302 0 8.10892 0C5.68767 0 3.72486 1.96281 3.72486 4.38406C3.72486 6.80531 5.68767 8.76812 8.10892 8.76812C10.5302 8.76812 12.493 6.80531 12.493 4.38406ZM10.7393 4.38483C10.7393 5.83758 9.56159 7.01526 8.10884 7.01526C6.65610 7.01526 5.47841 5.83758 5.47841 4.38483C5.47841 2.93208 6.65610 1.75439 8.10884 1.75439C9.56159 1.75439 10.7393 2.93208 10.7393 4.38483Z" fill="currentColor" />
                  </svg>
                </button>
                <Link to="/wishlist" className="wishlist-icon-btn" aria-label={`Wishlist has ${wishlistItems.length} items`}>
                  <svg width="18" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  {wishlistItems.length > 0 && <span className="wishlist-count">{wishlistItems.length}</span>}
                </Link>
                <Link to="/cart" className="cart-btn" aria-label={`Shopping cart, ${cartCount} items`}>
                  <svg width="16" height="15" viewBox="0 0 19 17" fill="none" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.5698 10.627H6.97178C5.80842 10.6273 4.81015 9.79822 4.59686 8.65459L3.47784 2.59252C3.40702 2.20522 3.06646 1.92595 2.67278 1.93238H0.805055C0.360435 1.93238 0 1.57194 0 1.12732C0 0.682701 0.360435 0.322266 0.805055 0.322266H2.68888C3.85224 0.321937 4.85051 1.15101 5.06380 2.29465L6.18282 8.35672C6.25364 8.74402 6.59420 9.02328 6.98788 9.01686H15.5778C15.9715 9.02328 16.3121 8.74402 16.3829 8.35672L17.3972 2.88234C17.4407 2.64509 17.3755 2.40085 17.2195 2.21684C17.0636 2.03283 16.8334 1.92843 16.5922 1.93238H7.2455C6.80088 1.93238 6.44044 1.57194 6.44044 1.12732C6.44044 0.682701 6.80088 0.322266 7.24550 0.322266H16.5841C17.3023 0.322063 17.9833 0.641494 18.4423 1.19385C18.9013 1.74622 19.0907 2.47420 18.9590 3.18021L17.9447 8.65459C17.7314 9.79822 16.7331 10.6273 15.5698 10.627ZM10.466 13.8478C10.466 12.5139 9.38464 11.4326 8.05079 11.4326C7.60617 11.4326 7.24573 11.7931 7.24573 12.2377C7.24573 12.6823 7.60617 13.0427 8.05079 13.0427C8.49541 13.0427 8.85584 13.4032 8.85584 13.8478C8.85584 14.2924 8.49541 14.6528 8.05079 14.6528C7.60617 14.6528 7.24573 14.2924 7.24573 13.8478C7.24573 13.4032 6.88529 13.0427 6.44068 13.0427C5.99606 13.0427 5.63562 13.4032 5.63562 13.8478C5.63562 15.1816 6.71693 16.2629 8.05079 16.2629C9.38464 16.2629 10.466 15.1816 10.466 13.8478ZM15.2963 15.4579C15.2963 15.0133 14.9358 14.6528 14.4912 14.6528C14.0466 14.6528 13.6862 14.2924 13.6862 13.8478C13.6862 13.4032 14.0466 13.0427 14.4912 13.0427C14.9358 13.0427 15.2963 13.4032 15.2963 13.8478C15.2963 14.2924 15.6567 14.6528 16.1013 14.6528C16.5459 14.6528 16.9064 14.2924 16.9064 13.8478C16.9064 12.5139 15.8251 11.4326 14.4912 11.4326C13.1574 11.4326 12.0760 12.5139 12.0760 13.8478C12.0760 15.1816 13.1574 16.2629 14.4912 16.2629C14.9358 16.2629 15.2963 15.9025 15.2963 15.4579Z" fill="currentColor" />
                  </svg>
                  {cartCount > 0 ? (
                    <span className="wishlist-count">{cartCount}</span>
                  ) : (
                    <span>$0.00</span>
                  )}
                </Link>
              </div>

            </div>
          </div>
        </div>
      </header>

      {/* 3. Mobile Drawer */}
      <div className={`mobile-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="drawer-inner">
          <div className="drawer-header">
            <h2 className="drawer-title">Menu</h2>
            <button className="close-btn" onClick={toggleMobileMenu} aria-label="Close menu">&times;</button>
          </div>

          <nav className="mobile-nav-panel">
            <ul className="mobile-main-list">
              {navConfig.mainNav.map((menu) => (
                <li key={menu.id} className="mobile-nav-item">
                  <div className="mobile-item-head" onClick={(e) => handleSubmenuToggle(menu.id, e)}>
                    <span className="mobile-link">{menu.label}</span>
                    {menu.type !== 'link' && (
                      <span className={`toggle-icon ${openSubmenuId === menu.id ? 'active' : ''}`}>
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    )}
                  </div>

                  {openSubmenuId === menu.id && (
                    <div className="mobile-submenu-panel">

                      {menu.type === 'mega-categories' && (
                        <div className="mobile-sub-cats">
                          {menu.columns.map((col, idx) => (
                            <div key={idx} className="mobile-sub-group">
                              <p className="sub-group-title">{col.title}</p>
                              <ul>
                                {col.links.map((link, lIdx) => (
                                  <li key={lIdx}><a href="#" onClick={toggleMobileMenu}>{link}</a></li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}

                      {menu.type === 'dropdown' && (
                        <ul className="mobile-sub-list">
                          {menu.links.map((link, lIdx) => (
                            <li key={lIdx}><a href={link.url} onClick={toggleMobileMenu}>{link.label}</a></li>
                          ))}
                        </ul>
                      )}

                      {menu.type === 'mega-collections' && (
                        <div className="mobile-sub-collections">
                          {menu.items.map((item, iIdx) => (
                            <div key={iIdx} className="mobile-coll-item" onClick={toggleMobileMenu}>
                              <img src={item.image} alt={item.label} />
                              <span>{item.label}</span>
                            </div>
                          ))}
                        </div>
                      )}

                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="drawer-footer">
            <div className="drawer-utility-row">
              <button className="utility-pill">
                <img src="https://flagcdn.com/w20/gb.png" alt="UK" />
                <span>English / USD</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`drawer-overlay ${isMobileMenuOpen ? 'visible' : ''}`}
        onClick={toggleMobileMenu}
      ></div>
    </>
  );
};

export default Navbar;