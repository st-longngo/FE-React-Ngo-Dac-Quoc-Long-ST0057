import React from 'react';
import { Link } from 'react-router-dom';
import PolicyList from './PolicyList';
import Image from '../../../../assets/images';

const SectionBanner = () => {
  return (
    <section className="section section-banner">
      <div className="container banner-inner">
        <div className="banner-content">
          <h2 className="txt-bold banner-title">
            Sale of the<span>summer</span>collection
          </h2>
          <Link to="/" className="banner-link">
            <div className="banner-link-icon">
              <img src={Image.ArrowLeft} alt="arrow left" />
            </div>
            <span className="typo-1 txt-bold banner-link-text">shop now</span>
          </Link>
        </div>
      </div>
      <div className="banner-policy">
        <PolicyList />
      </div>
    </section>
  );
};

export default SectionBanner;
