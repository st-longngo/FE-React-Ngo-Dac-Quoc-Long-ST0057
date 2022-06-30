import React from 'react';
import AboutItem from './AboutItem';

const dataAbout = [
  {
    title: 'New arrivalsare now in!',
    classCol: 'col-6 col-sm-12',
    classIndex: 'about-item-1',
    button: {
      name: 'Show Collection',
      type: 'primary',
      typeSection: 'about',
    },
  },
  {
    title: 'Basic t-shirts $29,99',
    classCol: 'col-3 col-sm-6',
    classIndex: 'about-item-2',
    button: {
      name: 'More Details',
      type: 'primary',
      typeSection: 'about',
    },
  },
  {
    title: 'Sale this summer',
    classCol: 'col-3 col-sm-6',
    classIndex: 'about-item-3',
    button: {
      name: 'View All',
      type: 'primary',
      typeSection: 'about',
    },
    badge: {
      discount: 50,
      type: 'primary',
    },
  },
];

const About = () => {
  return (
    <section className='section section-about'>
      <div className='container'>
        <ul className='row'>
          {dataAbout.map((item, idx) => {
            return (
              <AboutItem
                key={idx}
                title={item.title}
                classCol={item.classCol}
                classIndex={item.classIndex}
                button={item.button}
                badge={item.badge}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default About;
