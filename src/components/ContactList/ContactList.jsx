import PropTypes from 'prop-types';
import ContactItem from '../ContactItem';
import { v4 as uuidv4 } from 'uuid';


import styles from './ContactList.module.scss';

// Приймає всі контакти та прокидає далі метод для видалення контакту
export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={styles.list}>
      {contacts.map(contact => (
        <ContactItem
          contact={contact}
          onDeleteContact={onDeleteContact}
          // key={contact.id}
          key={uuidv4()}
        />
      ))}
    </ul>
  );
};

 

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};