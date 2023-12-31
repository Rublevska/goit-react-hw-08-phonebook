import { useDispatch } from 'react-redux';
import { register } from '../../redux/operations';
import {
  StyledForm,
  StyledField,
  Btn,
  FormInputGroup,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <StyledForm>
        <FormInputGroup>
          Username
          <StyledField type="text" name="name" />
        </FormInputGroup>
        <FormInputGroup>
          Email
          <StyledField type="email" name="email" />
        </FormInputGroup>
        <FormInputGroup>
          Password
          <StyledField type="password" name="password" />
        </FormInputGroup>
        <Btn type="submit">Register</Btn>
      </StyledForm>
    </form>
  );
};
