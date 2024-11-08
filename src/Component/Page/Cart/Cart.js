import React, { useState } from "react";
import "./Cart.css";
import Header2 from "../../Global/Header2/Header2";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { useCart } from "../../../Context/CartContext";
const Cart = () => {
  const { cart, deleteToCart, getTotalQuantity, getTotalPrice } = useCart();
  const [listCart, setListCart] = useState(cart);
  const handleChange = (id, type, size) => {
    const newCart = [...listCart];
    const indexProduct = listCart.findIndex(
      (item) => item.id === id && item.size === size
    );
    if (type === "plus") {
      newCart[indexProduct].quantity++;
    } else if (type === "minus") {
      if (newCart[indexProduct].quantity > 1) {
        newCart[indexProduct].quantity--;
      }
    } else {
      newCart.splice(indexProduct, 1);
      deleteToCart(indexProduct);
      localStorage.setItem("LIST_CART", JSON.stringify(newCart));
    }
    setListCart(newCart);
    localStorage.setItem("LIST_CART", JSON.stringify(newCart));
  };
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
          <Link className="cart">Cart</Link>
        </div>
        <div className="cart-product pb-5">
          <Row>
            <Col md={12} lg={8}>
              <div className="d-flex align-items-center justify-content-center p-3 border-top border-bottom  row">
                <div className="col"></div>
                <div className="col">Image</div>
                <div className="col">Product</div>
                <div className="col">Size</div>
                <div className="col">Price</div>
                <div className="col">Quantity</div>
                <div className="col">Subtotal</div>
              </div>
              {listCart.length > 0 ? (
                listCart.map((item) => (
                  <div
                    key={`${item.id}-${item.size}`}
                    className="d-flex align-items-center justify-content-center p-3 border-bottom row"
                  >
                    <div className="col">
                      <button
                        className="delete"
                        onClick={() =>
                          handleChange(item.id, "delete", item.size)
                        }
                      >
                        <i class="fa-solid fa-xmark"></i>
                      </button>
                    </div>
                    <div className="col">
                      <div className="thumb2">
                        <img src={item.image1} alt={item.title} />
                      </div>
                    </div>
                    <div className="col">{item.title}</div>
                    <div className="col">{item.size}</div>
                    <div className="col">${item.price}</div>
                    <div className="col">
                      <div className="quantity d-flex">
                        <button
                          className="minus"
                          onClick={() =>
                            handleChange(item.id, "minus", item.size)
                          }
                        >
                          <i class="fa-solid fa-minus"></i>
                        </button>
                        <input
                          type="text"
                          className="number"
                          readOnly
                          value={item.quantity}
                        />
                        <button
                          className="plus"
                          onClick={() =>
                            handleChange(item.id, "plus", item.size)
                          }
                        >
                          <i class="fa-solid fa-plus"></i>
                        </button>
                      </div>
                    </div>
                    <div className="col">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center mt-4">
                  <h1 className="pb-5">YOUR CART IS EMPTY !!!</h1>
                  <Link to={"/list-product"}>
                    <button className="return ">Return to shop</button>
                  </Link>
                </div>
              )}
            </Col>
            <Col lg={4}>
              <div className="bill">
                <div className="total border-bottom">
                  <h2>Total</h2>
                </div>
                <div className="total-product border-bottom">
                  <p>Product</p>
                  {/* Tính tổng số lượng sản phẩm */}
                  <div className="number-product">
                    {/* {listCart.reduce((total, item) => total + item.quantity, 0)} */}
                    {getTotalQuantity()}
                  </div>
                </div>
                <div className="total-price border-bottom">
                  <p>Total</p>
                  <div className="price-total d-flex">
                    <span>$</span>
                    <p>
                      {/* Tính tổng giá trị của giỏ hàng */}
                      {/* {listCart
                        .reduce(
                          (total, item) => total + item.price * item.quantity,
                          0
                        )
                        .toFixed(2)} */}
                      {getTotalPrice()}
                    </p>
                  </div>
                </div>
                <div className="check-out">
                  <Link to={"/order"}>
                    <button className="proceed">PROCEED TO CHECKOUT</button>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Cart;
