import React from 'react';
import Image from '../../../../assets/images';
import ProductList from './ProductList';
import SectionTitle from '../../../shared/components/partials/SectionTitle';
import { productList } from '../../../shared/constant/product';

const SectionSelected = () => {
  return (
    <section className="section section-product-selected">
      <div className="container">
        <SectionTitle title='Selected just for you' hasButton={true}/>
        <div className="section-content">
          <ProductList productList={productList} />
        </div>
      </div>
    </section>
  )
}

export default SectionSelected;