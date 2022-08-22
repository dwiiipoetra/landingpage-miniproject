import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ image, title, price }) => {
  return (
    <div className="col-12 col-md-4 col-lg-3 mb-5">
      <Link to="/shop-detail" className="product-item">
        <img src={image} alt={title} className="img-fluid product-thumbnail" />
        <h3 className="product-title">{title}</h3>
        <strong className="product-price">{price}</strong>

        <span className="icon-cross">
          <img src="images/cross.svg" className="img-fluid" />
        </span>
      </Link>
    </div>
  );
};

export default ProductCard;
