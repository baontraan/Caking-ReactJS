import React, { useEffect, useRef, useState } from "react";
import "./Order.css";
import Header2 from "../../Global/Header2/Header2";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { useCart } from "../../../Context/CartContext";
import axios from "axios";
const Order = () => {
  const { getTotalQuantity, getTotalPrice, cart } = useCart();
  const form = useRef();

  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  // Lấy danh sách tỉnh/thành phố
  useEffect(() => {
    axios
      .get("https://esgoo.net/api-tinhthanh/1/0.htm")
      .then((response) => {
        console.log(response);

        setProvinces(response.data.data);
      })
      .catch((error) => console.error("Failed to fetch provinces", error));
  }, []);
  console.log(provinces);

  // Lấy danh sách quận/huyện khi chọn tỉnh/thành phố
  useEffect(() => {
    console.log(selectedProvince);

    if (selectedProvince) {
      axios
        .get(`https://esgoo.net/api-tinhthanh/2/${selectedProvince}.htm`)
        .then((response) => setDistricts(response.data.data))
        .catch((error) => console.error("Failed to fetch districts", error));
    } else {
      setDistricts([]); // Reset districts khi không có tỉnh nào được chọn
    }
    setWards([]); // Reset wards khi đổi tỉnh
  }, [selectedProvince]);

  // Lấy danh sách phường/xã khi chọn quận/huyện
  useEffect(() => {
    if (selectedDistrict) {
      axios
        .get(`https://esgoo.net/api-tinhthanh/3/${selectedDistrict}.htm`)
        .then((response) => setWards(response.data.data))
        .catch((error) => console.error("Failed to fetch wards", error));
    } else {
      setWards([]); // Reset wards khi không có quận nào được chọn
    }
  }, [selectedDistrict]);

  const [isShipping, setIsShipping] = useState(false); // State cho phí ship
  const calculateTotalPrice = () => {
    const totalPrice = Number(getTotalPrice()) || 0; // Đảm bảo totalPrice là một số, mặc định là 0 nếu không hợp lệ
    const finalPrice = isShipping ? totalPrice + 5.0 : totalPrice;
    return finalPrice.toFixed(2); // Chuyển finalPrice thành chuỗi có 2 chữ số thập phân
  };
  const formik = useFormik({
    initialValues: {
      user_name: "",
      user_email: "",
      phone: "",
      address: "",
    },
    validationSchema: Yup.object({
      user_name: Yup.string().required("Required"),
      user_email: Yup.string()
        .email("Invalid email address")
        .required("Required"),
      phone: Yup.string()
        .matches(/^[0-9]{9}$/, "Phone number is not valid")
        .required("Phone number is required"),
      address: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      console.log(values);

      emailjs
        .sendForm("service_a07zze9", "template_5390iqc", form.current, {
          publicKey: "0mFDY8cz_1lwqfDIV",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },
  });

  return (
    <div>
      <Header2></Header2>
      <Container>
        <div className="d-flex gap-3 mt-3 pb-5  ">
          <Link to={"/"} className="link-home">
            <i className="fa-solid fa-house me-3"></i>
            Home Page
          </Link>
          <span>
            <i class="fa-solid fa-chevron-right"></i>
          </span>
          <Link className="cart">CheckOut</Link>
        </div>
        <Row className="d-flex align-items-center ">
          <Col lg={7}>
            <form
              ref={form}
              id="form-order"
              onSubmit={formik.handleSubmit}
              className="pb-5 mb-4"
            >
              <h2 className="in4">INFORMATION</h2>
              <div className="fullname">
                <p htmlFor="">Full name</p>
                <input
                  className="inp"
                  type="text"
                  onChange={formik.handleChange}
                  name="user_name"
                  placeholder="Your Name"
                />
                {formik.touched.user_name && formik.errors.user_name ? (
                  <div className="error">{formik.errors.user_name}</div>
                ) : null}
              </div>
              <div className="phonenumber">
                <p htmlFor="">Phone</p>
                <input
                  className="inp"
                  type="number"
                  name="phone"
                  onChange={formik.handleChange}
                  placeholder="Your Phone Number"
                />
                {formik.touched.phone && formik.errors.phone && (
                  <div className="error">{formik.errors.phone}</div>
                )}
              </div>
              <div className="email">
                <p htmlFor="">Email</p>
                <input
                  className="inp"
                  type="email"
                  onChange={formik.handleChange}
                  name="user_email"
                  placeholder="Your Email"
                />
                {formik.touched.user_email && formik.errors.user_email ? (
                  <div className="error">{formik.errors.user_email}</div>
                ) : null}
              </div>
              <div className="address">
                <p htmlFor="">Address</p>
                <input
                  className="inp"
                  type="text"
                  name="address"
                  onChange={formik.handleChange}
                  placeholder="Your Address"
                />
                {formik.touched.address && formik.errors.address && (
                  <div className="error">{formik.errors.address}</div>
                )}
              </div>
              <div className="province">
                <label>Province</label>
                <select
                  value={selectedProvince}
                  onChange={(e) => setSelectedProvince(e.target.value)}
                  className="inp"
                >
                  <option value="">Select Province</option>
                  {provinces.map((province) => (
                    <option key={province.id} value={province.id}>
                      {province.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Dropdown Quận/Huyện */}
              <div className="district">
                <label>District</label>
                <select
                  value={selectedDistrict}
                  onChange={(e) => setSelectedDistrict(e.target.value)}
                  className="inp"
                  disabled={!selectedProvince} // Vô hiệu hóa nếu chưa chọn tỉnh
                >
                  <option value="">Select District</option>
                  {districts.map((district) => (
                    <option key={district.id} value={district.id}>
                      {district.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Dropdown Phường/Xã */}
              <div className="ward">
                <label>Ward</label>
                <select
                  className="inp"
                  disabled={!selectedDistrict} // Vô hiệu hóa nếu chưa chọn quận/huyện
                >
                  <option value="">Select Ward</option>
                  {wards.map((ward) => (
                    <option key={ward.id} value={ward.id}>
                      {ward.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="shipping-option pb-3">
                <p>Delivery Option</p>
                <label>
                  <input
                    type="radio"
                    name="delivery"
                    value="pickup"
                    checked={!isShipping}
                    onChange={() => setIsShipping(false)}
                  />
                  Pick up at shop
                </label>
                <label className="ms-5">
                  <input
                    type="radio"
                    name="delivery"
                    value="ship"
                    checked={isShipping}
                    onChange={() => setIsShipping(true)}
                  />
                  Ship to your address ($5.00)
                </label>
              </div>
              <div className="check-out">
                <button type="submit" className="submit">
                  Order
                </button>
              </div>
            </form>
          </Col>
          <Col lg={5}>
            <div className="bill">
              <div className="total border-bottom">
                <h2>Total</h2>
              </div>
              <div className="total-product border-bottom">
                <p>Product</p>
                {/* Tính tổng số lượng sản phẩm */}
                <div className="number-product">{getTotalQuantity()}</div>
              </div>
              <div className="border-bottom py-4">
                {cart.map((item, index) => (
                  <div
                    key={index}
                    className="cart-item d-flex justify-content-between mt-4"
                  >
                    <div className="cart-item-image">
                      <img
                        src={item.image1}
                        alt={item.name}
                        style={{ width: "100px" }}
                      />
                    </div>
                    <div className="cart-item-details">
                      <p>{item.name}</p>
                      <p>Size: {item.size}</p>
                      <p>Quantity: {item.quantity}</p>
                      <p>${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
              {isShipping && (
                <div className="shipping-fee border-bottom d-flex justify-content-between mt-4">
                  <p>Shipping Fee</p>
                  <div className="fee-amount">$5.00</div>
                </div>
              )}
              <div className="total-price border-bottom">
                <p>Total</p>
                <div className="price-total d-flex">
                  <span>$</span>
                  <p>{calculateTotalPrice()}</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Order;
