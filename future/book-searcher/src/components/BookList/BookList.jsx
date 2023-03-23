import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import MyLoader from '../UI/MyLoader/MyLoader'
import BookCard from './BookCard/BookCard';
import './BookList.styles.css'

const BookList = () => {
  const {books, isLoading, error, totalItems } = useSelector((state) => state.books)
  return (
    <div className='book-list'>
      {isLoading && <MyLoader/> }
      { error && <h1 className='errorMessage' >{error}</h1>}
      { totalItems ? 
        <div className='grid-container'>{
          books?.map(book => <BookCard key={book.id} book={book}>{book.id}</BookCard> )}
        </div>
        : <h1>Search something ...</h1>
      }
    </div>
  );
};

export default BookList;