import React from 'react';
import ProductItem from './ProductItem';
import Button from './Link';

interface IProduct {
  id: string,
  name: string,
  image: string,
  price: number,
  discount: number
}

interface IProductListProps {
  productList: IProduct[]; 
  title: string;
  hasButton: boolean;
}

const ProductList: React.FC<IProductListProps> = ({ productList, title, hasButton }) => {
  return (
    <section className="section section-product-selected">
      <div className="container">
        <div className="section-header">
        <h3 className="txt-title section-title">{title}</h3>
          {hasButton && <Button title="show more" customClass='btn-border'/>}
          </div>
        <div className="section-content">
          <ul className="row">
            {productList.map((product) => {
              return (
                <ProductItem
                  key={product.id}
                  product={product}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
