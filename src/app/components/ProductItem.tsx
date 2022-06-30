import React from 'react';
import Badge from './Badge';

interface IProductItemProps {
  name: string;
  image: string;
  price: number;
  discount: number;
}

const ProductItem: React.FC<IProductItemProps> = ({
  name,
  image,
  price,
  discount,
}) => {
  return (
    <li className='col-3 col-sm-6'>
      <div className={discount ? 'product product-sale' : 'product'}>
        {discount !== 0 && <Badge discount={discount} type='primary' />}
        <div className='product-thumnail'>
          <a href='#' className='product-link'>
            <img src={image} alt={name} className='product-image' />
          </a>
        </div>
        <div className='product-content'>
          <h4 className='product-name'>
            <a href='#' className='typo-2 txt-light'>
              {name}
            </a>
          </h4>
          <div className='product-price'>
            {discount ? (
              <>
                <span>{(price - (price * discount) / 100).toFixed(2)}</span>
                <span className='product-discount'>${price}</span>
              </>
            ) : (
              <span>${price}</span>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
