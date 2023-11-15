import Form from './Form/Form';

import ContactList from './FriendsList/ContactsList';
import SearchInput from './SearchInput/SearchInput';

export const App = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        paddingTop: '100px',
      }}
    >
      <h1> Phone book </h1>
      <Form />
      <p>Search contacts by name</p>
      <SearchInput />
      <h2>Contacts</h2>

      <ContactList />
    </div>
  );
};