import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Banner from '../../components/layout/Banner';
import About from './partials/about/About';
import ProductList from './partials/product-list/ProductList';
import Chooseus from './partials/chooseus/Chooseus';
import Contact from './partials/contact/Contact';

const Home = () => {
  return (
    <>
      <Header />
      <main className='home-page'>
        <Banner />
        <About />
        <ProductList title='Selected just for you' button={true} />
        <Chooseus/>
        <ProductList title='Products in today' button={false} />
        <Contact/>
      </main>
      <Footer />
    </>
  );
};

export default Home;
