import { useState } from 'react';
import useLocalStorage from './Hooks/useLocalStorage';
import { ContactForm } from 'components/Form/Form';
import { ContactList } from 'components/List/List';
import { Filter } from 'components/Filter/Filter';
import { Container, Section, Title } from './App.styled';

const INITIAL_STATE = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', INITIAL_STATE);
  const [filter, setFilter] = useState('');

  const formSubmitHandler = formData => {
    addToContacts(formData);
  };

  const addToContacts = contact => {
    const normalizedName = contact.name.toLowerCase();
    const isExist = contacts.some(
      ({ name }) => name.toLowerCase() === normalizedName
    );

    if (isExist) {
      return alert(`${contact.name} is already in contacts`);
    }
    const contactsList = contacts.concat(contact);
    return setContacts(contactsList);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };
  const visibleContacts = getVisibleContacts();

  return (
    <Container>
      <Section>
        <Title as="h1">Phonebook</Title>
        <ContactForm onSubmit={formSubmitHandler} />
      </Section>
      <Section>
        <Title as="h2">Contacts</Title>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
        />
      </Section>
    </Container>
  );
};

export default App;
