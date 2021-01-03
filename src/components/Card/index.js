import React from 'react';

import {
  CardContainer,
  CardFront,
  CardBack,
  CardBackground,
  CardNumber,
  CardName,
  CardValidate,
} from './styles';

import cardFrontEmpty from './images/card-front-empty.svg';
import cardBackEmpty from './images/card-back-empty.svg';

const Card = ({ cardNumber, cardName, cardValidate }) => (
  <>
    <CardContainer>
      <CardFront>
        <CardNumber>
          {cardNumber || '* * * * * * * * * * * * * * * *'}
        </CardNumber>
        <div>
          <CardName>{cardName || 'NOME DO TITULAR'}</CardName>
          <CardValidate>{cardValidate || '00/00'}</CardValidate>
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
