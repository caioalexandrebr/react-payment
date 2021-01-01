import styled from 'styled-components';

import { colors, fontSizes } from '../../tokens';

export const ButtonStyle = styled.button`
  background: ${colors.primary};
  border-radius: 10px;
  border: 0;
  color: ${colors.white};
  font-family: sans-serif;
  font-size: ${fontSizes.medium}px;
  padding: 20px 0;
  text-transform: uppercase;
  width: 100%;
`;
