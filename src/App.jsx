import { Routes, Route } from "react-router-dom";
import Home from "./views";
import Shop from "./views/shop";
import ShopDetail from "./views/shop_detail";
import About from "./views/about";
import Services from "./views/services";
import Contact from "./views/contact";
import Cart from "./views/cart";
import Checkout from "./views/checkout";
import Login from "./views/login";
import Register from "./views/register";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop-detail" element={<ShopDetail />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="*"
          element={
            <div className="d-flex align-items-center justify-content-center vh-100">
              <div className="text-center row">
                <div className=" col-md-6">
                  <img
                    src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className=" col-md-6 mt-5 mb-5">
                  <p className="fs-3">
                    {" "}
                    <span className="text-danger">Opps!</span> Page not found.
                  </p>
                  <p className="lead">
                    The page you’re looking for doesn’t exist.
                  </p>
                  <a href="/" className="btn btn-black btn-sm btn-block">
                    Go Home
                  </a>
                </div>
              </div>
            </div>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
