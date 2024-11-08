import React from "react";
import "./Header1.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../../assets/logoFoot.webp";
import { Link } from "react-router-dom";
import { useCart } from "../../../Context/CartContext";
const Header1 = () => {
  const { cart } = useCart();
  return (
    <div className="header1">
      <header className="container">
        <Navbar expand="lg" className="">
          <Container fluid>
            <Navbar.Brand href="#">
              <img className="res1" src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className=" my-2 my-lg-0 mx-auto "
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Link className=" nav-link1" to={"/"}>
                  <a href="">HOME</a>
                </Link>
                <Link className=" nav-link1" to={"/list-product"}>
                  <a href="">SHOP</a>
                </Link>
                <Link className=" nav-link1" href="#action2">
                  <a href="">ABOUT US</a>
                </Link>
                <Link className=" nav-link1" href="#action2">
                  <a href="">BLOGS</a>
                </Link>
              </Nav>
            </Navbar.Collapse>
            <Link className="position1" to="/cart">
              <i className="fa-solid fa-cart-shopping test"></i>
              <span className="span">{cart.length}</span>
            </Link>
          </Container>
        </Navbar>
      </header>
    </div>
  );
};

export default Header1;
