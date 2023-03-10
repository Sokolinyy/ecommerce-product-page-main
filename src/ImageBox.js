import React, { useState } from "react";
import "react-native-get-random-values";
import { nanoid } from "nanoid/non-secure";

import "./styles/imageBox.css";

import closeIcon from "./images/icon/icon-close.svg";

import productImageThumbnail1 from "./images/product-image/image-product-1-thumbnail.jpg";
import productImageThumbnail2 from "./images/product-image/image-product-2-thumbnail.jpg";
import productImageThumbnail3 from "./images/product-image/image-product-3-thumbnail.jpg";
import productImageThumbnail4 from "./images/product-image/image-product-4-thumbnail.jpg";

function ImageBox() {
  const id = nanoid();

  /*   const [showImage, setShowImage] = useState(false); */
  const [currentImage, setCurrentImage] = useState(1);
  const [currentOverlayImage, setCurrentOverlayImage] = useState(1);
  const [showImage, setShowImage] = React.useState(false);

  const handleClick = () => {
    setShowImage(!showImage);
  };

  const handleClose = () => {
    setShowImage(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      handleClose();
    }
  };

  return (
    <article className="image-box" onKeyDown={handleKeyDown} tabIndex={0}>
      {showImage && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.7)",
            zIndex: 1,
          }}
        >
          <img
            src={require(`./images/product-image/image-product-${currentOverlayImage}.jpg`)}
            style={{
              position: "absolute",
              top: "40%",
              left: "50.5%",
              transform: "translate(-50%, -50%)",
              maxWidth: "70%",
              maxHeight: "70%",
            }}
          ></img>

          <img
            src={closeIcon}
            onClick={handleClose}
            className="close-icon"
            style={{
              width: "20px",
              position: "absolute",
              right: 50,
              top: 30,
              opacity: "1",
              zIndex: 2,
            }}
          ></img>

          <div
            class="grid-container"
            style={{
              position: "absolute",
              bottom: "-4%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <div class="grid-item-overlay">
              <img
                src={productImageThumbnail1}
                id="image-1"
                onClick={() => setCurrentOverlayImage(1)}
              ></img>
            </div>
            <div class="grid-item-overlay">
              <img
                src={productImageThumbnail2}
                id="image-2"
                onClick={() => setCurrentOverlayImage(2)}
              ></img>
            </div>
            <div class="grid-item-overlay">
              <img
                src={productImageThumbnail3}
                id="image-3"
                onClick={() => setCurrentOverlayImage(3)}
              ></img>
            </div>
            <div class="grid-item-overlay">
              <img
                src={productImageThumbnail4}
                id="image-4"
                onClick={() => setCurrentOverlayImage(4)}
              ></img>
            </div>
          </div>
        </div>
      )}

      <img
        id="product-image"
        src={require(`./images/product-image/image-product-${currentImage}.jpg`)}
        onClick={handleClick}
      />
      <div className="grid">
        <div class="grid-container">
          <div class="grid-item">
            <img
              src={productImageThumbnail1}
              id="image-1"
              onClick={() => setCurrentImage(1)}
            ></img>
          </div>
          <div class="grid-item">
            <img
              src={productImageThumbnail2}
              id="image-2"
              onClick={() => setCurrentImage(2)}
            ></img>
          </div>
          <div class="grid-item">
            <img
              src={productImageThumbnail3}
              id="image-3"
              onClick={() => setCurrentImage(3)}
            ></img>
          </div>
          <div class="grid-item">
            <img
              src={productImageThumbnail4}
              id="image-4"
              onClick={() => setCurrentImage(4)}
            ></img>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ImageBox;
