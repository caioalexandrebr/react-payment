import styled from 'styled-components';

import { colors, fontSizes } from '../../tokens';

const CardStyle = `
  backface-visibility: hidden;
  display: inline-block;
  height: 172px;
  left: 0;
  position: absolute;
  top: 0;
  transform-style: preserve-3d;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  width: 280px;
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
  margin: 0 auto;
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

export const CardText = styled.span`
  color: ${colors.white};
  font-size: ${fontSizes.large}px;
  text-shadow: 0px 1px 2px ${colors.dark};
`;
