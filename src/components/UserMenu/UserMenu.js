import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/operations';
import { useAuth } from '../../hooks/useAuth';
import { Greetings, Menu } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Menu>
      <Greetings>Welcome, {user.name}</Greetings>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </Menu>
  );
};
