import React, { useState } from "react";
import "./Video-section.css";

function VideoSection() {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section
            className={`video-sec ${isOpen ? "active-popup" : ""}`}
            style={{ backgroundImage: "url('https://sprays-workdo.myshopify.com/cdn/shop/files/bg2.png?v=1700132466')" }}
        >
            <div className="video-overlay"></div>
            <div className="container">
                <div className="video-content">
                    <div className="section-title">
                        <span className="sub-title">Sprays</span>
                        <h2>The Science and Art of Sprays</h2>
                    </div>
                    <p>
                        Sprays, in their essence, are a versatile form of dispersing liquid,
                        gas, or fine particles in the atmosphere or onto a surface.
                    </p>
                    <div className="btn-wrapper justify-content-center">
                        <button className="play-btn" onClick={togglePopup}>
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 45 44" width="45" height="44">
                                <path fillRule="evenodd" d="m26.9 19.9c1.5 1 1.5 3.2 0 4.2l-6.1 4.1c-1.6 1.1-3.9-0.1-3.9-2.1v-8.2c0-2 2.3-3.2 3.9-2.1zm-0.7 1.1l-6.1-4.1c-0.8-0.6-1.9 0-1.9 1v8.2c0 1 1.1 1.6 1.9 1l6.1-4c0.8-0.5 0.8-1.6 0-2.1z" fill="white"></path>
                                <rect x=".5" y=".5" width="44" height="43" rx="21.5" stroke="white" fill="none"></rect>
                            </svg>
                            <span>play video</span>
                        </button>
                    </div>

                    {isOpen && (
                        <div className="overlay-popup1">
                            <div className="popup-inner">
                                <div className="vid-content content">
                                    <button className="close-popup" onClick={togglePopup}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="34" viewBox="0 0 35 34" fill="none">
                                            <line x1="2.29695" y1="1.29289" x2="34.1168" y2="33.1127" stroke="white" strokeWidth="2"></line>
                                            <line x1="0.882737" y1="33.1122" x2="32.7025" y2="1.29242" stroke="white" strokeWidth="2"></line>
                                        </svg>
                                    </button>
                                    <iframe
                                        id="video_article"
                                        width="560"
                                        height="315"
                                        title="YouTube video player"
                                        src="https://www.youtube.com/embed/WhKJl9W_1Fw?enablejsapi=1&autoplay=1&controls=0&fs=0&iv_load_policy=3&rel=0&showinfo=0&loop=1&playlist=WhKJl9W_1Fw&playsinline=1&modestbranding=1&branding=0&autohide=0&cc_load_policy=0&wmode=opaque"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default VideoSection;
