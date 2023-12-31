import styled from 'styled-components';

export const Bar = styled.label`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  width: 400px;
  margin-left: auto;
  margin-right: auto;
`;

export const FilterField = styled.input`
  margin-top: ${p => p.theme.spasing(4)};
  width: 200px;
  border-radius: ${p => p.theme.radii.sd};
  border: 1px solid ${p => p.theme.colors.borderColor};

  &:focus {
    outline: none;
  }
`;
