import React from 'react';
import Header from '../../shared/components/layout/Header';
import Banner from './partials/SectionBanner';
import Footer from '../../shared/components/layout/Footer';
import Contact from './partials/SectionContact';
import SectionAbout from './partials/SectionAbout';
import SectionChooseus from './partials/SectionChooseus';
import SectionSelected from './partials/SectionSelected';
import SectionToday from './partials/SectionToday';


const Home = () => {
  return (
    <>
      <Header />
      <main className="home-page">
        <Banner />
        <SectionAbout />
        <SectionSelected />
        <SectionChooseus/>
        <SectionToday />
        <Contact/>
      </main>
      <Footer />
    </>
  );
};

export default Home;
