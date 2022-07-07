import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IProduct } from '../../../shared/interfaces/product';
import ProductList from './ProductList';
import { SectionTitle } from '../../../shared/components/partials/index';
import ProductFilter from './ProductFilter';
import { RootState } from '../../../app.reducers';

interface ISectionProductProps {
  productList: IProduct[];
  title: string;
  hasButton?: boolean;
}

const SectionProduct = ({ productList, title, hasButton }: ISectionProductProps) => {
  const { categories } = useSelector((state: RootState) => state.home);
 
  const getProductByCategory = (categories: string[]) => {
    if(categories.length) {
      return productList.filter(product => categories.includes(product.category.toString()));
    }
    return productList;
  };
  
  return (
    <section className="section section-product-selected">
      <div className="container">
        <SectionTitle title={title} hasButton={hasButton} />
        <ProductFilter />
        <div className="section-content">
          <ProductList productList={getProductByCategory(categories)} />
        </div>
      </div>
    </section>
  );
};

export default SectionProduct;
