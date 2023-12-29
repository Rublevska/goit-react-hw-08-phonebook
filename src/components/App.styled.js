import styled from 'styled-components';

export const Message = styled.p`
  text-align: center;
  color: ${p => p.theme.colors.accentTextColor};
`;

export const ErrorMessage = styled.p`
  text-align: center;
  color: ${p => p.theme.colors.errorTextColor};
`;
