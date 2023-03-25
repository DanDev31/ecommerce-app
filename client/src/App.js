import React, { useEffect } from "react";
import { LandingPage } from "./components/landing_page/LandingPage";
import { Navbar } from "./components/navbar/Navbar";
import { ProductsBySearch } from "./components/home/products_by_search/ProductsBySearch";
import { Admin } from "./components/admin/Admin";
import { Home } from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import { ProductDetail } from "./components/home/product/Detail/ProductDetail";
import { Cart } from "./components/cart/Cart";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
// import { fetchGoogleUser } from './redux/user/userSlice';
import { useDispatch } from "react-redux";
import { Footer } from "./components/footer/Footer";
import { About } from "./components/pages/About";
import { fetchCategories } from "./redux/categories/categories";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div>
      <Navbar />

      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Home />} />
          <Route path="/shop/:id_cat/:id" element={<ProductDetail />} />
          <Route
            path="/shop/searched_products"
            element={<ProductsBySearch />}
          />
          <Route path="/shop/cart" element={<Cart />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/register" element={<Register />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
