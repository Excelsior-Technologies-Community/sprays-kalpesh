import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';

const products = [
  {
    id: 1,
    badge: 'New',
    brand: 'Rihanna',
    name: 'Herod Eau De parfum',
    weight: ['80ml', '60ml', '50ml'],
    rating: 0,
    price: '$10.00',
    oldPrice: '$25.00',
    img: 'https://sprays-workdo.myshopify.com/cdn/shop/files/1_25130907-77db-42f8-914b-caebe6ddf9ce_600x600.png',
    hoverImg: 'https://sprays-workdo.myshopify.com/cdn/shop/files/2_bdea8612-3d08-4f82-ba03-3541ab67020d_440x466.png?v=1700113123',
  },
  {
    id: 2,
    badge: 'Popular',
    brand: 'Chanel',
    name: 'Coco Mademoiselle EDP',
    weight: ['100ml', '50ml'],
    rating: 5,
    price: '$85.00',
    oldPrice: '$100.00',
    img: 'https://sprays-workdo.myshopify.com/cdn/shop/files/1_9fb478e8-5bf8-47b2-8632-27e5c0519a52_600x600.png?v=1700112945',
    hoverImg: 'https://sprays-workdo.myshopify.com/cdn/shop/files/2_0fd5c05a-db0a-46e5-a4a4-f43e86a179c1_600x600.png?v=1700112944',
  },
  {
    id: 3,
    badge: 'Sale',
    brand: 'Dior',
    name: 'Miss Dior Blooming',
    weight: ['75ml', '30ml'],
    rating: 4,
    price: '$95.00',
    oldPrice: '$105.00',
    img: 'https://sprays-workdo.myshopify.com/cdn/shop/files/1_f89b722a-1739-4b59-9ff9-fbc612c7ab3b_600x600.png?v=1700112789',
    hoverImg: 'https://sprays-workdo.myshopify.com/cdn/shop/files/2_9f32f89b-6c0a-431c-8219-f977cd60e07d_600x600.png?v=1700112789',
  },
];

const StarRating = ({ count }) => (
  <div className="rating">
    {[1, 2, 3, 4, 5].map(i => (
      <span key={i} className={i <= count ? 'star filled' : 'star'}>☆</span>
    ))}
  </div>
);

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);
  const timerRef = useRef(null);

  const goTo = (index) => setActiveSlide(index);
  const goUp = () => setActiveSlide(prev => Math.max(0, prev - 1));
  const goDown = () => setActiveSlide(prev => Math.min(products.length - 1, prev + 1));

  // Autoplay
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(timerRef.current);
  }, []);

  const p = products[activeSlide];

  return (
    <>
      <section className="hero-section">
        <div className="hero-inner">

          {/* ── LEFT ── */}
          <div className="left-side">
            <span className="sub-title">Spray</span>
            <h1 className="hero-title">The World of Spray Techniques</h1>
            <p className="hero-description">
              The art of spray painting encapsulates an explosion of colors and creativity.
              With a swift movement, aerosol cans release a fine mist that transforms
              ordinary surfaces into vibrant masterpieces.
            </p>

            <div className="hero-btns">
              <button className="btn-primary-custom">
                Check More Products <span className="btn-icon">🛍</span>
              </button>
              <button className="btn-video" onClick={() => setVideoOpen(true)}>

                <span className="play-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 44" width="60" height="60">
                  <rect x=".5" y=".5" width="44" height="43" rx="21.5" fill="black" opacity="0.6" />
                  <path fill="white" d="M18 16 L30 22 L18 28 Z" />
                </svg></span> play video
              </button>
            </div>

            <div className="service-tags">
              <div className="service-item">
                <div className="service-icon"><img src="https://sprays-workdo.myshopify.com/cdn/shop/files/sev-1.png?v=1700130193" alt="Finished products" /></div>
                <div>
                  <strong>Finished products</strong>
                  <span>products and gift wrapping</span>
                </div>
              </div>
              <div className="service-item">
                <div className="service-icon"><img src="https://sprays-workdo.myshopify.com/cdn/shop/files/sev-2.png?v=1700130194" alt="" /></div>
                <div>
                  <strong>Large and frequent</strong>
                  <span>promotions with numerous discounts</span>
                </div>
              </div>
              <div className="service-item">
                <div className="service-icon"><img src="https://sprays-workdo.myshopify.com/cdn/shop/files/sev-3.png?v=1700130194" alt="Free shipping" /></div>
                <div>
                  <strong>Free shipping</strong>
                  <span>on any order from $150</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT ── */}
          <div className="right-side">
            <div className="slider-wrapper">

              <div className="product-card" key={p.id}>
                <div className="card-badge">{p.badge}</div>
                <div className="card-actions">
                  <button className="action-btn">♡</button>
                  <button className="action-btn">⇄</button>
                  <button className="action-btn">👁</button>
                </div>

                <div className="product-img-wrapper">
                  <img src={p.img} alt={p.name} className="product-img primary-img" />
                  <img src={p.hoverImg} alt={p.name} className="product-img hover-img" />
                </div>

                <div className="product-info">
                  <span className="brand">{p.brand}</span>
                  <h5 className="product-name">{p.name}</h5>
                  <div className="weight-select">
                    <label>Weight:</label>
                    <div className="custom-select">
                      <select>
                        {p.weight.map(w => <option key={w}>{w}</option>)}
                      </select>
                      <span className="select-arrow">↓</span>
                    </div>
                  </div>
                  <StarRating count={p.rating} />
                  <div className="price-row">
                    <span className="current-price">{p.price}</span>
                    <button className="add-to-cart">Add to Cart <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1258 5.12596H2.87416C2.04526 5.12596 1.38823 5.82533 1.43994 6.65262L1.79919 12.4007C1.84653 13.1581 2.47458 13.7481 3.23342 13.7481H10.7666C11.5254 13.7481 12.1535 13.1581 12.2008 12.4007L12.5601 6.65262C12.6118 5.82533 11.9547 5.12596 11.1258 5.12596ZM2.87416 3.68893C1.21635 3.68893 -0.0977 5.08768 0.00571155 6.74226L0.364968 12.4904C0.459638 14.0051 1.71574 15.1851 3.23342 15.1851H10.7666C12.2843 15.1851 13.5404 14.0051 13.635 12.4904L13.9943 6.74226C14.0977 5.08768 12.7837 3.68893 11.1258 3.68893H2.87416Z" fill="white"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.40723 4.40744C3.40723 2.42332 5.01567 0.81488 6.99979 0.81488C8.9839 0.81488 10.5923 2.42332 10.5923 4.40744V5.84447C10.5923 6.24129 10.2707 6.56298 9.87384 6.56298C9.47701 6.56298 9.15532 6.24129 9.15532 5.84447V4.40744C9.15532 3.21697 8.19026 2.2519 6.99979 2.2519C5.80932 2.2519 4.84425 3.21697 4.84425 4.40744V5.84447C4.84425 6.24129 4.52256 6.56298 4.12574 6.56298C3.72892 6.56298 3.40723 6.24129 3.40723 5.84447V4.40744Z" fill="white"></path>
                                        </svg></button>
                  </div>
                </div>
              </div>

              {/* Vertical Nav */}
              <div className="vertical-nav">
                <div className="nav-arrow" onClick={goUp}>↑</div>
                <div className="nav-nums-wrap">
                  <div className="progress-line"></div>
                  {products.map((_, i) => (
                    <div
                      key={i}
                      className={`nav-num ${activeSlide === i ? 'active' : ''}`}
                      onClick={() => goTo(i)}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </div>
                  ))}
                </div>
                <div className="nav-arrow" onClick={goDown}>↓</div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ── VIDEO MODAL ── */}
      {videoOpen && (
        <div className="video-overlay" onClick={() => setVideoOpen(false)}>
          <div className="video-modal" onClick={e => e.stopPropagation()}>
            <button className="video-close" onClick={() => setVideoOpen(false)}>✕</button>
            <iframe
              src="https://www.youtube.com/embed/WhKJl9W_1Fw?si=Q6Alsu2Dv0tCqlWt"
              allow="autoplay; fullscreen"
              allowFullScreen
              title="Product Video"
            />


          </div>
        </div>
      )}
    </>
  );
};

export default Hero;