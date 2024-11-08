import React from "react";
import "./Customer.css";
const CustomerItem = (props) => {
  return (
    <div data-aos="fade-up-left" className="pb-5 mb-5 customer-card ms-3">
      <span>
        <i class="fa-solid fa-quote-left"></i>
      </span>
      <p className="des-cus">{props.desc}</p>
      <div className="d-block text-warning pb-4 text-center">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
      </div>
      <div className="d-flex gap-4 align-items-center">
        <img src={props.img} alt="" className="customer-img" />
        <div>
          <p className="name">{props.name}</p>
          <p className="job">{props.job}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerItem;
