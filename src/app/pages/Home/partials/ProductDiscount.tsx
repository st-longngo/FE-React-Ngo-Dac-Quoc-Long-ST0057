import React from 'react';

interface IProductDiscountProps {
  price: number;
  discount: number;
}

const calPriceDiscount = (price: number, discount: number): string => {
  return (price - (price * discount) / 100).toFixed(2);
};

const ProductDiscount = ({price, discount}: IProductDiscountProps) => {
  return (
    discount ? (
      <>
        <span>${calPriceDiscount(price, discount)}</span>
        <span className="product-discount">${price}</span>
      </>
    ) : (
      <span>${price}</span>
    )
  );
}

export default ProductDiscount;