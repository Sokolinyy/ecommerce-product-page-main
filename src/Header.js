import React, { useState, useEffect } from "react";

import logo from "./images/logo.svg";
import cartIcon from "./images/icon/icon-cart.svg";
import imageAvatar from "./images/image-avatar.png";
import productImage from "./images/product-image/image-product-1.jpg";
import trashIcon from "./images/icon/icon-delete.svg";

import "./styles/Header.css";

const Header = (props) => {
  const cart = () => {
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
        <ul>
          <li className="logo">
            <img src={logo}></img>
          </li>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <ul>
          <li id="cart-li">
            <img src={cartIcon} onClick={cart}></img>
            <p id="quantity-cart-icon"></p>
            <article id="basket" style={{ display: "none" }}>
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
                  <img src={productImage}></img>
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
