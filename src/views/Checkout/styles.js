import styled from 'styled-components';
import { colors } from '../../tokens';

export const Container = styled.div`
  padding: 0 40px;
  width: calc(100% - 80px);
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
