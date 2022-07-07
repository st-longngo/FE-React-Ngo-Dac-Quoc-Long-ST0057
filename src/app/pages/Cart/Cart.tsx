import React, { useEffect } from 'react';
import SectionCart from './partials/SectionCart';
import { useLocation } from 'react-router-dom';

const Cart = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <main className="store-page">
      <SectionCart />
    </main>
  );
};

export default Cart;
