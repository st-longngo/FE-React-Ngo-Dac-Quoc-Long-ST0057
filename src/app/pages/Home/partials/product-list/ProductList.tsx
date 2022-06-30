import React from 'react';
import ProductItem from '../../../../components/ProductItem';
import Image from '../../../../assets/images';
import Button from '../../../../components/partials/Button';

const PRODUCTS = [
  {
    id: '1',
    name: 'T-Shirt Summer Vibes',
    image: Image.ProductItem1,
    price: 119.99,
    discount: 30,
  },
  {
    id: '2',
    name: 'Loose Knit 3/4 Sleeve',
    image: Image.ProductItem2,
    price: 119.99,
    discount: 0,
  },
  {
    id: '3',
    name: 'Basic Slim Fit T-Shirt',
    image: Image.ProductItem3,
    price: 79.99,
    discount: 0,
  },
  {
    id: '4',
    name: 'Loose Textured T-Shirt',
    image: Image.ProductItem4,
    price: 119.99,
    discount: 0,
  },
];

interface IProductListProps {
  title: string;
  button: boolean;
}

const ProductList: React.FC<IProductListProps> = ({ title, button }) => {
  return (
    <section className='section section-product-selected'>
      <div className='container'>
        {button ? (
          <div className='section-header'>
            <h3 className='txt-title section-title'>{title}</h3>
            <Button name='show more' type='border' />
          </div>
        ) : (
          <h3 className='txt-title section-title'>{title}</h3>
        )}
        <div className='section-content'>
          <ul className='row'>
            {PRODUCTS.map((product) => {
              return (
                <ProductItem
                  key={product.id}
                  name={product.name}
                  image={product.image}
                  price={product.price}
                  discount={product.discount}
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
