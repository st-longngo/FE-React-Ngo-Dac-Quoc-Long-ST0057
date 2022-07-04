import React from 'react';
import SectionBanner from './partials/SectionBanner';
import SectionAbout from './partials/SectionAbout';
import SectionProduct from './partials/SectionProduct';
import SectionChooseus from './partials/SectionChooseus';
import SectionContact from './partials/SectionContact';
import { productList } from '../../shared/constant/product';

const Home = () => {
  return (
    <main className="home-page">
      <SectionBanner />
      <SectionAbout />
      <SectionProduct productList={productList} title="Selected just for you" hasButton />
      <SectionChooseus/>
      <SectionProduct productList={productList} title="Products in today" />
      <SectionContact/>
    </main>
  );
};

export default Home;
