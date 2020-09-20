import React from 'react';
import './Footer.css';

const Footer = () => (
  <div className="my-footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-4 text-center">
          <h5>About Foodlicious</h5>
          <ul>
            <li><a href="/#">About Us</a></li>
            <li><a href="/#">Contact Us</a></li>
          </ul>
        </div>
        <div className="col-sm-4 text-center">
          <h5>Support</h5>
          <ul>
            <li><a href="/#">FAQ</a></li>
            <li><a href="/#">Help Desk</a></li>
            <li><a href="/#">Forums</a></li>
          </ul>
        </div>
        <div className="col-sm-4 text-center">
          <h5>Download App</h5>
          <ul>
            <li><a href="/#">Google Play</a></li>
            <li><a href="/#">App Store</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="social-networks">
      <a href="/#" className="twitter"><i className="fab fa-twitter"></i></a>
      <a href="/#" className="facebook"><i className="fab fa-facebook-f"></i></a>
      <a href="/#" className="google"><i className="fab fa-google-plus-g"></i></a>
    </div>
    <div className="text-center footer-copyright">
      <p>Copyright 2020 Foodlicious. All right reserved.</p>
    </div>
  </div>
);

export default Footer;
