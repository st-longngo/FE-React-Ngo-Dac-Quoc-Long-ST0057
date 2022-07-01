import React, { useEffect, useState } from "react";
import "../stylesheets/styles.css";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./shared/components/layout/Header";
import Footer from "./shared/components/layout/Footer";
import { MyGlobalContext } from "./shared/contexts/cart.context";
import { ICart } from "./shared/interfaces/cart";
import { getData, setData } from './shared/common/common';

function App() {
  const [cart, setCart] = useState<ICart[]>(getData('cart', []));
  
  useEffect(() => {
    if (!getData('cart', null)) {
      setData('cart', []);
    }
  },[])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  },[cart])

  return (
    <MyGlobalContext.Provider value={{cart, setCart}}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </MyGlobalContext.Provider>
  );
}

export default App;
