import React, { useState, useEffect } from 'react';

import Container from './components/Container';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

import styles from './App.module.scss';

document.title = 'Phonebook';

const prevContacts = [
      { id: 'id-1', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Rosie Simpson', number: '459-12-56' },
];

  const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
 localStorage.setItem('contacts', JSON.stringify(parsedContacts));

export default function App() {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(
    () => parsedContacts ?? []
  );

useEffect(() => {
  localStorage.setItem('contacts', JSON.stringify(prevContacts));
}, [contacts]);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

    //  Додає контакт
     function addContact({ name, number }) {
       const newContact = { name: name, number: number };

       if (contacts.find(contact => contact.name === name)) {
         return alert(`${name} is alredy in contacts.`);
       }
       setContacts(prevState => [...prevState, newContact]);
       return alert(`${name} is added to the contact list`);
     };

// Видаляємо контакт
  function deleteContact(contactId) {
    setContacts(contacts.filter(contact => contact.id !== contactId));

    return alert('The contact has been deleted');
  }

  // Фільтруємо і повертаємо
  function changeFilter(evt) {
    setFilter(evt.currentTarget.value);
  }

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <Container>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2 className={styles.title}>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={filterContacts} onDeleteContact={deleteContact} />
    </Container>
  );
}



// }

// На класах
// class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Rosie Simpson', number: '459-12-56' },
//     ],
//     filter: '',
//   };

//   // Додає контакт (зробити окремо)
//   addContact = newContact => {
//     // Перевірка дубля
//     const duplicateName = this.state.contacts.find(
//       contact => contact.name === newContact.name,
//     );

//     if (duplicateName) {
//       alert(`${newContact.name} is already on contacts`);
//       return;
//     }

//     this.setState(({ contacts }) => ({
//       contacts: [newContact, ...contacts],
//     }));
//   };

//   // Слідкуємо та поміщаємо в стейт
//   changeFilter = event => {
//     this.setState({ filter: event.currentTarget.value });
//   };

//   // Фільтруємо і повертаємо
//   filterContacts = () => {
//     const { contacts, filter } = this.state;

//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter),
//     );
//   };

//   // Видаляємо контакт
//   deleteContact = id => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== id),
//     }));
//   };

//   render() {
//     const { filter } = this.state;
//     const filteredResults = this.filterContacts();

//     return (
//       <Container>
//         <h1 className={styles.title}>Phonebook</h1>
//         <ContactForm onSubmit={this.addContact} />
//         <h2 className={styles.title}>Contacts</h2>
//         <Filter value={filter} onChange={this.changeFilter} />
//         <ContactList
//           contacts={filteredResults}
//           onDeleteContact={this.deleteContact}
//         />
//       </Container>
//     );
//   }
// }

// export default App;
