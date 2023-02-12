import Header from "./Header";
import Main from "./Main";

import React, { useState, useEffect } from "react";

import "./styles/App.css";

function App() {
  const [descriptionProduct, setDescriptionProduct] = React.useState({
    manufacturer: "",
    title: "",
    description: "",
    newPrice: "",
    oldPrice: "",
    discount: "",
    cart: "",
    totalPrice: "",
  });

  /* Functions for follow the counter, which keep track on quantity of product in the basket*/
  let [counterItem, setCounterItem] = React.useState(0);

  const increase = () => {
    setCounterItem((count) => count + 1);
  };

  const decrease = () => {
    setCounterItem((count) => Math.max(count - 1, 0));
  };

  const [showElement, setShowElement] = useState(false);

  useEffect(() => {
    const quantityCartIcon = document.getElementById("quantity-cart-icon");
    quantityCartIcon.textContent = counterItem;

    const quantityCart = document.getElementById("quantity-cart");
    quantityCart.textContent = `${descriptionProduct.newPrice} x ${counterItem}`;

    const totalPrice = document.getElementById("total-price");
    const price = 125;
    totalPrice.textContent = descriptionProduct.totalPrice = `$${
      price * counterItem
    }`;

    const basketBodyContainer = document.getElementById(
      "basket-body-container"
    );
    const emptyBasket = document.getElementById("empty-basket");
    if (counterItem === 0) {
      basketBodyContainer.style.display = "none";
      emptyBasket.style.display = "flex";
    } else {
      basketBodyContainer.style.display = "flex";
      emptyBasket.style.display = "none";
    }
  }, [showElement]);

  return (
    <div className="App">
      <Header
        counterItem={counterItem}
        setCounterItem={setCounterItem}
        descriptionProduct={descriptionProduct}
      />
      <Main
        descriptionProduct={descriptionProduct}
        counterItem={counterItem}
        increase={increase}
        decrease={decrease}
        setShowElement={setShowElement}
        showElement={showElement}
      />
    </div>
  );
}

export default App;
