import { configureStore } from '@reduxjs/toolkit'
import booksSlice from '../features/books/booksSlice'
import searchSlice from '../features/search/searchSlice'

export const store = configureStore({
  reducer: {
    books: booksSlice,
    search: searchSlice,
  },
})