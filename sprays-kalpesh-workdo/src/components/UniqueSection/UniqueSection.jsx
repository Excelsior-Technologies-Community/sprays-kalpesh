import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './UniqueSection.css';
import { products } from '../../data/products';
import ProductCard from '../ProductCard/ProductCard';

const UniqueSection = () => {
    const sliderProducts = products.slice(0, 4);

    return (
        <section className="unique-section more-pro-sec">
            <div className="container" data-section="product-with-banner">
                <div className="unique-row">
                    <div className="unique-left">
                        <div className="section-title">
                            <h3>Unique perfumes for women and men</h3>
                        </div>
                        <p className="unique-desc">
                            The applications of sprays span a wide spectrum, catering to industrial, artistic, medicinal, and everyday needs.
                        </p>
                        <div className="filter-btns">
                            <a href="/collections/unisex-perfume" className="filter-btn">Unisex</a>
                            <a href="/collections/men-s-fragrances" className="filter-btn">Men</a>
                        </div>
                        <a href="/collections/all" className="check-more-btn">
                            Check More Products
                            <span className="arrow-icon">→</span>
                        </a>
                    </div>
                    <div className="unique-right">
                        <div className="more-pro-slider-wrapper">
                            <Swiper
                                modules={[Navigation]}
                                loop={true}
                                className="more-pro-swiper"
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                        spaceBetween: 16,
                                    },
                                    480: {
                                        slidesPerView: 1,
                                        spaceBetween: 16,
                                    },
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    992: {
                                        slidesPerView: 2,
                                        spaceBetween: 30,
                                    },
                                }}
                            >
                                {sliderProducts.map(product => (
                                    <SwiperSlide key={product.id}>
                                        <ProductCard product={product} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UniqueSection;