import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";

export default function Product() {
  const { all_product } = useContext(ShopContext);
  const { productID } = useParams();

  console.log("Params productId:", productID);
  console.log("All products:", all_product);

  const product = all_product.find((e) => e.id === Number(productID));

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product}/>
    </div>
  );
}
