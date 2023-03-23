import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getBookById } from '../../../api/api';
import './BookCard.styles.css'

const BookCard = ({ book }) => {
  const { title, imageLinks, authors, categories } = book.volumeInfo
  const dispatch = useDispatch()
  

  return (
    <div className="grid-item" key={book.id}>
      <NavLink to={`/book/${book.id}` } onClick={dispatch(getBookById(book.id))}>
        <img src={imageLinks ? imageLinks.thumbnail : './src/assets/images/notFoundImage.png'} alt={title} className="book-cover" />
        <h3 className="book-title">{title}</h3>
      </NavLink>
      {authors?.map(author => <p className="book-author" key={author}>{author}</p>)}
      {categories && <a>{categories[0]}</a>}
    </div>
  );
};

export default BookCard;