import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Section, Title, TitleMain } from './App.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  getContacts,
  getError,
  getIsLoading,
} from 'components/redux/selectors';
import { useEffect } from 'react';
import { getContactsThunk } from 'components/redux/thunk';
import Loader from 'components/Loader/Loader';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <>
      <Section title="Phonebook">
        <TitleMain>Phonebook</TitleMain>
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Title>Contacts</Title>
        {contacts.length > 0 && <Filter />}

        {contacts.length > 0 && <ContactList />}
      </Section>
      {error && toast.error(`Sorry, ${error}`)}
      {isLoading && !error && <Loader />}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default App;
