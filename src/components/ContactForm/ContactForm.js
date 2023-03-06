import PropTypes from 'prop-types';
import {
  Container,
  Title,
  Form,
  Input,
  Label,
  Button,
} from './ContactForm.styled';
import { addContact } from '../../redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { selectContacts } from 'redux/contacts/selectors';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const isNameInContact = contacts.find(
    contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
  );

  const data = {
    name: name,
    number: number,
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (isNameInContact) {
      return alert(`${name} is already in contacts`);
    } else {
      dispatch(addContact(data));
    }
    // e.target.reset();
    resetForm();
  };

  const handleNameChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        return;
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <Container>
      <Title>Phonebook</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={handleNameChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    </Container>
  );
}

ContactForm.prototype = {
  name: PropTypes.string,
  number: PropTypes.number,
  onSubmit: PropTypes.func,
};
