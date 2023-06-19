import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'font-awesome/css/font-awesome.min.css';
import '../assets/css/style.css';

const Footer = () => {
  return (
    <section className="newsletter container-fluid px-5 py-4">
        <div className="row">
            <div className="col-4">
                <div className="d-inline-block">
                    <div className="fa fa-paper-plane-o fa-3x"></div>
                </div>
                <div className="d-inline-block ms-3">
                    <h5>Signup For Newsletter</h5>
                    <p className="small">We'll never share your email address with a third-party</p>
                </div>
            </div>
            <div className="col-5">

                <div className="input-group">
                    <input type="text" className="form-control" aria-label="Text input with 2 dropdown buttons" placeholder="Email address" />
                    <button className="px-4 fw-bold header-btn">
                        Subscribe
                    </button>
                </div>
            </div>
            <div className="col-3 fa-lg socials">
                <a href="#">
                    <i className="fa fa-facebook"></i>
                </a>
                <a href="#">
                    <i className="fa fa-twitter"></i>
                </a>
                <a href="#">
                    <i className="fa fa-google-plus"></i>
                </a>
                <a href="#">
                    <i className="fa fa-pinterest"></i>
                </a>
            </div>
        </div>
    </section>
  );
};

export default Footer;
