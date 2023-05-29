import React from 'react';
import Heading from '../heading/Heading';
import Input from '../input/Input';
import './form.scss';

const From = () => {
  return (
    <section className="post">
      <div className="heading">
        <Heading text="Working with POST request" />
      </div>
      <form action="post">
        <Input placeholder="Your name" />
        <Input placeholder="Email" />
        <Input placeholder="Phone" />
      </form>
    </section>
  );
};
export default From;
