import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './FeaturedBlog.css';

const blogPosts = [
    {
        id: 1,
        image: 'https://sprays-workdo.myshopify.com/cdn/shop/articles/image_1474.png?v=1700117820',
        tag: 'Article',
        title: 'Aromatics Anonymous',
        description: 'We understand that fragrances are subjective. So break the seal, open the cap, and try the perfume. If you do not absolutely love it, we will generate a return pickup...',
        date: 'November 16, 2023',
        link: '#'
    },
    {
        id: 2,
        image: 'https://sprays-workdo.myshopify.com/cdn/shop/articles/image_1472.png?v=1700117750',
        tag: 'Article',
        title: 'The Perfume Diaries',
        description: 'Fragrance microcapsule pigment is an encapsulated fragrance produced by micro-encapsulation technology and can be applied in textile finishing and the process...',
        date: 'November 16, 2023',
        link: '#'
    },
    {
        id: 3,
        image: 'https://sprays-workdo.myshopify.com/cdn/shop/articles/image_1469.png?v=1700117689',
        tag: 'Article',
        title: 'Sentimental Surprises',
        description: 'Aromatic microcapsule slowly releases a subtle fragrance, removing odor, relieving stress, and offering emotional stability and refreshing feel as the capsules are blown...',
        date: 'November 16, 2023',
        link: '#'
    },
    {
        id: 4,
        image: 'https://sprays-workdo.myshopify.com/cdn/shop/articles/image_1467.png?v=1700117642',
        tag: 'Article',
        title: 'The Scent Scribe',
        description: 'Thermal resistance: If high temperature needs to be applied, less than 10 minutes at 230℃ is recommended. A prolonged operation at high temperature higher than...',
        date: 'November 16, 2023',
        link: '#'
    },
    {
        id: 5,
        image: 'https://sprays-workdo.myshopify.com/cdn/shop/articles/image_1465.png?v=1700117611',
        tag: 'Article',
        title: 'The Scented Haven',
        description: 'Our raw materials derived from nature delivered to us with love by the farmers and the distillers. And since we take a lot from them, we try to give it back...',
        date: 'November 16, 2023',
        link: '#'
    }
];

const FeaturedBlog = () => {
    return (
        <section className="featured-blog-section">
            <div className="fb-container">
                <div className="fb-header">
                    <h3 className="fb-main-title">Revolutionizing Innovation and Practicality</h3>
                    <p className="fb-subtitle">From creating backgrounds in mixed media artworks to achieving unique patterns in abstract paintings, sprays offer a modern twist to artistic expression.</p>
                </div>

                <div className="fb-slider-wrapper">
                    <Swiper
                        key={blogPosts.length}
                        modules={[Navigation]}
                        loop={blogPosts.length > 1}
                        spaceBetween={24}
                        slidesPerView={1}
                        navigation={{
                            nextEl: '.fb-next',
                            prevEl: '.fb-prev',
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 24,
                            },
                            1280: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            }
                        }}
                        className="fb-swiper"
                    >
                        {[...blogPosts, ...blogPosts].map((post, index) => (
                            <SwiperSlide key={`${post.id}-${index}`}>
                                <div className="blog-card">
                                    <div className="blog-card-image">
                                        <a href={post.link}>
                                            <img src={post.image} alt={post.title} />
                                        </a>
                                    </div>
                                    <div className="blog-card-content">
                                        <span className="blog-tag">{post.tag}</span>
                                        <h4 className="blog-title">
                                            <a href={post.link}>{post.title}</a>
                                        </h4>
                                        <p className="blog-desc">{post.description}</p>
                                        <div className="blog-card-footer">
                                            <a href={post.link} className="blog-read-more">
                                                Read More
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                    <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </a>
                                            <span className="blog-date">{post.date}</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    
                    {/* Navigation Buttons */}
                    <button className="fb-nav fb-prev" aria-label="Previous Slide">
                        <svg viewBox="0 0 10 5"><path d="M2.37755e-08 2.57132C-3.38931e-06 2.7911 0.178166 2.96928 0.397953 2.96928L8.17233 2.9694L7.23718 3.87785C7.07954 4.031 7.07589 4.28295 7.22903 4.44059C7.38218 4.59824 7.63413 4.60189 7.79177 4.44874L9.43039 2.85691C9.50753 2.78197 9.55105 2.679 9.55105 2.57146C9.55105 2.46392 9.50753 2.36095 9.43039 2.28602L7.79177 0.69418C7.63413 0.541034 7.38218 0.544682 7.22903 0.702329C7.07589 0.859976 7.07954 1.11192 7.23718 1.26507L8.1723 2.17349L0.397965 2.17336C0.178179 2.17336 3.46059e-06 2.35153 2.37755e-08 2.57132Z" fill="currentColor"></path></svg>
                    </button>
                    <button className="fb-nav fb-next" aria-label="Next Slide">
                        <svg viewBox="0 0 10 5"><path d="M2.37755e-08 2.57132C-3.38931e-06 2.7911 0.178166 2.96928 0.397953 2.96928L8.17233 2.9694L7.23718 3.87785C7.07954 4.031 7.07589 4.28295 7.22903 4.44059C7.38218 4.59824 7.63413 4.60189 7.79177 4.44874L9.43039 2.85691C9.50753 2.78197 9.55105 2.679 9.55105 2.57146C9.55105 2.46392 9.50753 2.36095 9.43039 2.28602L7.79177 0.69418C7.63413 0.541034 7.38218 0.544682 7.22903 0.702329C7.07589 0.859976 7.07954 1.11192 7.23718 1.26507L8.1723 2.17349L0.397965 2.17336C0.178179 2.17336 3.46059e-06 2.35153 2.37755e-08 2.57132Z" fill="currentColor"></path></svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedBlog;
