import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
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
  const [ categories, setCategories ] = useState<string[]>([]);
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state: RootState) => state.home);
  const [ searchParams, setSearchParams ] = useSearchParams({});
  
  useEffect(() => {
    dispatch<any>(getProducts());
    return () => {
      dispatch(resetHomePage());
    }
  }, []);

  useEffect(() => {

  }, []);

  useEffect(() => {
    setCategories(searchParams.get('category')?.split(' ')!);
  }, [searchParams]);

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
