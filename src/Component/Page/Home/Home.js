import React from "react";
import Banner from "./Banner/Banner";
import ListCardIntroduce from "./CardIntroduce/ListCardIntroduce";
import CateProduct from "./Cate Product/CateProduct";
import Banner2 from "./Banner2/Banner2";
import Quality from "./Quality/Quality";
import Header from "../../Global/Header/Header";
import ListCustomer from "./Customer/ListCustomer";
const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <ListCardIntroduce></ListCardIntroduce>
      <CateProduct></CateProduct>
      <Banner2></Banner2>
      <ListCustomer></ListCustomer>
      <Quality></Quality>
    </div>
  );
};

export default Home;
