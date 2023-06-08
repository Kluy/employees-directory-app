import React from 'react';
import Text from '../text/Text';
import Image from '../image/Image';
import './card.scss';

const Card = ({ photo, name, position, email, phone }) => {
  console.log('photo');
  console.log(photo);
  return (
    <li className="card">
      <Image className="photo" src={photo} alt="User photo" />
      <Text className="p1__name" text={name} />
      <Text text={position} />
      <Text text={email} />
      <Text text={phone} />
    </li>
  );
};
export default Card;
