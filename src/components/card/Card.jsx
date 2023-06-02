import React from 'react';
import Text from '../text/Text';
import Image from '../image/Image';
import './card.scss';
import Preloader from '../preloader/Preloader';
import Tooltip from '../tooltip/Tooltip';
import { useState } from 'react';

const Card = ({ photo, name, position, email, phone }) => {
  const [tooltip, setTooltip] = useState({});
  const onMouseOver = e => {
    if (e.target.tagName === 'P') {
      setTooltip({ text: e.target.innerText, coordinates: { top: e.pageY, left: e.pageX } });
    }
  };

  console.log(onMouseOver);

  return (
    <li onMouseOver={e => onMouseOver(e)} className="card">
      <Image className="photo" src={photo} alt="User photo" />
      <Preloader />
      <Text className="card_name card_text" text={name} />
      <Text className="card_text" text={position} />
      <Text className="card_text" text={email} />
      <Text className="card_text" text={phone} />
      <Tooltip tooltip={tooltip} />
    </li>
  );
};
export default Card;
