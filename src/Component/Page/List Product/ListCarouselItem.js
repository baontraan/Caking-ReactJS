import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselItem from "./CarouselItem";
import Container from "react-bootstrap/esm/Container";
const ListCarouselItem = () => {
  const data = [
    {
      id: 1,
      img: "https://caking-store-newdemo.myshopify.com/cdn/shop/collections/image_551.jpg?v=1721703277&width=600",
      title: "Birthday Cakes",
    },
    {
      id: 2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqI8N6eari_3sPTZOVp5GfBdUvGDAqYPr7hg&s",
      title: "Wedding Cakes",
    },
    {
      id: 3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG8hKbbjZPOiXuWnMmygTFX-MhIASkX1zoOQ&s",
      title: "Healthy Cakes",
    },
  ];
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true, // Bật chế độ tự động
    autoplaySpeed: 3000, // Thay đổi slide mỗi 3 giây
    pauseOnHover: true, // Dừng khi hover vào slider
  };
  return (
    <div>
      <Container>
        <div className="d-flex justify-content-center gap-5">
          {data.map((item) => (
            <CarouselItem
              key={item.id}
              img={item.img}
              title={item.title}
            ></CarouselItem>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ListCarouselItem;
