import ContactItem from './ContactItem';
import { useSelector, useDispatch } from 'react-redux';
import ContactsListStyled from './ContactsListStyle.styled';
import { getContactsList, getLoading, getError } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';
import { fetchContacts } from '../../redux/contactsOperations';
import { useEffect } from 'react';

const ContactList = () => {
  const contacts = useSelector(getContactsList);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const loading = useSelector(getLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFilterContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.phone.toLowerCase().includes(normalizedFilter)
    );
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  if (contacts.length === 0) {
    return (
      <h2>You haven't any contacts. Please add contacts to your phonebook</h2>
    );
  }

  if (filter && getFilterContacts().length === 0) {
    return <h2>We didn't find any contacts according to your search</h2>;
  }

  return (
    <ContactsListStyled>
      {getFilterContacts().map(contact => (
        <ContactItem
          userName={contact.name}
          userNumber={contact.phone}
          id={contact.id}
          key={contact.id}
        />
      ))}
    </ContactsListStyled>
  );
};

export default ContactList;



// import ContactItem from './ContactItem';
// import { useSelector, useDispatch } from 'react-redux';
// import ContactsListStyled from './ContactsListStyle.styled';
// import { getContactsList, getLoading, getError } from 'redux/contactsSlice';
// import { getFilter } from 'redux/filterSlice';
// import { fetchContacts } from '../../redux/contactsOperations';
// import { useEffect } from 'react';

// const ContactList = () => {
//   const contacts = useSelector(getContactsList);
//   const filter = useSelector(getFilter);
//   const dispatch = useDispatch();
//   const loading = useSelector(getLoading);
//   const error = useSelector(getError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   const visibleContacts = contacts?.filter(
//     contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase()) ||
//       contact.phone.toLowerCase().includes(filter.toLowerCase())
//   );

//   if (loading) {
//     return <h2>Loading...</h2>;
//   }

//   if (error) {
//     return <h2>{error}</h2>;
//   }

//   if (contacts.length === 0) {
//     return (
//       <h2>You haven't any contacts. Please add contacts to your phonebook</h2>
//     );
//   }

//   if (filter && visibleContacts.length === 0) {
//     return <h2>We didn't find any contacts according your search</h2>;
//   }

//   if (contacts.length > 0) {
//     return (
//       <ContactsListStyled>
//         {visibleContacts.map(contact => (
//           <ContactItem
//             userName={contact.name}
//             userNumber={contact.phone}
//             id={contact.id}
//             key={contact.id}
//           />
//         ))}
//       </ContactsListStyled>
//     );
//   }
// };

// export default ContactList;