import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBookById } from '../../api/api';
import MyLoader from '../UI/MyLoader/MyLoader';

import './BookPage.styles.css'

const BookPage = () => {
  const currId = window.location.pathname.replace('/books/', '')
  const { isLoading , error, volumeInfo } = useSelector((state) => state.book)
  const dispatch = useDispatch()
  

  useEffect(() => {
    if(currId) dispatch(getBookById(currId))
  }, [])
  
  if(error){
    return <div className='err-req'>
      <h1>Book with id: "{currId}" not found =(</h1>
      <p>Error:{error}</p>
    </div>
  } 
  return (
    <>
      {isLoading ? <MyLoader /> :
    <div className='bookPage__wrapper'>
      <div className="bookPage__image-wrapper">
        <img src={volumeInfo?.imageLinks ? volumeInfo?.imageLinks.thumbnail : '../src/assets/images/notFoundImage.png'} alt={volumeInfo?.title} />
      </div>
      
      <div className="bookPage__info-container">
        <h1 className="bookPage__title">{volumeInfo?.title} - <span>{volumeInfo?.subtitle}</span></h1>
        <div className="bookPage__categories">
          {volumeInfo?.categories?.map(category => <span className='bookPage__category' key={category}>{category}</span>)}
        </div>
        <div className="bookPage__authors">
          {volumeInfo?.authors?.map(author => <p className="bookPage__author" key={author}>{author}</p>)}  
        </div>
              
        <p className="book-description">{volumeInfo?.description}</p>
      </div>
    </div>}
    </>
  );
};

export default BookPage;