import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import SectionBanner from './partials/SectionBanner';
import SectionAbout from './partials/SectionAbout';
import SectionProduct from './partials/SectionProduct';
import SectionChooseus from './partials/SectionChooseus';
import SectionContact from './partials/SectionContact';
import { RootState } from '../../app.reducers';
import { getProducts, resetHomePage } from './home.actions';

const Home = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state: RootState) => state.home);
  
  useEffect(() => {
    dispatch<any>(getProducts());
    return () => {
      dispatch(resetHomePage());
    }
  }, []);

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
      />
      <SectionChooseus />
      <SectionProduct productList={products} title="Products in today" />
      <SectionContact />
    </main>
  );
};

export default Home;
