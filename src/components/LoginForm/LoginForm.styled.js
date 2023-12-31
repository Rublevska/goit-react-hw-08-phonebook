import styled from 'styled-components';

export const StyledForm = styled.div`
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  padding: ${p => p.theme.spasing(4)};
  gap: ${p => p.theme.spasing(4)};
  border-radius: ${p => p.theme.radii.sd};
  background-color: ${p => p.theme.colors.mainFormColor};
  box-shadow: ${p => p.theme.shadows.formShadow};
`;

export const StyledField = styled.input`
  border-radius: ${p => p.theme.radii.sd};
  border: 1px solid ${p => p.theme.colors.borderColor};
  outline: 0;
  outline-offset: 0;
`;

export const FormInputGroup = styled.label`
  display: flex;
  justify-content: space-between;
`;
