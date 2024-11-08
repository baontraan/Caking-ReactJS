import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import CardIntroduce from "./CardIntroduce";
import UseFetch from "../../../../Features/UseFetch";
const ListCardIntroduce = () => {
  const list = UseFetch(
    "https://672104b098bbb4d93ca71ec6.mockapi.io/card-introduce"
  );
  return (
    <div>
      <Container>
        <div className="d-flex  mb-5">
          <Row>
            {list.map((item) => (
              <Col sm={12} md={6} lg={4}>
                <CardIntroduce
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  content={item.content}
                ></CardIntroduce>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default ListCardIntroduce;
