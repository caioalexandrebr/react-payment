import styled from 'styled-components';

import { colors, fontSizes } from '../../tokens';

const CardStyle = `
  backface-visibility: hidden;
  box-sizing: border-box;
  display: inline-block;
  height: 172px;
  left: 0;
  padding: 20px;
  position: absolute;
  top: 0;
  transform-style: preserve-3d;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  width: 100%;
  z-index: 1000;
`;

export const CardFront = styled.div`
  transform: rotateY(0);
  ${CardStyle}
`;

export const CardBack = styled.div`
  transform: rotateY(-180deg);
  ${CardStyle}
`;

export const CardContainer = styled.div`
  height: 172px;
  margin: 0 auto 30px auto;
  perspective: 600px;
  width: 280px;

  &:hover ${CardFront} {
    transform: rotateY(180deg);
  }

  &:hover ${CardBack} {
    transform: rotateY(0deg);
  }
`;

export const CardBackground = styled.img`
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
`;

export const CardText = `
  color: ${colors.white};
  font-size: ${fontSizes.medium}px;
  position: absolute;
  text-shadow: 0px 1px 2px ${colors.dark};
`;

export const CardNumber = styled.span`
  ${CardText}
  top: 78px;
`;

export const CardName = styled.span`
  ${CardText}
  top: 120px;
`;

export const CardValidate = styled.span`
  ${CardText}
  left: 78%;
  top: 120px;
`;
