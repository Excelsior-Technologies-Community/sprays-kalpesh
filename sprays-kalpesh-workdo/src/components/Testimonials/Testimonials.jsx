import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Testimonials.css';

const testimonialData = [
  {
    id: 1,
    image: 'https://sprays-workdo.myshopify.com/cdn/shop/files/testi1.png?v=1700136430',
    title: 'Excellent!',
    description: 'from cooling systems in industrial machinery to lubrication processes and the creation of various products. They are integral in the production of items ranging from pharmaceuticals to food.',
    name: 'Isabel Hanson',
    role: 'SEO Manger',
    rating: '4.5 / 5.0',
    ratingImg: 'https://sprays-workdo.myshopify.com/cdn/shop/files/ratings.png?v=1700136430'
  },
  {
    id: 2,
    image: 'https://sprays-workdo.myshopify.com/cdn/shop/files/testi2.png?v=1700136430',
    title: 'Great Products !!',
    description: 'Sprays also facilitate cooling systems in industries dealing with high-temperature processes, effectively dissipating heat through atomized droplets.',
    name: 'Ewan Sharpe',
    role: 'Developer',
    rating: '4.5 / 5.0',
    ratingImg: 'https://sprays-workdo.myshopify.com/cdn/shop/files/ratings.png?v=1700136430'
  },
  {
    id: 3,
    image: 'https://sprays-workdo.myshopify.com/cdn/shop/files/testi1.png?v=1700136430',
    title: 'Great Customer Support',
    description: 'Agriculture benefits significantly from sprays, employing them for the controlled distribution of pesticides, fertilizers, and herbicides.',
    name: 'John Doe',
    role: 'Client',
    rating: '4.5 / 5.0',
    ratingImg: 'https://sprays-workdo.myshopify.com/cdn/shop/files/ratings.png?v=1700136430'
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="section-header">
          <div className="section-title">
            <h2>Testimonials</h2>
          </div>
        </div>

        <div className="testimonials-slider-wrapper">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: '.testi-next',
              prevEl: '.testi-prev',
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              }
            }}
            className="testimonials-swiper"
          >
            {[...testimonialData, ...testimonialData].map((testi, index) => (
              <SwiperSlide key={`${testi.id}-${index}`}>
                <div className="testi-card">
                  <div className="testi-card-inner">
                    <div className="img-wrapper">
                      <img src={testi.image} alt={testi.title} />
                    </div>
                    <div className="testi-content">
                      <div className="testi-title-row">
                        <h4>{testi.title}</h4>
                        <div className="ratings">
                          <img src={testi.ratingImg} alt="rating" />
                          <span>{testi.rating}</span>
                        </div>
                      </div>
                      <p className="testi-desc">{testi.description}</p>
                      <h6 className="testi-author">
                        {testi.name}, <span>{testi.role}</span>
                      </h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button className="testi-nav testi-prev" aria-label="Previous">
            <svg viewBox="0 0 10 5"><path d="M2.37755e-08 2.57132C-3.38931e-06 2.7911 0.178166 2.96928 0.397953 2.96928L8.17233 2.9694L7.23718 3.87785C7.07954 4.031 7.07589 4.28295 7.22903 4.44059C7.38218 4.59824 7.63413 4.60189 7.79177 4.44874L9.43039 2.85691C9.50753 2.78197 9.55105 2.679 9.55105 2.57146C9.55105 2.46392 9.50753 2.36095 9.43039 2.28602L7.79177 0.69418C7.63413 0.541034 7.38218 0.544682 7.22903 0.702329C7.07589 0.859976 7.07954 1.11192 7.23718 1.26507L8.1723 2.17349L0.397965 2.17336C0.178179 2.17336 3.46059e-06 2.35153 2.37755e-08 2.57132Z" fill="currentColor"></path></svg>
          </button>
          <button className="testi-nav testi-next" aria-label="Next">
            <svg viewBox="0 0 10 5"><path d="M2.37755e-08 2.57132C-3.38931e-06 2.7911 0.178166 2.96928 0.397953 2.96928L8.17233 2.9694L7.23718 3.87785C7.07954 4.031 7.07589 4.28295 7.22903 4.44059C7.38218 4.59824 7.63413 4.60189 7.79177 4.44874L9.43039 2.85691C9.50753 2.78197 9.55105 2.679 9.55105 2.57146C9.55105 2.46392 9.50753 2.36095 9.43039 2.28602L7.79177 0.69418C7.63413 0.541034 7.38218 0.544682 7.22903 0.702329C7.07589 0.859976 7.07954 1.11192 7.23718 1.26507L8.1723 2.17349L0.397965 2.17336C0.178179 2.17336 3.46059e-06 2.35153 2.37755e-08 2.57132Z" fill="currentColor"></path></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
