import React from 'react';
import Button from '../button/Button';
import Image from '../image/Image';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <Image className="logo" src="../../images/Logo.svg" alt="Logo" />
      <Button className="button" type="yellow" text="Users" />
      <Button className="button" type="yellow" text="Sign up" />
    </header>
  );
};

export default Header;
