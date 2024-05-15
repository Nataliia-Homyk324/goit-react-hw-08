

export const selectIsLoading = state => state.contacts.loading;

export const selectError = state => state.contacts.error;

export const selectContacts = (state) => state.contacts.items;

export const selectIsDeletingContact = state => state.contacts.isDeleteContact;
export const selectIsEditingContact = state => state.contacts.isEditContact;
