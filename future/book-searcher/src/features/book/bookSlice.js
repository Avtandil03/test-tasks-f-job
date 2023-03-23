import { createSlice } from '@reduxjs/toolkit';
import { getBookById } from '../../api/api';

const initialState = {
  volumeInfo: {},
  error: null,
  isLoading: false
}

const booksSlice = createSlice({
  name: 'book',
  initialState ,
  reducers: {
  },
  extraReducers: {
    [getBookById.pending]: (state) => {
      state.isLoading = true
    },
    [getBookById.fulfilled]: (state, action) => {
      state.isLoading = false
      state.volumeInfo = action.payload.volumeInfo
    },
    [getBookById.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.error.message;
    },
  },
});

export default booksSlice.reducer;
