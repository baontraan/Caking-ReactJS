import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import wedding from "../../../../assets/Wedd.jpg";
import birthday from "../../../../assets/Birth.png";
import healthy from "../../../../assets/healthy.webp";
import "./Banner.css";
import { Link } from "react-router-dom";
const Banner = () => {
  const [activeTitle, setActiveTitle] = useState(false);
  const [activeText, setActiveText] = useState(false);
  const [activeButton, setActiveButton] = useState(false);

  const handleSetEvent = () => {
    setActiveTitle(false);
    setActiveText(false);
    setActiveButton(false);
    setTimeout(() => setActiveTitle(true), 500);
    setTimeout(() => setActiveText(true), 1000);
    setTimeout(() => setActiveButton(true), 1500);
  };

  useEffect(() => {
    handleSetEvent();

    const interval = setInterval(() => {
      handleSetEvent();
    }, 4300);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="banner mb-5 ">
      <Carousel controls={false} pause={false}>
        <Carousel.Item interval={4000}>
          <img className="bannerImage" src={wedding} alt="" />
          <Carousel.Caption className="custom-caption">
            <div className="container">
              <h1 className={`title mb-3 ${activeTitle && "active"}`}>
                Love, Laughter, and a Slice of <br /> Forever in Every Wedding
                Cake
              </h1>

              <p className={`text mb-5 ${activeText && "active"}`}>
                Each wedding cake is a sweet blessing for your journey together.
                Let us create a beautiful cake <br /> that symbolizes enduring
                love and happiness – where every slice is a cherished memory.
              </p>
              <button className={`view ${activeButton && "active"}`}>
                <Link to={"list-product"}>SHOP NOW</Link>
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3500}>
          <img className="bannerImage" src={birthday} alt="" />
          <Carousel.Caption className="custom-caption ">
            <div className="container">
              <h1 className={`title mb-3 ${activeTitle && "active"}`}>
                Make Every Birthday Extra Sweet!
              </h1>
              <p className={`text mb-5 ${activeText && "active"}`}>
                Celebrate life’s special moments with a custom birthday cake
                that’s as unique as you are. <br /> Our handcrafted creations
                are made to bring joy to every bite
              </p>
              <button className={`view ${activeButton && "active"}`}>
                <Link to={"list-product"}>SHOP NOW</Link>
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3700}>
          <img className="bannerImage" src={healthy} alt="" />
          <Carousel.Caption className="custom-caption ">
            <div className="container">
              <h1 className={`title mb-3 ${activeTitle && "active"}`}>
                Healthy Treats – The Smart Choice
              </h1>
              <p className={`text mb-5 ${activeText && "active"}`}>
                Discover a collection of healthy pastries made from natural,
                nutritious ingredients. <br /> Enjoy delightful flavors without
                the guilt, perfect for an active lifestyle!
              </p>
              <button className={`view ${activeButton && "active"}`}>
                <Link to={"list-product"}>SHOP NOW</Link>
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
