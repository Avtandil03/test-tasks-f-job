import React from 'react';
import { useSelector } from 'react-redux';
import MyLoader from '../UI/MyLoader/MyLoader';

import './BookPage.styles.css'

const BookPage = () => {
  const { isLoading, error, volumeInfo } = useSelector((state) => state.book)
  const { title, authors, categories, imageLinks, description } = volumeInfo
  return (
    <div className='book-pag-wrapper'>
      {isLoading && <MyLoader />}
      <div className="book-page-container">
        <h1 className="book-title">{title}</h1>
        {authors?.map(author => <h2 className="book-author">{author}</h2>)}        
        <p className="book-description">{description}</p>
      </div>
      <img src={imageLinks?.thumbnail} alt={title} />
    </div>
  );
};

export default BookPage;