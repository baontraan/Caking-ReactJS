import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import UseFetch from "../../../../Features/UseFetch";
import Container from "react-bootstrap/esm/Container";
import CateItem from "./CateItem";
const ListCateProduct = ({ filterMenu }) => {
  const listCate = UseFetch(
    "https://6721325598bbb4d93ca7c17a.mockapi.io/cate-product"
  );
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // Bật chế độ tự động
    autoplaySpeed: 3000, // Thay đổi slide mỗi 3 giây
    pauseOnHover: true, // Dừng khi hover vào slider
    arrows: true,
    responsive: [
      {
        breakpoint: 1243, // Kích thước màn hình từ 1200px trở xuống
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1, // Hiển thị 4 slide
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="margin">
      <Container>
        <Slider {...settings}>
          {filterMenu.map((item) => (
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
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default ListCateProduct;
