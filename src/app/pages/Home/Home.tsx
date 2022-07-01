import React from 'react';
import Header from '../../shared/components/layout/Header';
import Banner from '../../shared/components/layout/Banner';
import Footer from '../../shared/components/layout/Footer';
import About from './partials/about/About';
import Chooseus from './partials/chooseus/Chooseus';
import Contact from './partials/contact/Contact';
import ProductSelected from './partials/product/ProductSelected';
import ProductToday from './partials/product/ProductToday';

const Home = () => {
  return (
    <>
      <Header />
      <main className="home-page">
        <Banner />
        <About />
        <ProductSelected />
        <Chooseus/>
        <ProductToday />
        <Contact/>
      </main>
      <Footer />
    </>
  );
};

export default Home;
