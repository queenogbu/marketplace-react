import React from 'react';

import enGbFlag from '../assets/images/language/en-gb/en-gb.png';

const Header = () => {
  return (
    <header>
        <div className="container-fluid px-5 py-2 nav-box">
            <div className="row welcome-top">
                <div className="col-8">Welcome to Emarket ! Wrap new offers / gift every single day on Weekends - New Coupon code: Happy2017</div>

                <div className="col-4 text-end">
                    <div className="d-inline-block me-2">$ US Dollar <i className="fa fa-caret-down"></i></div>
                    <div className="d-inline-block me-2 text-secondary">|</div>
                    <div className="d-inline-block">
                        <img src={enGbFlag} alt="English" /> English <i className="fa fa-caret-down"></i>
                    </div>
                </div>
            </div>

            <div className="row my-4">
                <div className="col-2 py-2">
                    <a href="/">
                        <img src="https://opencart.smartaddons.com/themes/so_emarket/image/catalog/logo.png" alt="MarketPlace" className="logo" />
                    </a>
                </div>
                <div className="col-10">
                    <nav className="navbar navbar-expand-lg navbar-dark">
                        <div
                            className="container-fluid">
                            {/* <!-- <a className="navbar-brand" href="#">Navbar</a> --> */}
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="/">HOME</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">ABOUT</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">CATEGORIES</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">PAGES</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            MORE
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li>
                                                <a className="dropdown-item" href="#">Action</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">Another action</a>
                                            </li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <div className="text-end">
                                    <div className="d-inline-block me-2">
                                        <i className="fa fa-lock"></i> <a href="/login">Login</a> or <a href="/register">Register</a>
                                    </div>
                                    <div className="d-inline-block me-2 text-secondary">|</div>
                                    <span>Contact (+234)4 567 890</span>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

            <div className="row my-4">
                <div className="col-2-5">
                    <button className="header-btn">
                        <i className="fa fa-bars"></i>
                        <div className="d-inline-block px-3">ALL CATEGORIES</div>
                        <i className="fa fa-angle-down"></i>
                    </button>
                </div>
                <div className="col-5-5">
                    <div className="input-group">
                        <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">All Category</button>
                        <ul className="dropdown-menu">
                            <li>
                                <a className="dropdown-item" href="#">Action before</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">Another action before</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </li>
                            <li><hr className="dropdown-divider" /></li>
                            <li>
                                <a className="dropdown-item" href="#">Separated link</a>
                            </li>
                        </ul>
                        <input type="text" className="form-control" aria-label="Text input with 2 dropdown buttons" placeholder="Search" />
                        <button className="px-5 header-btn">
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </div>
                <div className="col-4 text-end">
                    <div className="d-inline-block mx-4">
                        <i className="fa fa-refresh fa-2x"></i>
                    </div>
                    <div className="d-inline-block mx-4">
                        <i className="fa fa-heart fa-2x"></i>
                    </div>
                    <div className="d-inline-block mx-4 position-relative shopping-bag">
                        <i className="fa fa-shopping-bag fa-lg"></i>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-white text-dark">
                            0
                        </span>
                    </div>
                    <div className="d-inline-block fw-bold">
                        MY CART - $0.00
                    </div>
                </div>
            </div>
        </div>
    </header>
  );
};

export default Header;
