import React from "react";
import "./DescriptionBox.css";

export default function DescriptionBox() {
  return (
    <div className="Descriptionbox">
      <div className="descriptionbox-naigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav fade">Reviews (122)</div>
      </div>

      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online platform that allows businesses and
          individuals to buy and sell products or services over the internet. It
          provides a digital storefront for showcasing items, managing
          transactions, and offering customer support, enabling users to shop
          conveniently from anywhere at any time.
        </p>
        <p>
          An e-commerce website is an online platform that facilitates the
          exchange of goods and services by enabling users to browse, select,
          and purchase items through secure payment systems, often complemented
          by features like personalized recommendations, order tracking, and
          customer reviews.
        </p>
      </div>
    </div>
  );
}
