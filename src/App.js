import Header from "./Header";
import Main from "./Main";

import React from "react";

import "./styles/App.css"

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
      />
    </div>
  );
}

export default App;
