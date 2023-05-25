import React from 'react';
import Button from '../button/Button';
import Image from '../image/Image';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <img src="../../images/Logo.svg" alt="Logo" />
      {/* <Image src="../../images/Logo.svg" alt="Logo" /> */}
      <Button type="yellow" text="Users" />
      <Button type="yellow" text="Sign Up" />
    </header>
  );
};

export default Header;
