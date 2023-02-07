import React from "react";

import Header from "./Header";

import "./styles/Main.css"

import productImage from "./images/product-image/image-product-1.jpg"

const Main = (props) => {
  const addToCart = () => {
    const basket = document.getElementById("basket").style.display = "block"
  }

  return (
    <main>
      <section className="product-main">
        <article className="product-images">
          <img className="product-image" src={productImage}></img>

        </article>

        <article className="description-container">
          <p className="product-manufacturer">
            {(props.descriptionProduct.manufacturer = "SNEAKER COMPANY")}
          </p>
          <h2 className="product-name">
            {(props.descriptionProduct.title = "Fall Limited Edition Sneakers")}
          </h2>
          <p className="product-description">
            {
              (props.descriptionProduct.description =
                "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.")
            }
          </p>
          <div className="price-discount">
            <p className="product-new-price">
              {
                (props.descriptionProduct.newPrice =
                  `$${(Number("125"))}`)
              }
            </p>
            <p className="product-discount">
              {(props.descriptionProduct.discount = `${Number("50")}%`)}
            </p>
          </div>
          <p className="product-old-price">
            {(props.descriptionProduct.oldPrice = `$${Number("250")}`)}
          </p>
          <div id="counter-add-cart-container">
            <div className="increase-decrease-box">
              <button className="decrease-button" onClick={props.decrease}>-</button>
              {props.counterItem}
              <button className="increase-button" onClick={props.increase}>+</button>
            </div>
            <div className="add-to-cart-box">
              <button id="add-to-cart" onClick={addToCart}>Add to cart</button>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Main;
