import React from 'react';
import Icon from '../../assets/icon';

const dataSocialFooter = [
  {
    iconClass: 'bx bxl-facebook',
  },
  {
    iconClass: 'bx bxl-twitter',
  },
  {
    iconClass: 'bx bxl-linkedin',
  },
  {
    iconClass: 'bx bxl-instagram',
  },
  {
    iconClass: 'bx bxl-youtube',
  },
];

const dataSubList1 = [
  { title: 'Order Status' },
  { title: 'Shipping and Delivery' },
  { title: 'Returns' },
  { title: 'Payment Options' },
  { title: 'Contact Us' },
];

const dataSubList2 = [
  { title: 'Gift Cards' },
  { title: 'Find a store' },
  { title: 'Newsletter' },
  { title: 'Bacome a member' },
  { title: 'Site feedback' },
];

const dataSubList3 = [
  { title: 'store@uikit.com' },
  { title: 'Hotline: +1 131 138 138' },
];

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-top'>
        <div className='container'>
          <div className='row footer-list'>
            <div className='col-5 col-sm-12 footer-iso'>
              <a href='#' className='footer-logo'>
                <img src={Icon.Logo} alt='E-Shop' />
              </a>
              <p className='footer-desc'>
                House My Brand designs clothing for the young, the old everyone
                in between – but most importantly, for the fashionable
              </p>
              <ul className='footer-social'>
                {dataSocialFooter.map((item, idx) => {
                  return (
                    <li className='footer-social-item' key={idx}>
                      <a href='' className='footer-social-link'>
                        <i className={item.iconClass}></i>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <ul className='col-7 col-sm-12 footer-menu'>
              <li className='col-4 col-sm-12 footer-item'>
                <ul className='footer-sub-list'>
                  <li className='footer-sub-item'>
                    <span className='sub-title'>Shopping online</span>
                  </li>
                  {dataSubList1.map((item, idx) => {
                    return (
                      <li className='footer-sub-item' key={idx}>
                        <a href='' className='footer-sub-link sub-link'>
                          {item.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </li>
              <li className='col-4 col-sm-12 footer-item'>
                <ul className='footer-sub-list'>
                  <li className='footer-sub-item'>
                    <span className='sub-title'>Information</span>
                  </li>
                  {dataSubList2.map((item, idx) => {
                    return (
                      <li className='footer-sub-item' key={idx}>
                        <a href='' className='footer-sub-link sub-link'>
                          {item.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </li>
              <li className='col-4 col-sm-12 footer-item'>
                <ul className='footer-sub-list'>
                  <li className='footer-sub-item'>
                    <span className='sub-title'>Contact</span>
                  </li>
                  {dataSubList3.map((item, idx) => {
                    return (
                      <li className='footer-sub-item' key={idx}>
                        <a href='' className='footer-sub-link sub-link'>
                          {item.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <p className='footer-copyright'>
          DESIGN BY ICEO.CO - © 2019. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
