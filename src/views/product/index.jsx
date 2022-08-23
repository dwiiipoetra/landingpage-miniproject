import React, { useEffect, useState } from "react";
import ProductCard from "../../components/product/ProductCard";
import MyLoading from "../../components/loading";
import fetchProducts from "../../api/fetchProducts";

const Product = () => {
  // state
  const { products, loading } = fetchProducts(
    "https://630331acc6dda4f287c4e755.mockapi.io/api/v1/products"
  );

  // show list products
  const showListProduct = () =>
    products.map((p, i) => (
      <ProductCard
        key={i}
        image={p.image}
        name={p.name}
        price={p.price}
        id={p.id}
      />
    ));

  // show loading
  const showLoading = () => (loading ? <MyLoading /> : "");

  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Product</h1>
              </div>
            </div>
            <div className="col-lg-7"></div>
          </div>
        </div>
      </div>

      {showLoading()}
      <div className="untree_co-section product-section before-footer-section">
        <div className="container">
          <div className="row">
            {/* show list products */}
            {showListProduct()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
