import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query:'', 
  subject: 'all', 
  orderBy: 'relevance', 
  page: 1
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery: (state, action) => {state.query = action.payload},
    setSubject: (state, action) => {state.subject = action.payload},
    setOrderMode: (state, action) => {state.orderBy = action.payload},
    loadMore: (state) => {state.page += 1},
    resetLoadMore: (state) => {state.page = initialState.page},
  },
})

export const { setQuery, setSubject, setOrderMode, loadMore, resetLoadMore } = searchSlice.actions

export default searchSlice.reducer
