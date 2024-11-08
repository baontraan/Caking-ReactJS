import React from "react";
import CustomerItem from "./CustomerItem";
import "./Customer.css";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const ListCustomer = () => {
  const vote = [
    {
      id: 1,
      desc: "The Cakes are so delicious that I can't stop eating. Very excelent",
      img: "https://png.pngtree.com/background/20230424/original/pngtree-portrait-of-young-blonde-woman-with-glasses-picture-image_2460122.jpg",
      name: "Yui Hanato",
      job: "Senior Developer",
    },
    {
      id: 2,
      desc: "The Cakes are so delicious that I can't stop eating. Very excelent",
      img: "https://bizweb.dktcdn.net/100/175/849/files/chup-anh-beauty-shot-nguoi-nuoc-ngoai-o-viet-nam-trong-studio-ha-noi-02.jpg?v=1552714763903",
      name: "Tokuda Sensei",
      job: "Junior Developer",
    },
    {
      id: 3,
      desc: "The Cakes are so delicious that I can't stop eating. Very excelent",
      img: "https://icdn.dantri.com.vn/2018/3/9/chan-dung-phu-nu-2-1520530990994244460543.jpg",
      name: "Eimi Fukuda",
      job: "Teach Lead",
    },
    {
      id: 4,
      desc: "The Cakes are so delicious that I can't stop eating. Very excelent",
      img: "https://icdn.dantri.com.vn/2018/3/9/chan-dung-phu-nu-5-1520530990989325109347.jpg",
      name: "Maria Ozawa",
      job: "Project Manager",
    },
    {
      id: 5,
      desc: "The Cakes are so delicious that I can't stop eating. Very excelent",
      img: "https://icdn.dantri.com.vn/2018/3/9/chan-dung-phu-nu-6-15205309909871332082363.jpg",
      name: "Uni Ichi",
      job: "Fresher Developer",
    },
    {
      id: 6,
      desc: "The Cakes are so delicious that I can't stop eating. Very excelent",
      img: "https://image.tinnhanhchungkhoan.vn/w640/Uploaded/2024/xpivpivo/2018_11_19/matt-smith-yuanta_ZHUO.jpg",
      name: "Shuzuki",
      job: "Business Analysist",
    },
    {
      id: 7,
      desc: "The Cakes are so delicious that I can't stop eating. Very excelent",
      img: "https://cdn.tuoitre.vn/thumb_w/1200/2019/4/29/kenny-saito-28-4-3read-only-1556513695544424579825.jpg",
      name: "Uchiha Sasuke",
      job: "Tester",
    },
    {
      id: 8,
      desc: "The Cakes are so delicious that I can't stop eating. Very excelent",
      img: "https://cdn.tuoitre.vn/thumb_w/1200/2019/4/29/ong-david-james-28-4-3read-only-1556513760048482698132.jpg",
      name: "Yamaha Honda",
      job: "Designer",
    },
    {
      id: 9,
      desc: "The Cakes are so delicious that I can't stop eating. Very excelent",
      img: "https://c.wallhere.com/photos/cd/5c/women_outdoors_water_blue_Lods_Franck_women_portrait-1237395.jpg!d",
      name: "My Wife",
      job: "Mobile Developer",
    },
    {
      id: 10,
      desc: "The Cakes are so delicious that I can't stop eating. Very excelent",
      img: "https://img.lovepik.com/photo/20211202/medium/lovepik-foreign-elegant-female-black-and-white-portrait-picture_501409989.jpg",
      name: "My Second Wife",
      job: "Game Developer",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200, // Kích thước màn hình từ 1200px trở xuống
        settings: {
          slidesToShow: 3, //Hiển thị 4 slide
        },
      },
      {
        breakpoint: 992, // Kích thước màn hình từ 992px trở xuống
        settings: {
          slidesToShow: 2, // Hiển thị 3 slide
        },
      },

      {
        breakpoint: 768, // Kích thước màn hình từ 576px trở xuống
        settings: {
          slidesToShow: 1, // Hiển thị 1 slide
        },
      },
    ],
  };
  return (
    <Container>
      <Slider {...settings}>
        {vote.map((item) => (
          <CustomerItem
            key={item.id}
            img={item.img}
            desc={item.desc}
            name={item.name}
            job={item.job}
          ></CustomerItem>
        ))}
      </Slider>
    </Container>
  );
};

export default ListCustomer;
