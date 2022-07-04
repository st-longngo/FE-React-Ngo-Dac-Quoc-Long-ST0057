import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../../assets/icon';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row footer-list">
            <div className="col-5 col-sm-12 footer-iso">
              <Link to="/" className="footer-logo">
                <img src={Icon.Logo} alt="E-Shop" />
              </Link>
              <p className="footer-desc">
                House My Brand designs clothing for the young, the old &everyone
                in between – but most importantly, for the fashionable
              </p>
              <ul className="footer-social">
                <li className="footer-social-item">
                  <Link to="/" className="footer-social-link">
                    <i className="bx bxl-facebook"></i>
                  </Link>
                </li>
                <li className="footer-social-item">
                  <Link to="/" className="footer-social-link">
                    <i className="bx bxl-twitter"></i>
                  </Link>
                </li>
                <li className="footer-social-item">
                  <Link to="/" className="footer-social-link">
                    <i className="bx bxl-linkedin"></i>
                  </Link>
                </li>
                <li className="footer-social-item">
                  <Link to="/" className="footer-social-link">
                    <i className="bx bxl-instagram"></i>
                  </Link>
                </li>
                <li className="footer-social-item">
                  <Link to="/" className="footer-social-link">
                    <i className="bx bxl-youtube"></i>
                  </Link>
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
                    <Link to="/" className="footer-sub-link sub-link">
                      Order Status
                    </Link>
                  </li>
                  <li className="footer-sub-item">
                    <Link to="/" className="footer-sub-link sub-link">
                      Shipping and Delivery
                    </Link>
                  </li>
                  <li className="footer-sub-item">
                    <Link to="/" className="footer-sub-link sub-link">
                      Returns
                    </Link>
                  </li>
                  <li className="footer-sub-item">
                    <Link to="/" className="footer-sub-link sub-link">
                      Payment Options
                    </Link>
                  </li>
                  <li className="footer-sub-item">
                    <Link to="/" className="footer-sub-link sub-link">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="col-4 col-sm-12 footer-item">
                <ul className="footer-sub-list">
                  <li className="footer-sub-item">
                    <span className="sub-title">Information</span>
                  </li>
                  <li className="footer-sub-item">
                    <Link to="/" className="footer-sub-link sub-link">
                      Gift Cards
                    </Link>
                  </li>
                  <li className="footer-sub-item">
                    <Link to="/" className="footer-sub-link sub-link">
                      Find a store
                    </Link>
                  </li>
                  <li className="footer-sub-item">
                    <Link to="/" className="footer-sub-link sub-link">
                      Newsletter
                    </Link>
                  </li>
                  <li className="footer-sub-item">
                    <Link to="/" className="footer-sub-link sub-link">
                      Bacome a member
                    </Link>
                  </li>
                  <li className="footer-sub-item">
                    <Link to="/" className="footer-sub-link sub-link">
                      Site feedback
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="col-4 col-sm-12 footer-item">
                <ul className="footer-sub-list">
                  <li className="footer-sub-item">
                    <span className="sub-title">Contact</span>
                  </li>
                  <li className="footer-sub-item">
                    <Link to="#" className="footer-sub-link">
                      store@uikit.com
                    </Link>
                  </li>
                  <li className="footer-sub-item">
                    <Link to="/" className="footer-sub-link">
                      Hotline: +1 131 138 138
                    </Link>
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
