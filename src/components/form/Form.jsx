import React from 'react';
import Button from '../button/Button';
import Heading from '../heading/Heading';
import Input from '../input/Input';
import Text from '../text/Text';
import './form.scss';

const From = () => {
  const positionsList = ['Frontend developer', 'Backend developer', 'Designer', 'QA'];

  return (
    <section className="post">
      <Heading text="Working with POST request" />
      <form className="form" action="post">
        <Input className="input" type="text" placeholder="Your name" />
        <Input className="input" type="email" placeholder="Email" />
        <Input className="input" type="tel" placeholder="Phone" />
        <Text text="Select your position" />
        {positionsList.map(elem => (
          <Input
            type="radio"
            className="input__radio"
            key={elem}
            id={elem}
            name="position"
            value={elem}
          />
        ))}
        <Input className="input input__file" type="file" placeholder="Upload your photo" />
        <Button type="submit" text="Sign up" disabled={true} />
      </form>
    </section>
  );
};
export default From;
