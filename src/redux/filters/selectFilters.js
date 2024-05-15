import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from '../contacts/selectors';
import Fuse from "fuse.js";


export const selectNameFilter = state => state.filters.name;

// фільтрація за name
// export const selectFilteredContacts = createSelector([selectNameFilter, selectContacts], (filterContacts, contacts) =>
//     contacts.filter((contact) =>
//         contact.name.toLowerCase().includes(filterContacts.trim().toLowerCase())
//     )
// );

export const selectFilteredContacts = createSelector([selectNameFilter, selectContacts], (filterContacts, contacts) => {

    if (!filterContacts) {
        return contacts;
    } else {
        const fuse = new Fuse(contacts, {
            keys: ['name', 'number'],
            threshold: 0.3
        });

        const searchResults = fuse.search(filterContacts.trim());
        return searchResults.map(result => result.item);
    }
}
);

// фільтрує контакти за ім'ям або номером за допомогою пошуку Fuse.
//  Починаючи з функції selectNameFilter, яка повертає значення імені
//   для фільтрування.Якщо фільтр не заданий, повертається список всіх
// контактів.У протилежному випадку, створюється новий екземпляр Fuse,
//     який шукає відповідність за ім'ям чи номером, і повертається
//      результат пошуку у вигляді списку елементів.
