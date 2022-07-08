import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app.reducers';
import { IProduct } from '../../../shared/interfaces/product';
import { SectionTitle } from '../../../shared/components/partials/index';
import ProductList from './ProductList';
import ProductFilter from './ProductFilter';

interface ISectionProductProps {
  productList: IProduct[];
  title: string;
  hasButton?: boolean;
  paramsCategory: string[],
  setParamsCategory?: any
}

const SectionProduct = ({ productList, title, hasButton, paramsCategory, setParamsCategory}: ISectionProductProps) => {
  const isLoadingProduct = useSelector((state: RootState) => state.product.isLoading);
  const isLoadingCategories = useSelector((state: RootState) => state.categories.isLoading);

  const getProductByCategory = () => {
    if(paramsCategory.length) {
      return productList.filter((product: IProduct) => paramsCategory.includes(product.category.toString()));
    }
    return productList; 
  };

  return (
    <section className="section section-product-selected">
      <div className="container">
        <SectionTitle title={title} hasButton={hasButton} />
        {(!isLoadingProduct && !isLoadingCategories) &&
          <>
            <ProductFilter paramsCategory={paramsCategory} setParamsCategory={setParamsCategory} />
            <div className="section-content">
              <ProductList productList={getProductByCategory()} />
            </div>
          </>
        }
      </div>
    </section>
  )
};

export default SectionProduct;
