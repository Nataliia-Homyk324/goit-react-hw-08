import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { errorNotification, successAdd, successDelete, successEdit } from './notification';

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      // fulfilled
      return response.data;
    } catch (error) {
      // rejected
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (value, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", value);
      successAdd();
      return response.data;
    } catch (error) {
      errorNotification();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      successDelete()
      return response.data;
    } catch (error) {
      errorNotification()
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateContact = createAsyncThunk(
    'contacts/updateContact',
    async (data, thunkAPI) => {
        try {
            const respons = await axios.patch(`/contacts/${data.id}`, {
                name: data.name,
                number: data.number,
            });
            successEdit()
            return respons.data;
        } catch (error) {
           errorNotification()
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)