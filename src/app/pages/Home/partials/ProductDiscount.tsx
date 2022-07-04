import React from 'react';

interface IProductDiscountProps {
  price: number;
  discount: number;
}

const ProductDiscount = ({price, discount}: IProductDiscountProps) => {
  const priceDiscount = (price - (price * discount) / 100).toFixed(2);

  return (
    discount ? (
      <>
        <span>${priceDiscount}</span>
        <span className="product-discount">${price}</span>
      </>
    ) : (
      <span>${price}</span>
    )
  );
};

export default ProductDiscount;