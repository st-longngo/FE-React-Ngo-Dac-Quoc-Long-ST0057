import React from 'react';
import Image from '../../../../assets/images';
import SectionTitle from '../../../shared/components/partials/SectionTitle';
import ProductList from './ProductList';
import { productList } from '../../../shared/constant/product';

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