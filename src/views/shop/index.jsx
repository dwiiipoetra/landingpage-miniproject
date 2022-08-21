import React from "react";
import ProductCard from "../../components/product/ProductCard";

const Shop = () => {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Shop</h1>
              </div>
            </div>
            <div className="col-lg-7"></div>
          </div>
        </div>
      </div>

      <div className="untree_co-section product-section before-footer-section">
        <div className="container">
          <div className="row">
            <ProductCard
              image={"images/product-1.png"}
              title={"Nordic Chair"}
              price={"IDR 650.000"}
            />

            <ProductCard
              image={"images/product-2.png"}
              title={"Kruzo Aero Chair"}
              price={"IDR 780.000"}
            />

            <ProductCard
              image={"images/product-3.png"}
              title={"Ergonomic Chair"}
              price={"IDR 450.000"}
            />

            <ProductCard
              image={"images/product-2.png"}
              title={"Kruzo Aero Chair"}
              price={"IDR 780.000"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
