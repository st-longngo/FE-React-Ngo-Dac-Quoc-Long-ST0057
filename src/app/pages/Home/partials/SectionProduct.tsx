import React from 'react';
import { IProduct } from '../../../shared/interfaces/product';
import ProductList from './ProductList';
import { SectionTitle } from '../../../shared/components/partials/index';
import ProductFilter from './ProductFilter';

interface ISectionProductProps {
  productList: IProduct[];
  title: string;
  hasButton?: boolean;
}

const SectionProduct = ({ productList, title, hasButton}: ISectionProductProps) => {
  return (
    <section className="section section-product-selected">
      <div className="container">
        <SectionTitle title={title} hasButton={hasButton} />
        <ProductFilter/>
        <div className="section-content">
          <ProductList productList={productList} />
        </div>
      </div>
    </section>
  );
};

export default SectionProduct;
