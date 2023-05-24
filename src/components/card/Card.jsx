import React from 'react';
import Text from '../text/Text';
import './card.scss';

const Card = ({ text }) => {
  return (
    <div className="card">
      <img src="../../images/photo-cover.svg" />
      <Text text="Salvador Stewart Flynn Thomas Salva..." />
      <Text
        text="Leading specialist of the department o...
JeromeKlarkaJeromeKlarka19233623...
+38 (098) 278 76 24"
      />
    </div>
  );
};
export default Card;
