import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from '../contacts/selectors';


export const selectNameFilter = state => state.filters.name;
export const selectFilteredContacts = createSelector([selectNameFilter, selectContacts], (filterContacts, contacts) =>
    contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filterContacts.trim().toLowerCase())
    )
);