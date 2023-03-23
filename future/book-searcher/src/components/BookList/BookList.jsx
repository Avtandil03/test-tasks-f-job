import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import MyLoader from '../UI/MyLoader/MyLoader'

const BookList = () => {
  const isEmptySearch = useSelector((state) => state.search.query) && true
  const {books, isLoading, error, totalItems } = useSelector((state) => state.books)
  return (
    <div className='container'>
      {isLoading ? <MyLoader/> 
        : error ? <h1 className='errorMessage' >{error}</h1>
        : totalItems ? books?.map(book => <div key={book.id}>{book.id}</div> )
        : <h1>Search something {isEmptySearch && 'else!'}</h1>
      }
    </div>
  );
};

export default BookList;