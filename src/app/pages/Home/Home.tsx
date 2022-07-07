import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import SectionBanner from './partials/SectionBanner';
import SectionAbout from './partials/SectionAbout';
import SectionProduct from './partials/SectionProduct';
import SectionChooseus from './partials/SectionChooseus';
import SectionContact from './partials/SectionContact';
import { RootState } from '../../app.reducers';
import { getProducts, getCategories } from './home.actions';
import { IProduct } from './../../shared/interfaces/product';

const Home = () => {
  const [ categories, setCategories ] = useState<string[]>([]);
  const [ searchParams ] = useSearchParams();
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state: RootState) => state.product);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
  }, []);

  useEffect(() => {
    setCategories(searchParams.get('category')?.split(' ')!);
  }, [searchParams])

  const getProductsByCategory = (productList: IProduct[]) => {
    if(categories) {
      return productList.filter((item: IProduct) => categories.includes(item.category));
    }
    return productList;
  }

  return isLoading ? (
    <main className="loading-container">
      <p className="spinner-text">loading...</p>
      <div className="spinner"></div>
    </main>
  ) : (
    <main className="home-page">
      <SectionBanner />
      <SectionAbout />
      <SectionProduct
        productList={getProductsByCategory(products)}
        title="Selected just for you"
        hasButton
      />
      <SectionChooseus />
      <SectionProduct productList={products} title="Products in today" />
      <SectionContact />
    </main>
  );
};

export default Home;
