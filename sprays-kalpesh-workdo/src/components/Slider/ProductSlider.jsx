import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import ProductCard from "../ProductCard/ProductCard";
import { products } from "../../data/products";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ProductSlider.css";

const ProductSlider = () => {
    return (
        <section className="ps-section">
            <div className="ps-overlay"></div>

            <div className="ps-inner">
                <div className="product-slider-wrapper">

                    {/* Navigation Buttons */}
                    <button
                        className="ps-nav ps-prev"
                        id="ps-prev-btn"
                        aria-label="Previous"
                    >
                        ◀
                    </button>

                    <button
                        className="ps-nav ps-next"
                        id="ps-next-btn"
                        aria-label="Next"
                    >
                        ▶
                    </button>

                    <Swiper
                        modules={[Navigation, Pagination, Autoplay, A11y]}
                        spaceBetween={24}
                        slidesPerView={"auto"}
                        centeredSlides={false}
                        loop={true}
                        speed={700}
                        observer={true}
                        observeParents={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            prevEl: "#ps-prev-btn",
                            nextEl: "#ps-next-btn",
                        }}
                        breakpoints={{
                            600: { spaceBetween: 24 },
                            1024: { spaceBetween: 32 },
                        }}
                        className="product-swiper"
                    >
                        {[...products, ...products, ...products].map((product, index) => (
                            <SwiperSlide key={`${product.id}-${index}`}>
                                <ProductCard product={product} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="ps-pagination"></div>

                </div>
            </div>
        </section>
    );
};

export default ProductSlider;