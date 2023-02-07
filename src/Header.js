import React from "react";

import logo from "./images/logo.svg";
import cartIcon from "./images/icon/icon-cart.svg";
import imageAvatar from "./images/image-avatar.png";
import productImage from "./images/product-image/image-product-1.jpg"
import trashIcon from "./images/icon/icon-delete.svg"

import "./styles/Header.css";

const Header = (props) => {
  
  const price = 125

  const checkBasket = () => {
      const basketBodyContainer = document.getElementById("basket-body-container")
      const emptyBasket = document.getElementById("empty-basket")
      const basketBody = document.getElementById("basket-body")
      const checkoutBtnDiv = document.getElementById("checkout-btn-div")

      if (props.counterItem === 0) {
        basketBodyContainer.style.display = "none"
        emptyBasket.style.display = "flex"
        emptyBasket.style.alignItems = "center"
        emptyBasket.style.justifyContent = "center"
        emptyBasket.style.width = "100%"
        emptyBasket.style.height = "120%"
      }
      else {
        basketBody.style.marginTop = "60px"
        basketBodyContainer.style.display = "flex"
        checkoutBtnDiv.style.marginTop = "20px"
        emptyBasket.style.display = "none"
      }
    }

    React.useEffect(() => {
      checkBasket()
    })

    const cart = () => {
      const basket = document.getElementById("basket")
      if (basket.style.display === "none") {
        basket.style.display = "block"
      }
      else (
        basket.style.display = "none"
      )
    }

    const delFromCart = () => {
      props.setCounterItem(0)
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
          <li className="cart-li">
            <img src={cartIcon} onClick={cart}></img>
            <p className="quantity-cart">{props.counterItem}</p>
            <article id="basket" style={{display: "none"}}>
              <div id="empty-basket" style={{display: "none"}}>Your cart is empty</div>
              <div className="basket-header"><p>Cart</p></div>
              <div id="basket-body-container">
                <div id="basket-body">
                  <img src={productImage}></img>
                  <p>
                    {`${props.descriptionProduct.title} `}
                  </p>
                  <p>
                  {`${props.descriptionProduct.newPrice} x ${props.counterItem} `}
                  </p>
                  <p className="total-price">
                  {
                    (props.descriptionProduct.totalPrice =
                      `$${price * props.counterItem}`)
                  }
                  </p>
                  <img src={trashIcon} onClick={delFromCart} className="trash-icon"></img>
                  </div>
                  <div id="checkout-btn-div">
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
