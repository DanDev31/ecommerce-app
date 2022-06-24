import { LandingPage } from "./components/landing_page/LandingPage";
import { Navbar } from './components/navbar/Navbar'

import {Routes,Route} from "react-router-dom"
import { Home } from "./components/home/Home";
import { Admin } from "./components/admin/Admin";
import {ProductDetail} from "./components/home/product/productDetail/ProductDetail";



function App() {
  return (
    <div>
      <Navbar />

      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/shop" element={<Home />} />
          <Route path="/shop/:id" element={<ProductDetail/>}/>
          <Route path="/admin" element={<Admin />} />
          
        </Routes>
      </div>
    </div>
  );
}

export default App;
