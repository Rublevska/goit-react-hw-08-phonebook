import {
  Form as FormikForm,
  Field as FormicField,
  ErrorMessage as FormikError,
} from 'formik';
import styled from 'styled-components';

export const Form = styled(FormikForm)`
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

export const Field = styled(FormicField)`
  border-radius: ${p => p.theme.radii.sd};
  border: 1px solid ${p => p.theme.colors.borderColor};
`;

export const FormInputGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InputErrorGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ErrorMessage = styled(FormikError)`
  color: ${p => p.theme.colors.errorColor};
`;
