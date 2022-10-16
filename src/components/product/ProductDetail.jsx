import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
// custom hooks
import fetchProducts from "../../api/fetchProducts";
// helpers
import { onTop, formatRupiah } from "../../Helpers";
// material ui-loading
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
//redux
import { useDispatch } from "react-redux";
import { addProductCart } from "../../redux/cart/cart.actions";

const ProductDetail = () => {
  // call action from redux
  const dispatch = useDispatch();
  const [detailOrder, setDetailOrder] = useState({
    quantity: 0,
  });

  // get param from Router (in App.js)
  const { id } = useParams();
  const { products, loading } = fetchProducts(
    "https://630331acc6dda4f287c4e755.mockapi.io/api/v1/products/" + id
  );

  const { relatedProducts } = fetchProducts(
    "https://630331acc6dda4f287c4e755.mockapi.io/api/v1/products?page=1&limit=4"
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
  // add to cart
  const handleCart = (e) => {
    e.preventDefault();
    const { quantity } = detailOrder;
    const data = { ...products, quantity };

    if (quantity === 0) {
      alert("Quantity cannot be zero");
    } else {
      dispatch(addProductCart(data));
      alert("Product added to cart");
    }
  };

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
              <div className="small mb-1">Category: {products.category}</div>
              <h1 className="display-5 fw-bolder">{products.name}</h1>
              <div className="fs-5 mb-5">
                <span className="text-decoration-line-through">
                  {formatRupiah(products.price + 100000)}
                </span>
                <span>&nbsp;{formatRupiah(products.price)}</span>
              </div>
              <p className="lead">{products.desc}</p>
              <div className="d-flex">
                <input
                  className="form-control text-center me-3"
                  id="inputQuantity"
                  min="0"
                  defaultValue={0}
                  type="number"
                  style={{ maxWidth: "4rem" }}
                  onChange={(e) =>
                    setDetailOrder({
                      ...detailOrder,
                      quantity: Number(e.target.value),
                    })
                  }
                />
                <Link
                  className="btn btn-black btn-sm btn-block"
                  type="button"
                  to="/cart"
                  onClick={handleCart}
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
            {relatedProducts.map((relatedProd) => (
              <div className="col mb-5" key={relatedProd.id}>
                <div className="card h-100">
                  {/* <!-- Product image--> */}
                  <img
                    className="card-img-top"
                    src={relatedProd.image}
                    alt={relatedProd.name}
                  />
                  {/* <!-- Product details--> */}
                  <div className="card-body p-4">
                    <div className="text-center">
                      {/* <!-- Product name--> */}
                      <h5 className="fw-bolder">{relatedProd.name}</h5>
                      {/* <!-- Product price--> */}
                      <span className="text-muted text-decoration-line-through">
                        {formatRupiah(relatedProd.price + 100000)}
                      </span>
                      <br />
                      {formatRupiah(relatedProd.price)}
                    </div>
                  </div>
                  {/* <!-- Product actions--> */}
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <Link
                        className="btn btn-black btn-sm btn-block"
                        to={`/product/${relatedProd.id}`}
                        onClick={onTop}
                      >
                        View Product
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
