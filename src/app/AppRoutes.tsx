import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './app.reducers';
import { Home, Cart } from './pages';
import { Header, Footer } from './shared/components/layout';
import { setData } from './shared/common/common';

const AppRoutes = () => {
  const { cart } = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    setData('cart', cart);
  }, [cart]);

  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      <Footer />
    </>
  )
}

export default AppRoutes;
