import React from "react";
import Icon from "../../assets/icon";

const Header = () => {
  return (
    <header className="header" id="header">
      <div className="container">
        <div className="header-inner">
          <h1 className="logo">
            <a href="index.html">
              <img src={Icon.Logo} alt="Eshop" />
            </a>
          </h1>
          <nav className="nav">
            <ul className="nav-menu">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Men
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Women
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Kids
                </a>
              </li>
            </ul>
          </nav>
          <ul className="header-extra">
            <li className="extra-item" id="search">
              <a href="#" id="search" className="extra-link">
                <img
                  src={Icon.Search}
                  alt="search"
                  className="extra-icon"
                />
              </a>
            </li>
            <li className="extra-item">
              <a href="./store.html" id="cart" className="extra-link">
                <img src={Icon.Cart} alt="cart" className="extra-icon" />
                <span id="cart-number" className="js-cart-number"></span>
              </a>
            </li>
            <li className="extra-item">
              <a href="#" id="person" className="extra-link">
                <img
                  src={Icon.Avatar}
                  alt="avatar"
                  className="extra-icon"
                />
              </a>
            </li>
            <li className="extra-item">
              <button className="extra-control">
                <img
                  src={Icon.Hamburger}
                  alt="hamburger"
                  id="hamburger"
                />
                <img src={Icon.Close} alt="close" id="close" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
