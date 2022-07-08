import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app.reducers';
import { IProduct } from '../../../shared/interfaces/product';
import { SectionTitle } from '../../../shared/components/partials/index';
import ProductList from './ProductList';

interface ISectionProductProps {
  productList: IProduct[];
  title: string;
  hasButton?: boolean;
}

const SectionProduct = ({ productList, title, hasButton}: ISectionProductProps) => {
  const isLoadingProduct = useSelector((state: RootState) => state.product.isLoading);
  const isLoadingCategories = useSelector((state: RootState) => state.categories.isLoading);

  return (
    <section className="section section-product-selected">
      <div className="container">
        <SectionTitle title={title} hasButton={hasButton} />
        <div className="section-content">
          {
            (!isLoadingProduct && !isLoadingCategories) && <ProductList productList={productList} />
          }
        </div>
      </div>
    </section>
  );
};

export default SectionProduct;
