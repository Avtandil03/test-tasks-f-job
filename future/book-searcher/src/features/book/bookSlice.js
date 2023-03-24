import { createSlice } from '@reduxjs/toolkit';
import { getBookById } from '../../api/api';

const initialState = {
  id: '',
  volumeInfo: {},
  error: null,
  isLoading: false
}

const booksSlice = createSlice({
  name: 'book',
  initialState ,
  reducers: {
    setBookId: (state, action) => {state.id = action.payload}
  },
  extraReducers: {
    [getBookById.pending]: (state) => {
      state.isLoading = true
    },
    [getBookById.fulfilled]: (state, action) => {
      state.isLoading = false
      state.volumeInfo = action.payload.volumeInfo
      state.id = action.payload.id
    },
    [getBookById.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload;
    },
  },
});

export const {setBookId} = booksSlice.actions

export default booksSlice.reducer;
