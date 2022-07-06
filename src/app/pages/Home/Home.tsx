import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SectionBanner from './partials/SectionBanner';
import SectionAbout from './partials/SectionAbout';
import SectionProduct from './partials/SectionProduct';
import SectionChooseus from './partials/SectionChooseus';
import SectionContact from './partials/SectionContact';
import { IProduct } from '../../shared/interfaces/product';
const Home = () => {
  const [productList, setProductList] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get('https://6088e20da6f4a300174271e7.mockapi.io/products')
      .then((response) => {
        if (response) {
          setProductList(response.data);
        }
        setLoading(false);
      })
      .catch((error) => {
        setLoading(true);
      });
  }, []);

  return loading ? (
    <main className="loading-container">
      <p className="spinner-text">loading...</p>
      <div className="spinner"></div>
    </main>
  ) : (
    <main className="home-page">
      <SectionBanner />
      <SectionAbout />
      <SectionProduct
        productList={productList}
        title="Selected just for you"
        hasButton
      />
      <SectionChooseus />
      <SectionProduct productList={productList} title="Products in today" />
      <SectionContact />
    </main>
  );
};

export default Home;
