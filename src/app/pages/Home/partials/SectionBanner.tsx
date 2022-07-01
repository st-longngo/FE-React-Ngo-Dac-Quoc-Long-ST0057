import React from 'react';
import Image from '../../../../assets/images';
import Icon from '../../../../assets/icon';
import PolicyItem from './PolicyItem';
import { Link } from 'react-router-dom';

const dataPolicy = [
  {
    title: 'Free Shipping',
    icon: Icon.FreeShippingSmall,
    description: 'On purchase over $199',
  },
  {
    title: '99% Satisfied Customers',
    icon: Icon.Happy,
    description: 'On purchase over $199',
  },
  {
    title: 'Originality Guaranteed',
    icon: Icon.GruanranteeSmall,
    description: '30 days warranty for each product from our store',
  },
];

const Banner = () => {
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
        <ul className="policy-list">
          {dataPolicy.map((item, idx) => {
            return (
              <PolicyItem
                key={idx}
                title={item.title}
                icon={item.icon}
                desc={item.description}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Banner;
