import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
    return (
        <section className="newsletter-section">
            <div className="n-container">
                <div className="n-content">
                    <div className="n-header">
                        <h2 className="n-title">
                            Subscribe newsletter and <br />
                            <strong>get -20% off</strong>
                        </h2>
                        <p className="n-desc">
                            Sprays play a crucial role in manufacturing, from cooling systems in industrial machinery to lubrication processes and the creation of various products.
                        </p>
                    </div>

                    <div className="n-form-wrapper">
                        <form className="n-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="n-input-group">
                                <input 
                                    type="email" 
                                    placeholder="Enter email address..." 
                                    className="n-input"
                                    required 
                                />
                                <button type="submit" className="n-submit-btn" aria-label="Subscribe">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path fillRule="evenodd" clip-rule="evenodd" d="M4.97863e-08 9.99986C-7.09728e-06 10.4601 0.373083 10.8332 0.83332 10.8332L17.113 10.8335L15.1548 12.7358C14.8247 13.0565 14.817 13.584 15.1377 13.9142C15.4584 14.2443 15.986 14.2519 16.3161 13.9312L19.7474 10.5979C19.9089 10.441 20.0001 10.2254 20.0001 10.0002C20.0001 9.77496 19.9089 9.55935 19.7474 9.40244L16.3161 6.0691C15.986 5.74841 15.4584 5.75605 15.1377 6.08617C14.817 6.41628 14.8247 6.94387 15.1548 7.26456L17.1129 9.1668L0.833346 9.16654C0.373109 9.16653 7.24653e-06 9.53962 4.97863e-08 9.99986Z" fill="white"></path>
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
