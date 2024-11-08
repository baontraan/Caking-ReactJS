import React, { useEffect } from "react";
import "./ListProduct.css";
import Banner4 from "./Banner4";
import Header1 from "../../Global/Header1/Header1";
import BoxProduct from "./BoxProduct";
const ListProduct = () => {
  useEffect(() => {
    // Cuộn lên đầu trang mỗi khi component Detail được render
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header1></Header1>
      <Banner4></Banner4>
      <BoxProduct></BoxProduct>
    </div>
  );
};

export default ListProduct;
