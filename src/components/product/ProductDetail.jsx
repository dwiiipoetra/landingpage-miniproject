import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import fetchProducts from "../../api/fetchProducts";

const ProductDetail = () => {
  // get param from Router (in App.js)
  const { id } = useParams();
  const { products, loading } = fetchProducts(
    "https://630331acc6dda4f287c4e755.mockapi.io/api/v1/products/" + id
  );

  // show loading
  const showLoading = () =>
    loading ? (
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
    ) : (
      ""
    );

  return (
    <>
      {/* <!-- Product section--> */}
      <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              {showLoading()}
              <img
                className="card-img-top mb-5 mb-md-0"
                src={products.image}
                alt="..."
              />
            </div>
            <div className="col-md-6">
              <div className="small mb-1">SKU: BST-498</div>
              <h1 className="display-5 fw-bolder">{products.name}</h1>
              <div className="fs-5 mb-5">
                <span className="text-decoration-line-through">
                  IDR {parseInt(products.price) + 100}
                </span>
                <span> IDR {products.price}</span>
              </div>
              <p className="lead">{products.desc}</p>
              <div className="d-flex">
                <input
                  className="form-control text-center me-3"
                  id="inputQuantity"
                  type="number"
                  style={{ maxWidth: "4rem" }}
                />
                <Link
                  className="btn btn-black btn-sm btn-block"
                  type="button"
                  to="/cart"
                >
                  Add to cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Related items section--> */}
      <section className="py-5 bg-light">
        <div className="container px-4 px-lg-5 mt-5 mb-5">
          <h2 className="fw-bolder mb-4">Related Products</h2>
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div className="col mb-5">
              <div className="card h-100">
                {/* <!-- Product image--> */}
                <img
                  className="card-img-top"
                  // src="images/product-3.png"
                  alt="..."
                />
                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">Sale Item</h5>
                    {/* <!-- Product price--> */}
                    <span className="text-muted text-decoration-line-through">
                      $50.00
                    </span>
                    $25.00
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a className="btn btn-black btn-sm btn-block" href="#">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
