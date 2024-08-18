import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <>
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <div className="logo">
            <h1 className="logo-name">
              foodie-Go<p className="logo-slogan">Khao-Pioo</p>
            </h1>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
            dolores ipsa error. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Et illum quo, iste ullam quod quam laboriosam
            nobis molestiae expedita saepe?
          </p>
          <div className="social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-70892-18874</li>
            <li>contact@foodiego.com</li>
          </ul>
        </div>
      </div>
      
    </div>
    <hr />
    <p className="copyright-text">Copyright 2024 &copy;foodiego.com -all right reserved</p>
    </>
  );
};

export default Footer;
