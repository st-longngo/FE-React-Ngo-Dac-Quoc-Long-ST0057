import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SectionBanner from './partials/SectionBanner';
import SectionAbout from './partials/SectionAbout';
import SectionProduct from './partials/SectionProduct';
import SectionChooseus from './partials/SectionChooseus';
import SectionContact from './partials/SectionContact';
import { RootState } from '../../app.reducers';
import { getProducts, resetHomePage } from './home.actions';
import { IProduct } from './../../shared/interfaces/product';
import { useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Home = () => {
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state: RootState) => state.home);
  const [ searchParams, setSearchParams ] = useSearchParams({});
  const value = searchParams.get('categories');
  const [ categories, setCategories ] = useState<string[]>(value?.split(' ') || []);

  useEffect(() => {
    setParams();
  }, [categories]);
  
  useEffect(() => {
    setParams();
    dispatch<any>(getProducts());
    return () => {
      dispatch(resetHomePage());
    };
  }, []);

  
  const setParams = () => {
    if (categories.length) {
      setSearchParams({ categories: categories.join(' ') });
    } else {
      searchParams.delete('categories');
      setSearchParams(searchParams);
    }
  };

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
        productList={products}
        title="Selected just for you"
        hasButton
        categories={categories}
        setCategories={setCategories}
      />
      <SectionChooseus />
      <SectionProduct
        productList={products}
        title="Products in today"
        categories={[]}
      />
      <SectionContact />
    </main>
  );
};

export default Home;
