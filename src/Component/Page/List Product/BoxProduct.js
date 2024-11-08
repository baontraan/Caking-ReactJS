import React, { useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import UseFetch from "../../../Features/UseFetch";
import ListCardItem from "./ListCardItem";
const BoxProduct = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  const [sortOption, setSortOption] = useState("default");
  const handleSortChange = (option) => {
    setSortOption(option);
    setShow(false); // Đóng menu khi đã chọn xong
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const listCard = UseFetch(
    "https://6721325598bbb4d93ca7c17a.mockapi.io/cate-product"
  );
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  };
  const handleCategoryClick = (category) => {
    setSelectedCategory(category); // Cập nhật danh mục được chọn
  };

  const filteredProducts = listCard.filter((item) => {
    const matchesSearch = item.category
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory
      ? item.category === selectedCategory
      : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="box-product pb-5">
      <Container>
        <Row>
          <Col lg={3}>
            <div className="filter">
              <p className="filterName">Filter By Name</p>
              <input
                type="text"
                placeholder="Search name product"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            <div className="categories">Product Categories</div>
            <div className="list-categories">
              <div
                className="cateWrapper"
                onClick={() => setSelectedCategory("")}
              >
                <div className="liName">All Products</div>
                <div className="liNumber">20</div>
              </div>
              <div
                className="cateWrapper"
                onClick={() => handleCategoryClick("Birthday Cakes")}
              >
                <div className="liName">Birthday Cakes</div>
                <div className="liNumber">8</div>
              </div>
              <div
                className="cateWrapper"
                onClick={() => handleCategoryClick("Wedding Cakes")}
              >
                <div className="liName">Wedding Cakes</div>
                <div className="liNumber">8</div>
              </div>
              <div
                className="cateWrapper"
                onClick={() => handleCategoryClick("Healthy Cakes")}
              >
                <div className="liName">Healthy Cakes</div>
                <div className="liNumber">4</div>
              </div>
            </div>
          </Col>
          <Col lg={9}>
            <div className="arrange d-flex justify-content-between align-items-center pb-4">
              <div className="count">
                Show {filteredProducts.length} of {listCard.length} results
              </div>
              <div
                className="sort d-flex justify-content-between align-items-center"
                onClick={handleClick}
              >
                <p>
                  {sortOption === "default"
                    ? "Default sort"
                    : `Sort by ${sortOption}`}
                </p>
                <i className="fa-solid fa-angle-down d-block mx-auto"></i>
                <div className={`sorting ${show && "active"}`}>
                  <div onClick={() => handleSortChange("a-z")}>
                    Sort by A - Z
                  </div>
                  <div onClick={() => handleSortChange("z-a")}>
                    Sort by Z - A
                  </div>
                  <div onClick={() => handleSortChange("price-low-high")}>
                    Low to High
                  </div>
                  <div onClick={() => handleSortChange("price-high-low")}>
                    High to Low
                  </div>
                </div>
              </div>
            </div>

            <Row>
              <ListCardItem
                products={filteredProducts}
                sortOption={sortOption}
              ></ListCardItem>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BoxProduct;
