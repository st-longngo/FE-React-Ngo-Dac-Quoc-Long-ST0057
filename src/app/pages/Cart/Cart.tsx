import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SectionCart from './partials/SectionCart';

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
