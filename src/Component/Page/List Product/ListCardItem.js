import React from "react";
import CateItem from "../Home/Cate Product/CateItem";
import UseFetch from "../../../Features/UseFetch";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
const ListCardItem = ({ products, sortOption }) => {
  const listCard = UseFetch(
    "https://6721325598bbb4d93ca7c17a.mockapi.io/cate-product"
  );

  const sortedList = [...products].sort((a, b) => {
    switch (sortOption) {
      case "a-z":
        return a.title.localeCompare(b.title);
      case "z-a":
        return b.title.localeCompare(a.title);
      case "price-low-high":
        return a.price - b.price;
      case "price-high-low":
        return b.price - a.price;
      default:
        return 0;
    }
  });
  return (
    <div>
      <Container>
        <Row>
          {sortedList.map((item) => (
            <Col sm={12} md={6} lg={4}>
              <CateItem
                key={item.id}
                id={item.id}
                image1={item.image1}
                image2={item.image2}
                title={item.title}
                price={item.price}
                discount={item.discount}
                category={item.category}
              ></CateItem>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ListCardItem;
