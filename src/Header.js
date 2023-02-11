import React, { useState, useEffect } from "react";

import logo from "./images/logo.svg";
import cartIcon from "./images/icon/icon-cart.svg";
import imageAvatar from "./images/image-avatar.png";
import productImage from "./images/product-image/image-product-1.jpg";
import trashIcon from "./images/icon/icon-delete.svg";
import menu from "./images/icon/icon-menu.svg"

import "./styles/Header.css";

const Header = (props) => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false)

  function cart() {
    const basket = document.getElementById("basket");
    if (basket.style.display === "none") {
      basket.style.display = "block";
    } else basket.style.display = "none";
  };

  function delFromCart() {
    const basketBodyContainer = document.getElementById("basket-body-container");
    const emptyBasket = document.getElementById("empty-basket");
    const quantityCartIcon = document.getElementById("quantity-cart-icon")

    basketBodyContainer.style.display = "none";
    emptyBasket.style.display = "flex";
    quantityCartIcon.textContent = 0
  }


  return (
    <header>
      <nav className="header-navigation">
        <ul className="header-nav-ul">
          <div className="menu-logo-icon-container">
            <div className="menu-icon-container">
              <img className="menu-img" src={menu}></img>
            </div>
            <div className="logo-container">
              <img className="logo-img" src={logo}></img>
            </div>
          </div>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <ul>
          <li id="cart-li">
            <img className="cart-icon" src={cartIcon} onClick={cart}></img>
            <p id="quantity-cart-icon"></p>
            <article id="basket" style={{ display: "none", cursor: "default" }}>
              <div id="empty-basket" style={
                { 
                  display: "none",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "120%",
                }
                }>
                Your cart is empty
              </div>
              <div className="basket-header">
                <p>Cart</p>
              </div>
              <div id="basket-body-container" style={{display: "flex"}}>
                <div id="basket-body" style={{marginTop: "60px"}}>
                  <img className="product-image" src={productImage}></img>
                  <p>{`${props.descriptionProduct.title} `}</p>
                  <p id="quantity-cart"></p>
                  <p id="total-price"></p>
                  <img
                    src={trashIcon}
                    id="trash-icon"
                    onClick={delFromCart}
                  ></img>
                </div>
                <div id="checkout-btn-div" style={{marginTop: "20px"}}>
                  <button id="checkout-btn">Checkout</button>
                </div>
              </div>
            </article>
          </li>
          <li>
            <img src={imageAvatar} className="image-avatar"></img>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
