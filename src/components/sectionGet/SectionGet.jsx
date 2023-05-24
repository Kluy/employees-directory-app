import React from 'react';
import Button from '../button/Button';
import Card from '../card/Card';
import Heading from '../heading/Heading';
import './sectionGet.scss';

const SectionGet = () => {
  return (
    <section className="get">
      <Heading text="Working with GET request" newClass="h1--padding" />
      <div className="card-wrapper">
        <Card />
      </div>
      <Button text="Show more" />
    </section>
  );
};
export default SectionGet;
