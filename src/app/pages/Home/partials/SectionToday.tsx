import React from 'react';
import Image from '../../../../assets/images';
import ProductList from './ProductList';
import SectionTitle from '../../../shared/components/partials/SectionTitle';

const productList = [
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

const SectionToday = () => {
  return (
    <section className="section section-product-selected">
      <div className="container">
        <SectionTitle title='Products in today' hasButton={false}/>
        <div className="section-content">
          <ProductList productList={productList}/>
        </div>
      </div>
    </section>
  )
}

export default SectionToday;