import React from 'react';
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
  categories: string[];
  setCategories?: any
}

const SectionProduct = ({ productList, title, hasButton, categories, setCategories }: ISectionProductProps) => {  
  const getProductByCategory = (categories: string[]) => {
    if(categories.length) {
      return productList.filter((product: IProduct) => categories.includes(product.category.toString()));
    }
    return productList;
  };

  return (
    <section className="section section-product-selected">
      <div className="container">
        <SectionTitle title={title} hasButton={hasButton} />
        <ProductFilter categories={categories} setCategories={setCategories}/>
        <div className="section-content">
          <ProductList productList={getProductByCategory(categories)} />
        </div>
      </div>
    </section>
  );
};

export default SectionProduct;
