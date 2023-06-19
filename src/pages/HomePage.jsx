import React, { useEffect } from 'react';

import slider2 from '../assets/images/slider-2-950x450.jpg';
import banner1 from '../assets/images/banner1.jpg';
import banner2 from '../assets/images/banner2.jpg';

const HomePage = () => {
    useEffect(() => {
        document.title = 'eMarket - Homepage';
    }, []);

    return (
        <div className="row gx-1">
            <div className="col-2 main-sidebar small">
                <div className="card">
                    <nav className="nav flex-column">
                        <a className="nav-link" href="#"><i className="fa fa-gift"></i> Gifts & Toys</a>
                        <a className="nav-link" href="#"><i className="fa fa-plug"></i> Electronics</a>
                        <a className="nav-link" href="#"><i className="fa fa-diamond"></i> Fashion & Accessories</a>
                        <a className="nav-link" href="#"><i className="fa fa-shopping-bag"></i> Bags & Shoes</a>
                        <a className="nav-link" href="#"><i className="fa fa-video-camera"></i> Optimum Electronics</a>
                        <a className="nav-link" href="#"><i className="fa fa-bath"></i> Bathroom</a>
                        <a className="nav-link" href="#"><i className="fa fa-heartbeat"></i> Health & Beauty</a>
                        <a className="nav-link" href="#"><i className="fa fa-dot-circle-o"></i> Home & Light</a>
                        <a className="nav-link" href="#"><i className="fa fa-gift"></i> Metallurgy</a>
                        <a className="nav-link" href="#"><i className="fa fa-bed"></i> Bedroom</a>
                        <a className="nav-link" href="#"><i className="fa fa-cogs"></i> Industrial Parts</a>
                        <a className="nav-link" href="#"><i className="fa fa-chevron-down"></i> More Categories</a>
                    </nav>
                </div>
            </div>
            <div className="col-10 ps-5 main-content">
                <div className="row">
                    <div className="col-9">
                        <img src={slider2} alt="Slide 1" />
                    </div>
                    <div className="col-3">
                        <img src={banner1} alt="Side Image 1" className="d-block mb-5" />
                        <img src={banner2} alt="Side Image 2" className="d-block" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
