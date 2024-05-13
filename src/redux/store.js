import { configureStore } from "@reduxjs/toolkit";
import  contactsReducer  from './contacts/contactsSlice';
import filtersReducer from './contacts/filtersSlice';
import authReducer from "./auth/slice";


export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filters: filtersReducer,
        auth: authReducer,
    },
    
})
