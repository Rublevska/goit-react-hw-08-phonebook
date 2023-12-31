import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/operations';
import { FormInputGroup, StyledField, StyledForm } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
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
          Email
          <StyledField type="email" name="email" />
        </FormInputGroup>
        <FormInputGroup>
          Password
          <StyledField type="password" name="password" />
        </FormInputGroup>
        <button type="submit">Log In</button>
      </StyledForm>
    </form>
  );
};
