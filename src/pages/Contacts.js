import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { RenderContacts } from '../components/RenderContactsList/RenderContactsList';
import { Container } from 'components/Container/Container';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <ContactForm />
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <RenderContacts />
    </Container>
  );
}
