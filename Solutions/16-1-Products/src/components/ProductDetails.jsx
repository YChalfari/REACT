import React from "react";
import store from "../store";
import "./ProductDetails.css";
function ProductDetails(props) {
  const product = store[props.match.params.id - 1];

  const handleBack = () => {
    props.history.goBack();
  };
  return (
    <div className="product-details-wrap">
      <div className="product-details">
        <img src={product.imageUrl} alt="" />
        <div className="content">
          <h2>{product.title}</h2>
          <h4>{`Size: ${product.size}`}</h4>
          <h4>{`Price: ${product.price}`}</h4>
        </div>
      </div>
      <button onClick={handleBack} className="btn">
        Go Back
      </button>
    </div>
  );
}

export default ProductDetails;
