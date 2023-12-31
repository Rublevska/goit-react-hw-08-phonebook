import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNav = styled.nav`
  display: flex;
  gap: ${p => p.theme.spasing(4)};
`;

export const StyledLink = styled(NavLink)`
  &.active {
    color: ${p => p.theme.colors.accentTextColor};
    font-weight: 700;
  }
`;
