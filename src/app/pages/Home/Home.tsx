import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app.reducers';
import { getProducts, getCategories } from './home.actions';
import { useSearchParams } from 'react-router-dom';
import SectionBanner from './partials/SectionBanner';
import SectionAbout from './partials/SectionAbout';
import SectionProduct from './partials/SectionProduct';
import SectionChooseus from './partials/SectionChooseus';
import SectionContact from './partials/SectionContact';

const Home = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state: RootState) => state.categories);
  const products = useSelector((state: RootState) => state.product);
  const [ searchParams, setSearchParams ] = useSearchParams({});
  const getParams = searchParams.get('categories')?.split(' ') || [];
  const [ paramsCategory, setParamsCategory ] = useState<string[]>(getParams);

  useEffect(() => {
    setParams();
  }, [paramsCategory]);
  
  useEffect(() => {
    setParams();
    dispatch(getProducts());
    dispatch(getCategories());
  }, []);

  const setParams = () => {
    if (paramsCategory.length) {
      setSearchParams({ categories: paramsCategory.join(' ') });
    } else {
      searchParams.delete('categories');
      setSearchParams(searchParams);
    }
  };

  return products.isLoading && categories.isLoading ? (
    <main className="loading-container">
      <p className="spinner-text">loading...</p>
      <div className="spinner"></div>
    </main>
  ) : (
    <main className="home-page">
      <SectionBanner />
      <SectionAbout />
      <SectionProduct
        productList={products.data}
        title="Selected just for you"
        hasButton
        paramsCategory={paramsCategory}
        setParamsCategory={setParamsCategory}
      />
      <SectionChooseus />
      <SectionProduct productList={products.data} title="Products in today" paramsCategory={[]}/>
      <SectionContact />
    </main>
  );
};

export default Home;
