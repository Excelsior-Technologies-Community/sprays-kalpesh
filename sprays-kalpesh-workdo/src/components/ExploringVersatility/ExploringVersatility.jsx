import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './ExploringVersatility.css';
import ProductCard from '../ProductCard/ProductCard';
import { products } from '../../data/products';

const ExploringVersatility = () => {
    // Show a selection of products (e.g., first 8)
    const displayProducts = products.slice(0, 8);

    return (
        <section className="exploring-versatility-shop">
            <div className="evs-container">
                <div className="evs-header">
                    <h2 className="evs-title">Transforming Surfaces with Spray Mastery</h2>
                </div>
                
                <div className="evs-slider-wrapper">
                    <button className="evs-nav evs-prev" id="evs-prev-btn">
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 13L1 7L7 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button className="evs-nav evs-next" id="evs-next-btn">
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 13L7 7L1 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={30}
                        slidesPerView={4}
                        navigation={{
                            prevEl: '#evs-prev-btn',
                            nextEl: '#evs-next-btn',
                        }}
                        breakpoints={{
                            0: { slidesPerView: 1, spaceBetween: 20 },
                            480: { slidesPerView: 2, spaceBetween: 25 },
                            768: { slidesPerView: 3, spaceBetween: 30 },
                            1024: { slidesPerView: 4, spaceBetween: 30 }
                        }}
                        className="evs-swiper"
                    >
                        {displayProducts.map((product) => (
                            <SwiperSlide key={product.id}>
                                <div className="evs-product-item">
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

export default ExploringVersatility;
