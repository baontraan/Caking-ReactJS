import React from "react";
import "./Banner2.css";
import Carousel from "react-bootstrap/Carousel";
import banner2 from "../../../../assets/banner2.webp";
import { Link } from "react-router-dom";
const Banner2 = () => {
  return (
    <div data-aos="fade-up-right" className="banner2 pb-5 mb-5">
      <Carousel controls={false} indicators={false}>
        <Carousel.Item>
          <img className="banner2-Image" src={banner2} alt="" />
          <Carousel.Caption className="custom-caption">
            <div className="container">
              <h1 className="banner2-title mb-3 text-dark">
                Sweet Creations, <br /> Unforgettable Moments
              </h1>
              <p className="banner2-text mb-5 text-dark">
                Smul aan ons heerlike koeke wat met liefde en die beste
                bestanddele <br />
                gemaak is. Perfek vir elke viering, groot of klein. Van
                klassieke geure tot <br /> pasgemaakte ontwerpe, ons koeke word
                tot perfeksie gebak.
              </p>
              <Link to={"list-product"}>
                <button className="banner2-view">SEE ALL PRODUCTS</button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner2;
