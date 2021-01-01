import React from 'react';

import {
  CardContainer,
  CardFront,
  CardBack,
  CardBackground,
  CardText,
} from './styles';

import cardFrontEmpty from './images/card-front-empty.svg';
import cardBackEmpty from './images/card-back-empty.svg';

const Card = ({ cardNumber, cardName, cardValidate }) => (
  <>
    <CardContainer>
      <CardFront>
        <CardText>{cardNumber || '* * * * * * * * * * * * * * * *'}</CardText>
        <div>
          <CardText>{cardName || 'NOME DO TITULAR'}</CardText>
          <CardText>{cardValidate || '00/00'}</CardText>
        </div>
        <CardBackground src={cardFrontEmpty} alt="" />
      </CardFront>
      <CardBack>
        <CardBackground src={cardBackEmpty} alt="" />
      </CardBack>
    </CardContainer>
  </>
);

export default Card;
