import React from "react";
import Container from "react-bootstrap/esm/Container";
import "./CateProduct.css";
import ListCateProduct from "./ListCateProduct";
import { useState } from "react";
import listCate from "./ListCateProduct";
import UseFetch from "../../../../Features/UseFetch";
import { Link } from "react-router-dom";
const CateProduct = () => {
  const [tab, setTab] = useState(1);
  const listCate = UseFetch(
    "https://6721325598bbb4d93ca7c17a.mockapi.io/cate-product"
  );
  const filterMenu = listCate.filter((item) => {
    if (tab === 1) return item.category === "Birthday Cakes";
    if (tab === 2) return item.category === "Wedding Cakes";
    if (tab === 3) return item.category === "Healthy Cakes";
    return true;
  });
  const handleTab = (index) => {
    setTab(index);
  };
  return (
    <div>
      <Container>
        <div className="pb-5 mb-5">
          <ul className="listCate d-flex justify-content-center gap-5 pb-5">
            <li
              className={`${tab === 1 && "active"}`}
              onClick={() => handleTab(1)}
            >
              Birthday Cakes
            </li>
            <li
              className={`${tab === 2 && "active"}`}
              onClick={() => handleTab(2)}
            >
              Wedding Cakes
            </li>
            <li
              className={`${tab === 3 && "active"}`}
              onClick={() => handleTab(3)}
            >
              Healthy Cakes
            </li>
          </ul>
          <ListCateProduct filterMenu={filterMenu}></ListCateProduct>
          <Link to={"list-product"}>
            <button className="seeAll d-block mx-auto">SEE ALL PRODUCTS</button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default CateProduct;
