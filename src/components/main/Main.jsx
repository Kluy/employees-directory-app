import React from 'react';
import Button from '../button/Button';
import Heading from '../heading/Heading';
import './main.scss';

const Main = () => {
  return (
    <section className="main">
      <Heading text="Working with GET request" />
      <Button text="Sign up" />
    </section>
  );
};
export default Main;
