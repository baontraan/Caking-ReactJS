import React, { useEffect } from "react";
import "./CardIntroduce.css";
import { Link } from "react-router-dom";
const CardIntroduce = (props) => {
  return (
    <div data-aos="fade-right" className="cardd text-center mb-5">
      <Link to={"/list-product"}>
        <div className="thumb">
          <img className="card-image" src={props.image} alt="" />
        </div>
        <div className="card-content">
          <h3 className="title1 mb-3">{props.title}</h3>
          <p className="content mb-5">{props.content}.</p>
          <button className="shop">SHOP NOW</button>
        </div>
      </Link>
    </div>
  );
};

export default CardIntroduce;
