import React from "react";
import Carousel from "react-bootstrap/Carousel";
import banner4 from "../../../assets/banner4.webp";
import { Link } from "react-router-dom";
import ListCarouselItem from "./ListCarouselItem";
const Banner4 = () => {
  return (
    <div className="banner4 pb-5 mb-5">
      <Carousel controls={false} indicators={false}>
        <Carousel.Item>
          <img className="banner4-Image" src={banner4} alt="" />
          <Carousel.Caption className="custom-caption">
            <div className="container text-center">
              <h1 className="banner4-title mb-3 ">SHOP</h1>
              <div className="d-flex justify-content-center gap-3 pb-5">
                <Link to={"/"} className="d-flex gap-1 hover">
                  <i class="fa-solid fa-house"></i>
                  <p className="ms-2">HOME</p>
                </Link>
                <span>
                  <i class="fa-solid fa-chevron-right"></i>
                </span>
                <p style={{ cursor: "pointer" }}>SHOP</p>
              </div>
              <ListCarouselItem></ListCarouselItem>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner4;
