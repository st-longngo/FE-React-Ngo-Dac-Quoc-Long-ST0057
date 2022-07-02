import React from 'react';
import SectionBanner from './partials/SectionBanner';
import SectionContact from './partials/SectionContact';
import SectionAbout from './partials/SectionAbout';
import SectionChooseus from './partials/SectionChooseus';
import SectionSelected from './partials/SectionSelected';
import SectionToday from './partials/SectionToday';

const Home = () => {
  return (
    <main className="home-page">
      <SectionBanner />
      <SectionAbout />
      <SectionSelected />
      <SectionChooseus/>
      <SectionToday />
      <SectionContact/>
    </main>
  );
};

export default Home;
