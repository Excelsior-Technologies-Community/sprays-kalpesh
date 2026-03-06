import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="site-header">
      {/* 1. Announce Bar */}
      <div className="announcebar">
        <div className="container">
          <div className="announce-row">
            <div className="announce-left">
              <p><b>Monday - Friday</b> 8:00 AM - 9:00 PM</p>
            </div>
            <div className="announce-right">
              <ul className="top-utility-links">
                <li className="dropdown pill">
                  <img src="https://flagcdn.com/w20/gb.png" alt="UK" className="flag-icon" />
                  <span>English</span>
                  <svg width="8" height="5" viewBox="0 0 10 6" fill="none" className="chevron-down">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </li>
                <li className="dropdown pill">
                  <img src="https://flagcdn.com/w20/us.png" alt="US" className="flag-icon" />
                  <span>USD</span>
                  <svg width="8" height="5" viewBox="0 0 10 6" fill="none" className="chevron-down">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </li>
                <li><a href="/faqs" className="utility-link">Faq</a></li>
                <li><a href="/about" className="utility-link">About Us</a></li>
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
              {/* Logo */}
              <div className="logo-col">
                <a href="/">
                  <img
                    src="https://sprays-workdo.myshopify.com/cdn/shop/files/sprays_-2_100x.png?v=1700128236"
                    alt="Sprays Logo"
                  />
                </a>
              </div>

              {/* Nav Links */}
              <nav className="menu-items-col">
                <ul className="main-nav">
                  <li className="menu-lnk has-mega active-lnk">
                    <a href="#">
                      All Categories
                      <svg width="8" height="5" viewBox="0 0 10 6" fill="none" className="nav-chevron">
                        <path d="M1 5L5 1L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                    {/* Categories Mega Menu */}
                    <div className="mega-menu">
                      <div className="mega-container categories-mega">
                        <div className="mega-column">
                          <h4 className="list-title">Universal Fragrances</h4>
                          <ul>
                            <li><a href="#">Cassili Eau De Parfum</a></li>
                            <li><a href="#">Delina La Rosee Eau De Parfum</a></li>
                            <li><a href="#">Delina Eau De Parfum</a></li>
                            <li><a href="#">Pegasus Eau De Parfum</a></li>
                            <li><a href="#">Oriana Eau De Parfum</a></li>
                          </ul>
                        </div>
                        <div className="mega-column">
                          <h4 className="list-title">Signature Perfumes</h4>
                          <ul>
                            <li><a href="#">Althair Eau De Parfum</a></li>
                            <li><a href="#">Carlisle Eau De Parfum</a></li>
                            <li><a href="#">Greenley Eau De Parfum</a></li>
                            <li><a href="#">Herod Eau De parfum</a></li>
                          </ul>
                        </div>
                        <div className="mega-column">
                          <h4 className="list-title">Unisex Perfume</h4>
                          <ul>
                            <li><a href="#">Cologne Arabic Air</a></li>
                            <li><a href="#">Cologne Gripped Rose</a></li>
                            <li><a href="#">Cologne Sapphire Sea</a></li>
                            <li><a href="#">Cologne To The Races</a></li>
                          </ul>
                        </div>
                        <div className="mega-image-col">
                          <img src="https://sprays-workdo.myshopify.com/cdn/shop/files/product-img-1.png?v=1700128395" alt="Banner" className="mega-img" />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="menu-lnk has-mega">
                    <a href="/pages">
                      Pages
                      <svg width="8" height="5" viewBox="0 0 10 6" fill="none" className="nav-chevron">
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                    {/* Pages Submenu */}
                    <div className="mega-menu simple-dropdown">
                      <ul className="dropdown-list">
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/about">About us</a></li>
                        <li><a href="/faqs">Faqs</a></li>
                        <li><a href="/privacy-policy">privacy policy</a></li>
                        <li><a href="/shipping-policy">Shipping & Policy</a></li>
                        <li><a href="/terms-conditions">Terms & Conditions</a></li>
                      </ul>
                    </div>
                  </li>
                  <li className="menu-lnk has-mega">
                    <a href="/collections">
                      Collections
                      <svg width="8" height="5" viewBox="0 0 10 6" fill="none" className="nav-chevron">
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                    {/* Collections Mega Menu */}
                    <div className="mega-menu collections-mega">
                      <div className="mega-container grid-4">
                        <div className="collection-card">
                          <div className="card-image">
                            <img src="https://sprays-workdo.myshopify.com/cdn/shop/files/collection-img-1.png?v=1700128395" alt="Signature Perfumes" />
                          </div>
                          <p className="card-label">Signature Perfumes</p>
                        </div>
                        <div className="collection-card">
                          <div className="card-image">
                            <img src="https://sprays-workdo.myshopify.com/cdn/shop/files/collection-img-2.png?v=1700128395" alt="Unisex Perfume" />
                          </div>
                          <p className="card-label">Unisex Perfume</p>
                        </div>
                        <div className="collection-card">
                          <div className="card-image">
                            <img src="https://sprays-workdo.myshopify.com/cdn/shop/files/collection-img-3.png?v=1700128395" alt="Men's Fragrances" />
                          </div>
                          <p className="card-label">Men's Fragrances</p>
                        </div>
                        <div className="collection-card">
                          <div className="card-image">
                            <img src="https://sprays-workdo.myshopify.com/cdn/shop/files/collection-img-4.png?v=1700128395" alt="Universal Fragrances" />
                          </div>
                          <p className="card-label">Universal Fragrances</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="menu-lnk has-mega">
                    <a href="/blog">
                      Blog
                      <svg width="8" height="5" viewBox="0 0 10 6" fill="none" className="nav-chevron">
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                    {/* Blog Submenu */}
                    <div className="mega-menu simple-dropdown blog-dropdown">
                      <ul className="dropdown-list">
                        <li><a href="/blog">Blog page</a></li>
                        <li><a href="/article">Article page</a></li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Right Icons */}
            <div className="menu-right">
              <div className="account-icon">
                <svg width="14" height="16" viewBox="0 0 16 22" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M13.3699 21.0448H4.60183C4.11758 21.0448 3.72502 20.6522 3.72502 20.168C3.72502 19.6837 4.11758 19.2912 4.60183 19.2912H13.3699C13.8542 19.2912 14.2468 18.8986 14.2468 18.4143V14.7756C14.2026 14.2836 13.9075 13.8492 13.4664 13.627C10.0296 12.2394 6.18853 12.2394 2.75176 13.627C2.31062 13.8492 2.01554 14.2836 1.9714 14.7756V20.168C1.9714 20.6522 1.57883 21.0448 1.09459 21.0448C0.610335 21.0448 0.217773 20.6522 0.217773 20.168V14.7756C0.256548 13.5653 0.986136 12.4845 2.09415 11.9961C5.95255 10.4369 10.2656 10.4369 14.124 11.9961C15.232 12.4845 15.9616 13.5653 16.0004 14.7756V18.4143C16.0004 19.8671 14.8227 21.0448 13.3699 21.0448ZM12.493 4.38406C12.493 1.96281 10.5302 0 8.10892 0C5.68767 0 3.72486 1.96281 3.72486 4.38406C3.72486 6.80531 5.68767 8.76812 8.10892 8.76812C10.5302 8.76812 12.493 6.80531 12.493 4.38406ZM10.7393 4.38483C10.7393 5.83758 9.56159 7.01526 8.10884 7.01526C6.6561 7.01526 5.47841 5.83758 5.47841 4.38483C5.47841 2.93208 6.6561 1.75439 8.10884 1.75439C9.56159 1.75439 10.7393 2.93208 10.7393 4.38483Z" fill="black" />
                </svg>
              </div>
              <div className="cart-btn">
                <svg width="16" height="15" viewBox="0 0 19 17" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M15.5698 10.627H6.97178C5.80842 10.6273 4.81015 9.79822 4.59686 8.65459L3.47784 2.59252C3.40702 2.20522 3.06646 1.92595 2.67278 1.93238H0.805055C0.360435 1.93238 0 1.57194 0 1.12732C0 0.682701 0.360435 0.322266 0.805055 0.322266H2.68888C3.85224 0.321937 4.85051 1.15101 5.0638 2.29465L6.18282 8.35672C6.25364 8.74402 6.5942 9.02328 6.98788 9.01686H15.5778C15.9715 9.02328 16.3121 8.74402 16.3829 8.35672L17.3972 2.88234C17.4407 2.64509 17.3755 2.40085 17.2195 2.21684C17.0636 2.03283 16.8334 1.92843 16.5922 1.93238H7.2455C6.80088 1.93238 6.44044 1.57194 6.44044 1.12732C6.44044 0.682701 6.80088 0.322266 7.2455 0.322266H16.5841C17.3023 0.322063 17.9833 0.641494 18.4423 1.19385C18.9013 1.74622 19.0907 2.4742 18.959 3.18021L17.9447 8.65459C17.7314 9.79822 16.7331 10.6273 15.5698 10.627ZM10.466 13.8478C10.466 12.5139 9.38464 11.4326 8.05079 11.4326C7.60617 11.4326 7.24573 11.7931 7.24573 12.2377C7.24573 12.6823 7.60617 13.0427 8.05079 13.0427C8.49541 13.0427 8.85584 13.4032 8.85584 13.8478C8.85584 14.2924 8.49541 14.6528 8.05079 14.6528C7.60617 14.6528 7.24573 14.2924 7.24573 13.8478C7.24573 13.4032 6.88529 13.0427 6.44068 13.0427C5.99606 13.0427 5.63562 13.4032 5.63562 13.8478C5.63562 15.1816 6.71693 16.2629 8.05079 16.2629C9.38464 16.2629 10.466 15.1816 10.466 13.8478ZM15.2963 15.4579C15.2963 15.0133 14.9358 14.6528 14.4912 14.6528C14.0466 14.6528 13.6862 14.2924 13.6862 13.8478C13.6862 13.4032 14.0466 13.0427 14.4912 13.0427C14.9358 13.0427 15.2963 13.4032 15.2963 13.8478C15.2963 14.2924 15.6567 14.6528 16.1013 14.6528C16.5459 14.6528 16.9064 14.2924 16.9064 13.8478C16.9064 12.5139 15.8251 11.4326 14.4912 11.4326C13.1574 11.4326 12.076 12.5139 12.076 13.8478C12.076 15.1816 13.1574 16.2629 14.4912 16.2629C14.9358 16.2629 15.2963 15.9025 15.2963 15.4579Z" fill="white" />
                </svg>
                <span>$0.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;