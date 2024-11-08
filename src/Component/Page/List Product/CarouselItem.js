import React from "react";
const CarouselItem = (props) => {
  return (
    <div className="cardCarousel">
      <div className="carouselWrapper">
        <img src={props.img} alt="" />
      </div>
      <p className="cardCarouselTitle">{props.title}</p>
    </div>
  );
};

export default CarouselItem;
