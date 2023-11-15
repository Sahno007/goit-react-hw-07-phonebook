import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsList } from 'redux/contactsSlice';

import { addContact } from 'redux/contactsOperations';

import FormStyle from './FormStyle.styled';

const Form = () => {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const contacts = useSelector(getContactsList);
  const dispatch = useDispatch();

  const handlerChangeInput = ({ target }) => {
    if (target.name === 'name') {
      setName(target.value);
    } else {
      setNumber(target.value);
    }
  };

  const handlerSubmitForm = e => {
    e.preventDefault();

    if (
      contacts?.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is alredy in your contacts`);
      return;
    }

    if (number && name) {
      dispatch(addContact({ name, phone: number }));

      setName('');
      setNumber('');
    }
  };

  return (
    <FormStyle onSubmit={handlerSubmitForm}>
      <label>
        Name
        <input
          value={name}
          onChange={handlerChangeInput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Phone
        <input
          value={number}
          onChange={handlerChangeInput}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" disabled={!name || !number}>
        Add contact
      </button>
    </FormStyle>
  );
};

export default Form;