import React, { useEffect, useState } from "react";
import "../stylesheets/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MyGlobalContext } from "./shared/contexts/cart.context";
import { ICart } from "./shared/interfaces/cart";
import { Home, Cart } from "./pages/index";
import { Header, Footer } from './shared/components/layout/index';
import { getData, setData } from './shared/common/common';

function App() {
  const [cart, setCart] = useState<ICart[]>(getData('cart', []));
  
  useEffect(() => {
    if (!getData('cart', null)) {
      setData('cart', []);
    }
  }, []);

  useEffect(() => {
    setData('cart', cart);
  }, [cart]);

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
