import { createSlice } from '@reduxjs/toolkit';
import { getBooks } from '../../api/api';

const initialState = {
  books: [],
  totalItems: 0,
  error: null,
  isLoading: false
}

const booksSlice = createSlice({
  name: 'books',
  initialState ,
  reducers: {
  },
  extraReducers: {
    [getBooks.pending]: (state) => {
      state.isLoading = true
    },
    [getBooks.fulfilled]: (state, action) => {
      state.isLoading = false
      state.books = action.payload.items;
      state.totalItems = action.payload.totalItems;
    },
    [getBooks.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.error.message;
    },
  },
});

export default booksSlice.reducer;