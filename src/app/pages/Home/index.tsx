import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Banner from '../../components/layout/Banner';
import About from './About/About';
import ProductSelected from './ProductSelected';
import ProductToday from './ProductToday';
import Chooseus from './Chooseus/Chooseus';
import Contact from './Contact';

const Home = () => {
  return (
    <>
      <Header />
      <main className='home-page'>
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
