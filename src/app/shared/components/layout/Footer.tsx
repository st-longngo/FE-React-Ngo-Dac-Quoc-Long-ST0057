import React from 'react';
import Icon from '../../../../assets/icon';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row footer-list">
            <div className="col-5 col-sm-12 footer-iso">
              <a href="#" className="footer-logo">
                <img src={Icon.Logo} alt="E-Shop" />
              </a>
              <p className="footer-desc">
                House My Brand designs clothing for the young, the old &everyone
                in between – but most importantly, for the fashionable
              </p>
              <ul className="footer-social">
                <li className="footer-social-item">
                  <a href="#" className="footer-social-link">
                    <i className="bx bxl-facebook"></i>
                  </a>
                </li>
                <li className="footer-social-item">
                  <a href="#" className="footer-social-link">
                    <i className="bx bxl-twitter"></i>
                  </a>
                </li>
                <li className="footer-social-item">
                  <a href="#" className="footer-social-link">
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </li>
                <li className="footer-social-item">
                  <a href="#" className="footer-social-link">
                    <i className="bx bxl-instagram"></i>
                  </a>
                </li>
                <li className="footer-social-item">
                  <a href="#" className="footer-social-link">
                    <i className="bx bxl-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
            <ul className="col-7 col-sm-12 footer-menu">
              <li className="col-4 col-sm-12 footer-item">
                <ul className="footer-sub-list">
                  <li className="footer-sub-item">
                    <span className="sub-title">Shopping online</span>
                  </li>
                  <li className="footer-sub-item">
                    <a href="#" className="footer-sub-link sub-link">
                      Order Status
                    </a>
                  </li>
                  <li className="footer-sub-item">
                    <a href="#" className="footer-sub-link sub-link">
                      Shipping and Delivery
                    </a>
                  </li>
                  <li className="footer-sub-item">
                    <a href="#" className="footer-sub-link sub-link">
                      Returns
                    </a>
                  </li>
                  <li className="footer-sub-item">
                    <a href="#" className="footer-sub-link sub-link">
                      Payment Options
                    </a>
                  </li>
                  <li className="footer-sub-item">
                    <a href="#" className="footer-sub-link sub-link">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </li>
              <li className="col-4 col-sm-12 footer-item">
                <ul className="footer-sub-list">
                  <li className="footer-sub-item">
                    <span className="sub-title">Information</span>
                  </li>
                  <li className="footer-sub-item">
                    <a href="#" className="footer-sub-link sub-link">
                      Gift Cards
                    </a>
                  </li>
                  <li className="footer-sub-item">
                    <a href="#" className="footer-sub-link sub-link">
                      Find a store
                    </a>
                  </li>
                  <li className="footer-sub-item">
                    <a href="#" className="footer-sub-link sub-link">
                      Newsletter
                    </a>
                  </li>
                  <li className="footer-sub-item">
                    <a href="#" className="footer-sub-link sub-link">
                      Bacome a member
                    </a>
                  </li>
                  <li className="footer-sub-item">
                    <a href="#" className="footer-sub-link sub-link">
                      Site feedback
                    </a>
                  </li>
                </ul>
              </li>
              <li className="col-4 col-sm-12 footer-item">
                <ul className="footer-sub-list">
                  <li className="footer-sub-item">
                    <span className="sub-title">Contact</span>
                  </li>
                  <li className="footer-sub-item">
                    <a href="#" className="footer-sub-link">
                      store@uikit.com
                    </a>
                  </li>
                  <li className="footer-sub-item">
                    <a href="#" className="footer-sub-link">
                      Hotline: +1 131 138 138
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copyright">
          DESIGN BY ICEO.CO - © 2019. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
