import React, {useState} from 'react';
// import { Component } from 'react';
import PropTypes from 'prop-types';
// import { v4 as uuidv4 } from 'uuid';

import styles from './ContactForm.module.scss';


export default function ContactForm({onSubmit}) {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // Метод для спогляданням за інпутами та запису в стейт
function hanldeChange(event) {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  }

function handleSubmit (event) {
    event.preventDefault();
    const contact = { name: name, number: number };

     onSubmit(contact);

    setName('');
    setNumber('');
  }


  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Name
        <input
          type="text"
          name="name"
          className={styles.input}
          value={name}
          onChange={hanldeChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label className={styles.label}>
        Number
        <input
          type="tel"
          name="number"
          className={styles.input}
          value={number} // Пишемо значення в стейт
          onChange={hanldeChange} // Метод нагляду
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          required
        />
      </label>
      <div className={styles.button__wrapper}>
        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </div>
    </form>
  );
}

  ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };


// class ContactForm extends Component {
//   // PropTypes як статична властивість
//   static propTypes = {
//     onSubmit: PropTypes.func.isRequired,
//   };

//   // Стейт форми
//   state = {
//     name: '',
//     number: '',
//   };

//   // Метод для спогляданням за інпутами та запису в стейт
//   hanldeChange = event => {
//     const { name, value } = event.currentTarget;

//     this.setState({
//       [name]: value,
//     });
//   };

//   // Метод для сабміту. Формує з стейта контакт та передає у зовнішній метод
//   hanldeSubmit = event => {
//     event.preventDefault();

//     const contact = {
//       id: uuidv4(),
//       name: this.state.name,
//       number: this.state.number,
//     };

//     this.props.onSubmit(contact); // Зовнішній метод в пропсах класу

//     this.resetForm();
//   };

//   // Скид паролю (після додання)
//   resetForm = () => {
//     this.setState({
//       id: '',
//       name: '',
//       number: '',
//     });
//   };

//   render() {
//     return (
//       <form className={styles.form} onSubmit={this.hanldeSubmit}>
//         <label className={styles.label}>
//           Name
//           <input
//             type="text"
//             name="name"
//             className={styles.input}
//             value={this.state.name} // Пишемо значення в стейт
//             onChange={this.hanldeChange} // Метод нагляду
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//             required
//           />
//         </label>
//         <label className={styles.label}>
//           Number
//           <input
//             type="tel"
//             name="number"
//             className={styles.input}
//             value={this.state.number} // Пишемо значення в стейт
//             onChange={this.hanldeChange} // Метод нагляду
//             pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
//             title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
//             required
//           />
//         </label>
//         <div className={styles.button__wrapper}>
//           <button type="submit" className={styles.button}>
//             Add contact
//           </button>
//         </div>
//       </form>
//     );
//   }
// }

// export default ContactForm;