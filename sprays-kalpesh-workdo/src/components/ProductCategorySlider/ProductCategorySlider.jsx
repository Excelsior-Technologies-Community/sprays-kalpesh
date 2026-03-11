import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './ProductCategorySlider.css';

const ProductCategorySlider = () => {
    const unisexCard = {
        title: "Unisex",
        text: "On an everyday level, household products such as air fresheners, cleaners, and personal care items often utilize spray...",
        image: "//sprays-workdo.myshopify.com/cdn/shop/files/card-img-1.png?v=1700133774",
        link: "/collections/all"
    };

    const otherSlides = [
        {
            title: "Solid perfume",
            text: "Oral sprays are used for localized medication delivery or to facilitate swallowing in individuals with...",
            image: "//sprays-workdo.myshopify.com/cdn/shop/files/card-img-2.png?v=1700133773",
            link: "/collections/all"
        },
        {
            title: "Men",
            text: "In agriculture, sprays are used to apply fertilizers, pesticides, and herbicides to crops, ensuring...",
            image: "//sprays-workdo.myshopify.com/cdn/shop/files/card-img-2.png?v=1700133773",
            link: "/collections/all"
        },
        {
            title: "Trending",
            text: "Additionally, in the manufacturing sector, sprays are integral to cooling systems, lubrication...",
            image: "//sprays-workdo.myshopify.com/cdn/shop/files/card-img-3.png?v=1700133773",
            link: "/collections/all"
        }
    ];

    return (
        <section className="product-category-slider padding-bottom">
            <div className="pcs-container">
                <div className="pcs-container-row">
                    {/* 1st Div: Side Card */}
                    <div className="pcs-side-static">
                        <div className="pcs-card-item">
                            <img src={unisexCard.image} className="pcs-card-bg" alt={unisexCard.title} />
                            <div className="pcs-content-overlay">
                                <div className="pcs-top">
                                    <h4 className="pcs-title">{unisexCard.title}</h4>
                                    <p className="pcs-desc">{unisexCard.text}</p>
                                </div>
                                <div className="pcs-bottom">
                                    <a href={unisexCard.link} className="pcs-main-btn">
                                        Check More Products
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2nd Div: Slider Area */}
                    <div className="pcs-slider-area">
                        <div className="pcs-swiper-wrapper">
                            <Swiper
                                modules={[Navigation]}
                                spaceBetween={20}
                                slidesPerView={2}
                                observer={true}
                                observeParents={true}
                                navigation={{
                                    nextEl: '.pcs-nav-next',
                                    prevEl: '.pcs-nav-prev',
                                }}
                                breakpoints={{
                                    0: { slidesPerView: 1 },
                                    1024: { slidesPerView: 2 }
                                }}
                                className="pcs-swiper-main"
                            >
                                {otherSlides.map((slide, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="pcs-card-item">
                                            <img src={slide.image} className="pcs-card-bg" alt={slide.title} />
                                            <div className="pcs-content-overlay">
                                                <div className="pcs-top">
                                                    <h4 className="pcs-title">{slide.title}</h4>
                                                    <p className="pcs-desc">{slide.text}</p>
                                                </div>
                                                <div className="pcs-bottom">
                                                    <a href={slide.link} className="pcs-main-btn">
                                                        Check More Products
                                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            
                            {/* Navigation Arrows positioned like the image */}
                            <button className="pcs-nav-prev">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 5H1M1 5L5 1M1 5L5 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                            <button className="pcs-nav-next">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 5H9M9 5L5 1M9 5L5 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductCategorySlider;
