import React from "react";
import "./Header.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../../assets/cakeLogo.avif";
import { Link } from "react-router-dom";
import { useCart } from "../../../Context/CartContext";
const Header = () => {
  const { cart } = useCart();
  return (
    <div className="header">
      <header className="container">
        <Navbar expand="lg" className="">
          <Container fluid>
            <Navbar.Brand href="#">
              <img className="res" src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className=" my-2 my-lg-0 mx-auto "
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Link className=" nav-link" to={"/"}>
                  <a href="">HOME</a>
                </Link>
                <Link className=" nav-link" to={"/list-product"}>
                  <a href="">SHOP</a>
                </Link>
                <Nav.Link className=" nav-link" href="#action2">
                  <a href="">ABOUT US</a>
                </Nav.Link>
                <Nav.Link className=" nav-link" href="#action2">
                  <a href="">BLOGS</a>
                </Nav.Link>
              </Nav>
              <Link className="position" to="/cart">
                <i className="fa-solid fa-cart-shopping test"></i>
                <span className="span">{cart.length}</span>
              </Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  );
};

export default Header;
