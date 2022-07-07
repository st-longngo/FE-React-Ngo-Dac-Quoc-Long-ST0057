import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app.reducers';
import Icon from '../../../../assets/icon';
import { ICart } from './../../interfaces/cart';

export const Header = () => {
  const [cartNumber, setCartNumber] = useState<number>();
  const { cart } = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    setCartNumber(cart.reduce((acc: number, item: ICart) => acc + item.quantity, 0))
  }, [cart]);

  return (
    <header className="header" id="header">
      <div className="container">
        <div className="header-inner">
          <h1 className="logo">
            <Link to="/">
              <img src={Icon.Logo} alt="Eshop" />
            </Link>
          </h1>
          <nav className="nav">
            <ul className="nav-menu">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Men
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Women
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Kids
                </Link>
              </li>
            </ul>
          </nav>
          <ul className="header-extra">
            <li className="extra-item" id="search">
              <Link to="/" id="search" className="extra-link">
                <img
                  src={Icon.Search}
                  alt="search"
                  className="extra-icon"
                />
              </Link>
            </li>
            <li className="extra-item">
              <Link to="/cart" id="cart" className="extra-link">
                <img src={Icon.Cart} alt="cart" className="extra-icon" />
                <span id="cart-number" className={cartNumber ? 'cart-active': ''}>{cartNumber}</span>
              </Link>
            </li>
            <li className="extra-item">
              <Link to="/register" id="person" className="extra-link">
                <img
                  src={Icon.Avatar}
                  alt="avatar"
                  className="extra-icon"
                />
              </Link>
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
