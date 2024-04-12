import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const products = useSelector((state) => state.cart.products);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const toggleCart = () => {
    setOpenCart(!openCart);
  };

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <Link className="link" to="/products/1">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              Children
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            SQRLSTORE
          </Link>
        </div>
        <div className="right">
          <div className={`dropdown ${openMenu ? "open" : ""}`}>
            <div className="item">
              <Link className="link" to="/">
                Home
              </Link>
            </div>
            <div className="item">
              <Link className="link" to="/about">
                About
              </Link>
            </div>
            <div className="item">
              <Link className="link" to="/contact">
                Contact
              </Link>
            </div>
            <div className="item">
              <Link className="link" to="/store">
                Store
              </Link>
            </div>
            <span className="left-links">
              <div className="item">
                <Link className="link" to="/products/1">
                  Women
                </Link>
              </div>
              <div className="item">
                <Link className="link" to="/products/2">
                  Men
                </Link>
              </div>
              <div className="item">
                <Link className="link" to="/products/3">
                  Children
                </Link>
              </div>
            </span>
          </div>
          <div className="icons">
            <SearchIcon />
            <span onClick={toggleMenu}>
              <MenuIcon />
            </span>
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon className="extra-icons"/>
            <div className="cartIcon" onClick={toggleCart}>
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </div>
            <div className="item">
              <span className="extra-icons">
              <span id="currency">USD</span>
              <KeyboardArrowDownIcon />
              </span>
            </div>
          </div>
        </div>
      </div>
      {openCart && <Cart />}
    </div>
  );
};

export default Navbar;
