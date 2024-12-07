import React from "react";
import "./Item.css";
export default function Item(props){
  return (
    <div className="item">
      <img src={props.image} alt="item-img-missing" />
      <p>{props.name}</p>

      <div className="item-prices">
        <div className="item-price-new">${props.new_price}</div>
        <div className="item-price-old">${props.old_price}</div>
      </div>
    </div>
  );
};
