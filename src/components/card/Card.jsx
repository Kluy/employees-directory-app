import React from 'react';
import Text from '../text/Text';
import Image from '../image/Image';
import './card.scss';
import Preloader from '../preloader/Preloader';

const Card = ({ photo, name, position, email, phone }) => {
  return (
    <li className="card">
      <Image className="photo" src={photo} alt="User photo" />
      <Preloader />
      <Text className="card_name card_text" text={name} />
      <Text className="card_text" text={position} />
      <Text className="card_text" text={email} />
      <Text className="card_text" text={phone} />
    </li>
  );
};
export default Card;
