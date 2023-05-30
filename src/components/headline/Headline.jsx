import React from 'react';
import Text from '../text/Text';
import Button from '../button/Button';
import Heading from '../heading/Heading';
import './headline.scss';

const Headline = () => {
  return (
    <section className="headline">
      <div className="headline__bg-dimmer">
        <div className="headline__text-wrapper">
          <Heading text="Test assignment for front-end developer" />
          <Text
            className="p1_headline"
            text="What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving."
          />
          <Button text="Sign up" />
        </div>
      </div>
    </section>
  );
};

export default Headline;
