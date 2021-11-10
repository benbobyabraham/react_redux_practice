import React from "react";
import ImgLogo from "../../assets/img/logo.svg";

const Footer = ({ price, showCartList, setShowCartList }) => {
  return (
    <footer>
      <div class="subtotal">
        <span class="subtotal-test">Subtotal:</span>
        <span class="subtotal-price">${price}</span>
      </div>
      {showCartList ? (
        <button class="link-button" onClick={() => setShowCartList(false)}>
          ← Go back to Home
        </button>
      ) : (
        <button onClick={() => setShowCartList(true)}>Check selected Items</button>
      )}
    </footer>
  );
};

export default Footer;
