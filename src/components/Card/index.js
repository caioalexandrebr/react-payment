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

const Card = () => (
  <>
    <CardContainer>
      <CardFront>
        <CardText>* * * * * * * * * * * * * * * *</CardText>
        <div>
          <CardText>NOME DO TITULAR</CardText>
          <CardText>00/00</CardText>
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
