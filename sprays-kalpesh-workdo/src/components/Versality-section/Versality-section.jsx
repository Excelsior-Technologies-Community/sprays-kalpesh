import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Versality-section.css';
import ProductCard from '../ProductCard/ProductCard';
import { products } from '../../data/products';

const VersalitySection = () => {
    const [activeTab, setActiveTab] = useState('fragrances');
    const sectionRef = useRef(null);

    const tabs = [
        { id: 'fragrances', label: 'Fragrances', icon: true },
        { id: 'unisex', label: 'Unisex Perfume', icon: true },
        { id: 'solid', label: 'Solid Perfume', icon: true }
    ];

    const handleTabClick = (id) => {
        setActiveTab(id);
    };

    const displayProducts = products.filter(p => p.category === activeTab);

    return (
        <section className="versatility-section" ref={sectionRef}>
            <div className="v-container">
                <div className="v-header">
                    <div className="v-title-block">
                        <h2>Exploring the <br /> Versatility of Sprays</h2>
                    </div>
                    <div className="v-tabs-block">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                className={`v-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                                onClick={() => handleTabClick(tab.id)}
                            >
                                {tab.label}
                                {tab.icon && (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.1258 5.12596H2.87416C2.04526 5.12596 1.38823 5.82533 1.43994 6.65262L1.79919 12.4007C1.84653 13.1581 2.47458 13.7481 3.23342 13.7481H10.7666C11.5254 13.7481 12.1535 13.1581 12.2008 12.4007L12.5601 6.65262C12.6118 5.82533 11.9547 5.12596 11.1258 5.12596ZM2.87416 3.68893C1.21635 3.68893 -0.0977 5.08768 0.00571155 6.74226L0.364968 12.4904C0.459638 14.0051 1.71574 15.1851 3.23342 15.1851H10.7666C12.2843 15.1851 13.5404 14.0051 13.635 12.4904L13.9943 6.74226C14.0977 5.08768 12.7837 3.68893 11.1258 3.68893H2.87416Z" fill="currentColor" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M3.40723 4.40744C3.40723 2.42332 5.01567 0.81488 6.99979 0.81488C8.98390 0.81488 10.5923 2.42332 10.5923 4.40744V5.84447C10.5923 6.24129 10.2707 6.56298 9.87384 6.56298C9.47701 6.56298 9.15532 6.24129 9.15532 5.84447V4.40744C9.15532 3.21697 8.19026 2.2519 6.99979 2.2519C5.80932 2.2519 4.84425 3.21697 4.84425 4.40744V5.84447C4.84425 6.24129 4.52256 6.56298 4.12574 6.56298C3.72892 6.56298 3.40723 6.24129 3.40723 5.84447V4.40744Z" fill="currentColor" />
                                    </svg>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="v-slider-wrapper">
                    <button className="v-nav v-prev" id="v-prev-btn">
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 13L1 7L7 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button className="v-nav v-next" id="v-next-btn">
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 13L7 7L1 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={4}
                        navigation={{
                            prevEl: '#v-prev-btn',
                            nextEl: '#v-next-btn',
                        }}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            600: { slidesPerView: 2 },
                            991: { slidesPerView: 3 },
                            1200: { slidesPerView: 4 }
                        }}
                        className="v-swiper"
                    >
                        {displayProducts.map((product) => (
                            <SwiperSlide key={product.id}>
                                <div className="v-product-item">
                                    <ProductCard product={product} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default VersalitySection;
