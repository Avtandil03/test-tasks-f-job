import { configureStore } from '@reduxjs/toolkit'
import bookSlice from '../features/book/bookSlice'
import booksSlice from '../features/books/booksSlice'
import searchSlice from '../features/search/searchSlice'

export const store = configureStore({
  reducer: {
    books: booksSlice,
    book: bookSlice,
    search: searchSlice,
  },
})