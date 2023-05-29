import React from 'react';
import Text from '../text/Text';
import Image from '../image/Image';
import './card.scss';

const Card = ({ photo, name, position, email, phone }) => {
  return (
    <li className="card">
      <Image className="photo" src={photo} alt="User photo" />
      <div className="card_name-wrapper">
        <Text text={name} />
      </div>
      <Text text={position} />
      <Text text={email} />
      <Text text={phone} />
    </li>
  );
};
export default Card;
