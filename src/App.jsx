import { Routes, Route } from "react-router-dom";
import Home from "./views";
import Product from "./views/product";
import ProductDetail from "./components/product/ProductDetail";
import About from "./views/about";
import Services from "./views/services";
import Contact from "./views/contact";
import Cart from "./views/cart";
import Checkout from "./views/checkout";
import Login from "./views/login";
import Register from "./views/register";
import Page404 from "./views/page404";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
