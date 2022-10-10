import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import huntrackerApi from "../../common/apis/huntrackerApi";

const CONTACTS_TABLE = process.env.REACT_APP_CONTACTS_TABLE_ID;

export const fetchAsyncContacts = createAsyncThunk('contacts/fetchAsyncContacts', async () => {
  const response = await huntrackerApi.get(
    `${CONTACTS_TABLE}`
  )
  .catch((err) => {
    console.log('Error : ' + err);
  });
  return response.data.records;
})

const initialState = {
  contacts: {}
}

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncContacts.pending]: () => {
      console.log('pending');
    },
    [fetchAsyncContacts.fulfilled]: (state, {payload}) => {
      console.log('contacts fetched successfully');
      return {...state, contacts: payload};
    },
    [fetchAsyncContacts.rejected]: () => {
      console.log('rejected');
    }
  }
});

export const getAllContacts = (state) => state.contacts.contacts;

export default contactSlice.reducer;