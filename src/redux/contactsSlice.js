import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOperations';

const initialState = {
  contacts: {
    contacts: [],
    isLoading: false,
    error: null,
  },
};

export const contactsSlice = createSlice({
  name: 'contactsList',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.contacts.contacts = action.payload;
      state.contacts.isLoading = false;
      state.contacts.error = null;
    });

    builder.addCase(fetchContacts.pending, (state, action) => {
      state.contacts.isLoading = true;
      state.contacts.error = null;
    });

    builder.addCase(fetchContacts.rejected, (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    });

    builder.addCase(addContact.fulfilled, (state, action) => {
      state.contacts.contacts.push(action.payload);
      state.contacts.isLoading = false;
      state.contacts.error = null;
    });

    builder.addCase(addContact.pending, (state, action) => {
      state.contacts.isLoading = true;
      state.contacts.error = null;
    });
    builder.addCase(addContact.rejected, (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    });
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      state.contacts.contacts = state.contacts.contacts.filter(
        contact => contact.id !== action.payload.id
      );
      state.contacts.isLoading = false;
      state.contacts.error = null;
    });
    builder.addCase(deleteContact.pending, (state, action) => {
      state.contacts.isLoading = true;
      state.contacts.error = null;
    });
    builder.addCase(deleteContact.rejected, (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    });
  },
});

export const getContactsList = state => state.contactsList.contacts.contacts;
export const getLoading = state => state.contactsList.contacts.isLoading;
export const getError = state => state.contactsList.contacts.error;