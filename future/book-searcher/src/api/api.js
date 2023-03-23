import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit';

const API_KEY = 'AIzaSyBNyDVH2q0vYAyz4zBazhe1_P5iLDa1ScU' || 'AIzaSyA_Z3EsXhpXh8izk0adX4AUnZ6wT4eQYEE';

const apiUrl = 'https://www.googleapis.com/books/v1'
const maxResults = 30

export const getBooks = createAsyncThunk('books/getBooks', async (props) => {
  try {
    const resQuery = (props.subject !== 'all') 
      ? ` intitle:${props.query} subject:${props.subject}`
      : props.query
    const startIndex = maxResults * (props.page - 1) ;

    const response = await axios.get(`${apiUrl}/volumes`, {
      params: {
        q: resQuery,
        startIndex: startIndex,
        maxResults: maxResults,
        orderBy: props.orderBy ,
        key: API_KEY,
      },
    })
    
    return response.data;
  } catch (error) {
    return error.message
  }
})

export const getBookById = createAsyncThunk('book/getBookById', async (id) => {
  try {
    const response = await axios.get(`${apiUrl}/volumes/${id}`, {
      params: {
        key: API_KEY,
      },
    })
    return response.data
  } catch (error) {
    return error.message    
  }
})