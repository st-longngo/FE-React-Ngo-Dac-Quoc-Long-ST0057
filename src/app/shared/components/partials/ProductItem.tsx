import React from 'react';
import Badge from './Badge';
import Button from './Button';

interface IProductItemProps {
  product: {
    id: string;
    name: string;
    image: string;
    price: number;
    discount: number;
  };
}

interface IProductDiscountProps {
  price: number,
  discount: number
}

const calPriceDiscount = (price: number, discount: number): string => {
  return (price - (price * discount) / 100).toFixed(2);
};

const ProductDiscount = ({price, discount}: IProductDiscountProps) => (
  discount ? (
    <>
      <span>${calPriceDiscount(price, discount)}</span>
      <span className="product-discount">${price}</span>
    </>
  ) : (
    <span>${price}</span>
  )
)

const ProductItem: React.FC<IProductItemProps> = ({ product }) => {
  const { name, image, price, discount } = product;
  
  return (
    <li className="col-3 col-sm-6">
      <div className={discount ? "product product-sale" : "product"}>
        {discount !== 0 && <Badge discount={discount} type="primary" />}
        <div className="product-thumnail">
          <a href="#" className="product-link">
            <img src={image} alt={name} className="product-image" />
          </a>
          <div className="product-cart">
              <Button title="add to cart" customClass="btn-secondary"/>
          </div>
        </div>
        <div className="product-content">
          <h4 className="product-name">
            <a href="#" className="typo-2 txt-light">
              {name}
            </a>
          </h4>
          <div className="product-price">
            <ProductDiscount price={price} discount={discount}/>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
