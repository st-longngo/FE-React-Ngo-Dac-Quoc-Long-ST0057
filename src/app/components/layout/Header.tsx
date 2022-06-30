import React from 'react';
import Icon from '../../assets/icon';

const dataNav = [
  {
    name: 'Men',
    path: '#',
  },
  {
    name: 'Women',
    path: '#',
  },
  {
    name: 'Kids',
    path: '#',
  },
];

const dataHeaderExtra = [
  {
    name: 'search',
    icon: Icon.Search,
    path: '#',
  },
  {
    name: 'cart',
    icon: Icon.Cart,
    path: '#',
  },
  {
    name: 'avatar',
    icon: Icon.Avatar,
    path: '#',
  },
];

const Header = () => {
  return (
    <header className='header' id='header'>
      <div className='container'>
        <div className='header-inner'>
          <h1 className='logo'>
            <a href='index.html'>
              <img src={Icon.Logo} alt='Eshop' />
            </a>
          </h1>
          <nav className='nav'>
            <ul className='nav-menu'>
              {dataNav.map((item, idx) => {
                return (
                  <li className='nav-item' key={idx}>
                    <a href={item.path} className='nav-link'>
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
          <ul className='header-extra'>
            {dataHeaderExtra.map((item) => {
              return (
                <li className='extra-item' id='search'>
                  <a href={item.path} id={item.name} className='extra-link'>
                    <img
                      src={item.icon}
                      alt={item.name}
                      className='extra-icon'
                    />
                  </a>
                </li>
              );
            })}
            <li className='extra-item'>
              <button className='extra-control'>
                <img src={Icon.Hamburger} alt='hamburger' id='hamburger' />
                <img src={Icon.Close} alt='close' id='close' />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
