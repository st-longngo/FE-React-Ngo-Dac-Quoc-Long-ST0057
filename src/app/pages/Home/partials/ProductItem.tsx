import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../../cart/cart.actions';
import { IProduct } from '../../../shared/interfaces/product';
import ProductDiscount from './ProductDiscount';
import { Badge, Button } from '../../../shared/components/partials/index';
import { RootState } from '../../../app.reducers';

interface IProductItemProps {
  product: IProduct;
}

const ProductItem: React.FC<IProductItemProps> = ({ product }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state: RootState) => state.categories);
  const { name, image, price, discount, category } = product;
  const productCategory: any = categories[category as keyof typeof categories];

  const addToCart = (product: IProduct): void => {
    dispatch(addCart(product));
  };

  return (
    <li className="col-3 col-sm-6">
      <div className={discount ? "product product-sale" : "product"}>
        {discount !== 0 && <Badge discount={discount} type="primary" />}
        <div className="product-thumnail">
          <Link to="/" className="product-link">
            <img src={image} alt={name} className="product-image" />
          </Link>
          <div className="product-cart">
            <Button
              title="add to cart"
              customClass="btn btn-secondary"
              onClick={() => {addToCart(product)}}
            />
          </div>
        </div>
        <div className="product-content">
          <h4 className="product-name">
            <Link to="/" className="typo-2 txt-light">
              {name}
            </Link>
          </h4>
          <div className="product-price">
            <ProductDiscount price={price} discount={discount} />
          </div>
        </div>
        <p className='product-category'>{productCategory}</p>
      </div>
    </li>
  );
};

export default ProductItem;
