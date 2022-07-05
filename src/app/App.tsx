import React, { useEffect, useState } from "react";
import "../stylesheets/styles.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { MyGlobalContext } from "./shared/contexts/global.context";
import { ICart } from "./shared/interfaces/cart";
import { Home, Cart, Register } from "./pages/index";
import { Header, Footer } from './shared/components/layout/index';
import { getData, setData } from './shared/common/common';
import { IUser } from './shared/interfaces/user';

function App() {
  const location = useLocation();
  const [cart, setCart] = useState<ICart[]>(getData('cart', []));
  const [user, setUser] = useState<IUser>(getData('user', {}));
  
  useEffect(() => {
    if (!getData('cart', null)) {
      setData('cart', []);
    };
    if (!getData('user', null)) {
      setData('user', {});
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    setData('cart', cart);
  }, [cart]);

  useEffect(() => {
    setData('user', user);
  }, [user]);

  return (
    <MyGlobalContext.Provider value={{cart, setCart, user, setUser}}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />}/>
      </Routes>
      <Footer />
    </MyGlobalContext.Provider>
  );
}

export default App;
