import { createSelector } from 'reselect';

export const selectContactsList = state => state.contactsList.contacts.contacts;
export const selectLoading = state => state.contactsList.contacts.isLoading;
export const selectError = state => state.contactsList.contacts.error;
export const selectFilter = state => state.filter.filter;

export const selectFilteredContacts = createSelector(
  [selectContactsList, selectFilter],
  (contacts, filter) => {
    const normalizedFilter = filter && typeof filter === 'string' ? filter.toLowerCase().trim() : '';
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.phone.toLowerCase().includes(normalizedFilter)
    );
  }
);
