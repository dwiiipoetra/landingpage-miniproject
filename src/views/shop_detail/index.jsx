import React from "react";

const ShopDetail = () => {
  return (
    <>
      {/* <!-- Product section--> */}
      <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img
                className="card-img-top mb-5 mb-md-0"
                src="images/product-1.png"
                alt="..."
              />
            </div>
            <div className="col-md-6">
              <div className="small mb-1">SKU: BST-498</div>
              <h1 className="display-5 fw-bolder">Nordic Chair</h1>
              <div className="fs-5 mb-5">
                <span className="text-decoration-line-through">$60.00</span>
                <span>$50.00</span>
              </div>
              <p className="lead">
                With a comfortable office chair, you can concentrate more while
                working. Our chairs come with adjustable height and are designed
                to perfectly support your body and provide maximum comfort.
                Available in a variety of models, you can customize the office
                chair to suit your workspace design, ranging from modern
                minimalist styles to traditional designs.
              </p>
              <div className="d-flex">
                <input
                  className="form-control text-center me-3"
                  id="inputQuantity"
                  type="number"
                  style={{ maxWidth: "4rem" }}
                />
                <a
                  className="btn btn-black btn-sm btn-block"
                  type="button"
                  href="/cart"
                >
                  Add to cart
                </a>
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
                  src="images/product-1.png"
                  alt="..."
                />
                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">Fancy Product</h5>
                    {/* <!-- Product price--> */}
                    $40.00 - $80.00
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a className="btn btn-black btn-sm btn-block" href="#">
                      View options
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                {/* <!-- Sale badge--> */}
                <div
                  className="badge bg-dark text-white position-absolute"
                  style={{ top: "0.5rem", right: "0.5rem" }}
                >
                  Sale
                </div>
                {/* <!-- Product image--> */}
                <img
                  className="card-img-top"
                  src="images/product-2.png"
                  alt="..."
                />
                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">Special Item</h5>
                    {/* <!-- Product reviews--> */}
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                    </div>
                    {/* <!-- Product price--> */}
                    <span className="text-muted text-decoration-line-through">
                      $20.00
                    </span>
                    $18.00
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
            <div className="col mb-5">
              <div className="card h-100">
                {/* <!-- Sale badge--> */}
                <div
                  className="badge bg-dark text-white position-absolute"
                  style={{ top: "0.5rem", right: "0.5rem" }}
                >
                  Sale
                </div>
                {/* <!-- Product image--> */}
                <img
                  className="card-img-top"
                  src="images/product-3.png"
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
            <div className="col mb-5">
              <div className="card h-100">
                {/* <!-- Product image--> */}
                <img
                  className="card-img-top"
                  src="images/product-1.png"
                  alt="..."
                />
                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder">Popular Item</h5>
                    {/* <!-- Product reviews--> */}
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                    </div>
                    {/* <!-- Product price--> */}
                    $40.00
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

export default ShopDetail;
