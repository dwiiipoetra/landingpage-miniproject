import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="text-center row">
        <div className=" col-md-6">
          <img
            src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
            alt="Error Page 404 Not Found"
            className="img-fluid"
          />
        </div>
        <div className=" col-md-6 mt-5 mb-5">
          <p className="fs-3">
            <span className="text-danger">Opps!</span> Page not found.
          </p>
          <p className="lead">The page you’re looking for doesn’t exist.</p>
          <Link to="/" className="btn btn-black btn-sm btn-block">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page404;
