import React from "react";
import "./Quality.css";
import clock from "../../../../assets/clock.webp";
import money from "../../../../assets/money.webp";
import cake from "../../../../assets/cake.webp";
const Quality = () => {
  return (
    <div className="container">
      <div data-aos="fade-up-left" className="quality mb-5  pb-5 ">
        <div className="container d-flex align-items-center justify-content-between flex">
          <div className="left d-flex align-items-center gap-3">
            <span className="icon">
              <img src={clock} alt="" />
            </span>
            <div className="quality-content">
              <h6>Quality Guarantee</h6>
              <p className="desc">Committed to Excellence in Every Bite</p>
            </div>
          </div>
          <div className="center d-flex align-items-center gap-3">
            <span className="icon">
              <img src={money} alt="" />
            </span>
            <div className="quality-content">
              <h6>Satisfaction Policy</h6>
              <p className="desc">Ensuring Your Delight with Every Order</p>
            </div>
          </div>
          <div className="right d-flex align-items-center gap-3">
            <span className="icon">
              <img src={cake} alt="" />
            </span>
            <div className="quality-content">
              <h6>Customization Promise</h6>
              <p className="desc">Your Vision, Our Creation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quality;
