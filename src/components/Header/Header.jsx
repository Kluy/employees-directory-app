import React from 'react';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img
          className="header__logo"
          src="https://iev.aero/_nuxt/img/logo@2x.2d2c20b.png"
          alt=""
        />
      </div>
      <ul className="header__nav">
        <li className="nav__item">Пасажирам</li>
        <li className="nav__item">Послуги IEV</li>
        <li className="nav__item">VIP</li>
        <li className="nav__item">Партнерам</li>
        <li className="nav__item">Пресцентр</li>
        <li className="header__language nav__item">UA</li>
      </ul>
    </header>
  );
};

export default Header;
