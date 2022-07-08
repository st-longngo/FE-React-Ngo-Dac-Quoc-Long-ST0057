import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app.reducers';
import { getProducts, getCategories } from './home.actions';
import SectionBanner from './partials/SectionBanner';
import SectionAbout from './partials/SectionAbout';
import SectionProduct from './partials/SectionProduct';
import SectionChooseus from './partials/SectionChooseus';
import SectionContact from './partials/SectionContact';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.product);
  
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
  }, []);

  return products.isLoading ? (
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
      />
      <SectionChooseus />
      <SectionProduct productList={products.data} title="Products in today" />
      <SectionContact />
    </main>
  );
};

export default Home;
