import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Header2 from "../../Global/Header2/Header2";
import "./Detail.css";
import UseFetch from "../../../Features/UseFetch";
import { useParams } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CateItem from "../Home/Cate Product/CateItem";
import { useCart } from "../../../Context/CartContext";
import { toast } from "react-toastify";
const Detail = () => {
  const { id } = useParams();
  const productDetail = UseFetch(
    `https://6721325598bbb4d93ca7c17a.mockapi.io/cate-product/${id}`
  );
  const related = UseFetch(
    "https://6727ba9b270bd0b9755369c7.mockapi.io/RelatedProduct"
  );
  const [activeImage, setActiveImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("16cm");
  const [price, setPrice] = useState(0);
  useEffect(() => {
    if (productDetail && productDetail.image1) {
      setActiveImage(productDetail.image1);
    }
    if (productDetail && productDetail.price) {
      setSelectedSize("16cm");
      setPrice(productDetail.price); // Đặt giá mặc định cho size 16cm khi render lần đầu
    }
  }, [productDetail]);

  useEffect(() => {
    // Cuộn lên đầu trang mỗi khi component Detail được render
    window.scrollTo(0, 0);
  }, [id]);

  const handleThumbnailClick = (image) => {
    setActiveImage(image); // Thay đổi ảnh lớn
  };

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(Math.max(1, quantity - 1));

  const { addToCart } = useCart();
  const handleAddCart = () => {
    toast.success("Add cart suceessed !", {
      position: "top-center",
      autoClose: 1000,
    });
    addToCart(productDetail, quantity, selectedSize);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
    if (size === "26cm") {
      setPrice((parseFloat(productDetail.price) + 20).toFixed(2));
    } else {
      setPrice(productDetail.price);
    }
  };

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
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
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
    <div>
      <Header2></Header2>
      <Container className="my-5">
        <Row>
          <Col lg={6}>
            <div className="thumbimg pb-5">
              <div
                className="zoom-image"
                // style={{
                //   backgroundImage: `url(${activeImage})`,
                // }}
              >
                <img src={activeImage} alt="" />
              </div>
            </div>
            <div className="d-flex gap-3 small pb-5">
              <img
                src={productDetail.image1}
                alt="Thumbnail 1"
                className={activeImage === productDetail.image1 ? "active" : ""}
                onClick={() => handleThumbnailClick(productDetail.image1)}
              />
              <img
                src={productDetail.image2}
                alt="Thumbnail 2"
                className={activeImage === productDetail.image2 ? "active" : ""}
                onClick={() => handleThumbnailClick(productDetail.image2)}
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className="info">
              <div className="name">
                <h1>{productDetail.title}</h1>
              </div>
              <span className="start pb-4 d-block text-warning">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </span>
              <div className="size d-flex align-items-center gap-5 pb-3">
                <p className="size-name">size</p>
                <div
                  className={`size-of ${selectedSize === "16cm" && "active"}`}
                  onClick={() => handleSizeChange("16cm")}
                >
                  16cm
                </div>
                <div
                  className={`size-of ${selectedSize === "26cm" && "active"}`}
                  onClick={() => handleSizeChange("26cm")}
                >
                  26cm
                </div>
              </div>
              <div className="price d-flex gap-3 align-items-center">
                <div className="cost fs-4">${price}</div>
                <div className="discount fs-6">${productDetail.discount}</div>
              </div>
              <div className="desc my-5">
                <p>{productDetail.desc}</p>
              </div>
              <div className="icon">
                <div className="d-flex align-items-center gap-3">
                  <i className="fa-regular fa-square-check fs-5"></i>
                  <p>
                    Pickup available at Japan Store. Usually ready in 24 hours
                  </p>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <i className="fa-solid fa-truck-fast fs-5"></i>
                  <p>
                    Estimate delivery times: 12-26 days (International), <br />{" "}
                    3-6 days (United States).
                  </p>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <i className="fa-solid fa-arrow-right-arrow-left fs-5"></i>
                  <p>
                    Return within 45 days of purchase. Duties & taxes are
                    non-refundable.
                  </p>
                </div>
              </div>
            </div>
            <div className="addToCart d-flex gap-3 align-items-center pb-5">
              <div className="count">
                <button className="minus" onClick={decreaseQuantity}>
                  <i class="fa-solid fa-minus"></i>
                </button>
                <input
                  type="number"
                  min="1"
                  readOnly
                  value={quantity}
                  max={100}
                />
                <button className="plus" onClick={increaseQuantity}>
                  <i class="fa-solid fa-plus"></i>
                </button>
              </div>
              <div>
                <button className="shop-now" onClick={handleAddCart}>
                  ADD TO CART
                </button>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <h2 className="text-center pb-4">You Might Also Like</h2>
          <div className="margin">
            <Slider {...settings}>
              {related.map((item) => (
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
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Detail;
