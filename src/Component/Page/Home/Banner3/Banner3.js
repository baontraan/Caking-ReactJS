import React from "react";
import "./Banner3.css";
import banner3 from "../../../../assets/banner3.webp";
import { Link } from "react-router-dom";
const Banner3 = () => {
  return (
    <div className="container ">
      <div className="banner3 pb-5 mb-4">
        <div className="banner-left">
          <div className="container">
            <h1 className="banner3-title mb-3 text-dark">
              Sweet Delights Bakery
            </h1>
            <p className="banner3-text mb-5 text-dark">
              Experience the luxury of our gourmet cakes, crafted with passion
              and precision. Perfect for weddings, birthdays, and all special
              events. Satisfy your sweet tooth with our delightful range of
              cakes. Each bite is a blissful journey into sweetness and joy.
            </p>
            <Link to={"list-product"}>
              <button className="banner3-view">SEE ALL PRODUCTS</button>
            </Link>
          </div>
        </div>
        <div className="banner-right">
          <a href="">
            <div className="image-frame">
              <img src={banner3} alt="" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner3;
