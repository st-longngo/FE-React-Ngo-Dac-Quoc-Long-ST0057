import React from 'react';
import { formatFixed } from '../../../shared/common/common';

interface IProductDiscountProps {
  price: number;
  discount: number;
}

const ProductDiscount = ({price, discount}: IProductDiscountProps) => {
  const priceDiscount = formatFixed(price - (price * discount) / 100);

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