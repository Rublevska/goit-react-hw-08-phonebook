import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchContacts } from '../../redux/operations';
import { selectIsLoading } from '../../redux/selectors';
import { ContactList } from '../../components/Contacts/ContactList';
import { FormContact } from '../../components/phoneForm/NewPhoneForm';
import { SearchBar } from 'components/SearchBar/SearchBar';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <FormContact />
      <SearchBar />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList />
    </>
  );
}
