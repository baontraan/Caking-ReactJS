import React from "react";
import "./CateProduct.css";
import { Link } from "react-router-dom";
const CateItem = (props) => {
  return (
    <div data-aos="fade-left" className="cardItem d-flex pb-5 mb-3">
      <Link to={`/Detail/${props.id}`}>
        <div className="card-thumb">
          <img className="mb-4 main-image" src={props.image1} alt="" />
          <img className="overlay-image" src={props.image2} alt="" />

          <div className="text-center">
            <h3 className="item-title">{props.title}</h3>
            <div className="price mb-2 ">
              ${props.price} <span className="discount">${props.discount}</span>{" "}
            </div>
          </div>
          <div className="sale">Sale</div>

          <div className="category text-center text-danger">
            <span style={{ color: "#E31C79", marginRight: "10px" }}>
              <i class="fa-solid fa-utensils"></i>
            </span>
            {props.category}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CateItem;
