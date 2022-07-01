import React from 'react';
import ProductItem from './ProductItem';
import { IProduct } from '../../../shared/interfaces/product';

interface IProductListProps {
  productList: IProduct[];
}

const ProductList: React.FC<IProductListProps> = ({ productList }) => {
  return (
    <ul className="row">
      {productList.map((product: IProduct) => {
        return <ProductItem key={product.id} product={product} />;
      })}
    </ul>
  );
};

export default ProductList;
