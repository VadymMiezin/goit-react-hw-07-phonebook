import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from 'api/contactsApi';

export const getContactsThunk = createAsyncThunk(
  'contacts/get',
  async (_, thunkAPI) => {
    try {
      return fetchContacts();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/create',
  async (data, thunkAPI) => {
    try {
      return addContact(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/delete',
  async (id, thunkAPI) => {
    try {
      return deleteContact(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
