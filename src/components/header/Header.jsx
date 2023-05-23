import React from 'react';
import Button from '../button/Button';
import Logo from '../logo/Logo';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <div>
        <img src="../../images/Logo.svg" alt="Logo" />
      </div>
      <Button type="yellow" text="Users" />
      <Button type="yellow" text="Sign Up" />
    </header>
  );
};

export default Header;
