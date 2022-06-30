import React from 'react';
import Icon from '../../../../assets/icon';
import ChooseusItem from './ChooseusItem';

const dataChooseus = [
  {
    name: 'Free Shipping',
    icon: Icon.FreeShippingBig,
    description: 'All purchases over $199 are eligible forfree shipping via USPS First className Mail.'
  },
  {
    name: 'Easy Payments',
    icon: Icon.Payment,
    description: 'All payments are processed instantlyover a secure payment protocol.'
  },
  {
    name: 'Money-Back Guarantee',
    icon: Icon.GruanranteeBig,
    description: 'If an item arrived damaged or youve changed your mind, you can send itback for a full refund.'
  },
  {
    name: 'Finest Quality',
    icon: Icon.Materials,
    description: 'Designed to last, each of our products hasbeen crafted with the finest materials.'
  }
]

const Chooseus = () => {
  return (
    <section className="section section-chooseus">
      <div className="container">
        <h3 className="txt-title section-title">why should you choose us</h3>
        <div className="section-content">
          <ul className="row">
            {
              dataChooseus.map((chooseus, idx) => {
                return <ChooseusItem key={idx} name={chooseus.name} icon={chooseus.icon} desc={chooseus.description}/>
              })
            }
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Chooseus;
