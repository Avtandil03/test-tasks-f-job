import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setBookId } from '../../../features/book/bookSlice';
import './BookCard.styles.css'

const BookCard = ({ book }) => {
  const { title, imageLinks, authors, categories } = book.volumeInfo
  const dispatch = useDispatch()
  const searchCategory = useSelector((state) => state.search.subject)
  return (
    <div className="grid-item" key={book.id}>
      <NavLink to={`/books/${book.id}` } onClick={() => dispatch(setBookId(book.id))}>
        <img src={imageLinks ? imageLinks.thumbnail : './src/assets/images/notFoundImage.png'} alt={title} className="book-cover" />
        <h3 className="book-title">{title}</h3>
      </NavLink>
      {authors?.map(author => <p className="book-author" key={author}>{author}</p>)}
      {categories && <a>{searchCategory !== 'all' ? categories.filter(category => category.toLowerCase().includes(searchCategory)) : categories[0]}</a>}
    </div>
  );
};

export default BookCard;