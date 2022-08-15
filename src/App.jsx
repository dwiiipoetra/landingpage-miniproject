import { Routes, Route } from "react-router-dom";
import Home from "./views";
import Shop from "./views/shop";
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
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
