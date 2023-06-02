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
      <Text className="p1_name" text={name} />
      <Text text={position} />
      <Text text={email} />
      <Text text={phone} />
    </li>
  );
};
export default Card;
