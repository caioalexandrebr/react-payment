import styled from 'styled-components';

import InputMask from 'react-input-mask';
import arrowLeft from './images/left-arrow.svg';
import { Container } from '../../components/Container';
import { colors, fontFamilies, fontSizes, media } from '../../tokens';

export const CheckoutContainer = styled(Container)`
  background: linear-gradient(0deg, ${colors.white} 66%, ${colors.primary} 66%);
  padding-top: 40px;

  ${media.lg} {
    background: linear-gradient(
      -90deg,
      ${colors.white} 66%,
      ${colors.primary} 66%
    );
    display: flex;
  }
`;

export const ColCard = styled.div`
  ${media.lg} {
    flex: 2;
  }
`;

export const ColInfos = styled.div`
  ${media.lg} {
    flex: 3;
  }
`;

export const Breadcrumb = styled.span`
  color: ${colors.white};
  display: block;
  font-family: ${fontFamilies.primary};
  font-size: ${fontSizes.medium}px;
  margin-bottom: 30px;
  position: relative;
  text-align: center;

  &:before {
    content: '';
    background-image: url(${arrowLeft});
    background-repeat: no-repeat;
    height: 20px;
    left: -30px;
    position: absolute;
    top: 0;
    width: 20px;
  }
`;

export const TitleContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  gap: 15px;
  margin: 0 auto 10px auto;
  max-width: 300px;
  padding: 0 30px;
  width: 100%;
`;

export const Title = styled.h2`
  color: ${colors.white};
  font-family: ${fontFamilies.primary};
  font-size: ${fontSizes.large}px;
  font-size: ${fontSizes.medium}px;
  font-weight: bold;
`;

export const InputSelectStyle = `
  background: ${colors.white};
  border: none;
  border-bottom: 1px solid ${colors.gray};
  color: ${colors.gray};
  margin-bottom: 40px;
  padding: 8px 0;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

export const Input = styled(InputMask)`
  ${InputSelectStyle}
`;

export const Select = styled.select`
  ${InputSelectStyle}
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 10px;
`;
