import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import MyLoader from '../UI/MyLoader/MyLoader'
import BookCard from './BookCard/BookCard';
import './BookList.styles.css'
import MyBtn from '../UI/MyBtn/MyBtn';
import { getMoreBooks } from '../../api/api';
import { loadMore } from '../../features/search/searchSlice';

const BookList = () => {
  const {books, isLoading, error, totalItems } = useSelector((state) => state.books)
  
  const dispatch = useDispatch()
  const searchProps = useSelector((state) => state.search)

  const handleLoadMore = () => {

    if(searchProps.query){
      dispatch(loadMore())
      dispatch(getMoreBooks(searchProps))
    } 
  }
  return (
    <div className='bookList'>
      <span className='totalItems'>Found: {totalItems}</span>     
      { error && <h1 className='errorMessage' >{error}</h1>}
      { isLoading ? <MyLoader/> : totalItems ? 
        <div className='bookList__grid-container'>{
          books?.map(book => <BookCard key={book.id } book={book}>{book.id}</BookCard> )}
        </div>
        :  <span className='searchSomething'>Search something ...</span>
      }
      {   books?.length && books?.length < totalItems
      ? <MyBtn onClick={handleLoadMore} content={'Load more...'}/>
      : <div></div>
      }
    </div>
  );
};

export default BookList;