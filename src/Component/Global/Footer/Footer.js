import React from "react";
import "./Footer.css";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import logo from "../../../assets/logoFoot.webp";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="container">
      <div data-aos="fade-down-right" className="footer py-5">
        <Row>
          <Col md={6} lg={3}>
            <div className="logo-foot pb-3">
              <img src={logo} alt="" />
            </div>
            <p className="text-center">"Every bite tells a story!"</p>
            <p className="text-center pb-5">- Vì Anh Là John Mà -</p>
            <div className="social-media text-center">
              <Link href="/">
                <i class="fa-brands fa-facebook d-block text-center"></i>
              </Link>
              <Link href="/">
                <i class="fa-brands fa-instagram d-block text-center"></i>
              </Link>
              <Link href="/">
                <i class="fa-brands fa-github d-block text-center"></i>
              </Link>
            </div>
          </Col>
          <Col md={6} lg={3}>
            <h6 className="foot-title">INFORMATION</h6>
            <ul>
              <li>Custom Service</li>
              <li>F.A.Q.'s</li>
              <li>Ordering Tracking</li>
              <li>Contact Us</li>
              <li>Events</li>
              <li>Popular</li>
            </ul>
          </Col>
          <Col md={6} lg={3}>
            <h6 className="foot-title ">Services</h6>
            <ul>
              <li>Sitemap</li>
              <li>Privacy Policy</li>
              <li>Your Account</li>
              <li>Advanced Search</li>
              <li>Term & Condition</li>
              <li>Contact Us</li>
            </ul>
          </Col>
          <Col md={6} lg={3}>
            <h6 className="foot-title">Account</h6>
            <ul>
              <li>
                Head Office: 121 Lê Đức Thọ, Phường 17, Quận Gò Vấp, TP.HCM
              </li>
              <li>Tel: 095 6897 906</li>
              <li>Email: I'mManSpider@gmail.com</li>
            </ul>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
