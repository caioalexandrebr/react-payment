import styled from 'styled-components';
import { colors, fontSizes } from '../../tokens';

export const Container = styled.div`
  background: linear-gradient(0deg, ${colors.white} 66%, ${colors.primary} 66%);
  box-sizing: border-box;
  padding: 0 40px;
  width: 100%;
`;

export const Breadcrumb = styled.span`
  text-align: center;
  display: block;
  color: ${colors.white};
  font-size: ${fontSizes.medium}px;
  padding-top: 40px;
`;

export const TitleContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  gap: 15px;
  padding: 0 30px;
  width: 100%;
`;

export const Title = styled.h2`
  color: ${colors.white};
  font-size: ${fontSizes.large}px;
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

export const Input = styled.input`
  ${InputSelectStyle}
`;

export const Select = styled.select`
  ${InputSelectStyle}
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 10px;
`;
