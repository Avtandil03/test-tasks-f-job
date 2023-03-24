import React from 'react';
import { selects } from '../../constants/searchOptions';
import MyInput from '../UI/MyInput/MyInput';
import MySearchBtn from '../UI/MySearchBtn/MySearchBtn';
import MySelect from '../UI/MySelect/MySelect';
import { setQuery, setSubject, setOrderMode, resetLoadMore } from '../../features/search/searchSlice'
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../../api/api';

import './Header.styles.css'
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch()
  const searchProps = useSelector((state) => state.search)
  const navigate = useNavigate()

  const fetchAllBooks = () => {
    navigate('/books')

    if(searchProps.query) {
      dispatch(resetLoadMore())
      dispatch(getBooks(searchProps))
    }
  }
  return (
    <header className='header'>
      <div className="container">
        <h1 className='header__title'>Search your books</h1>
        <div className="header__search-wrapper">
          <MyInput placeholder='Search...' onChange={e => dispatch(setQuery(e.target.value))} onKeyDown={fetchAllBooks} />
          <MySearchBtn onClick={fetchAllBooks} />
        </div>
        <div className="header__params-wrapper">
          <MySelect select={selects.categories} onChange={e => dispatch(setSubject(e.target.value))} />
          <MySelect select={selects.sort} onChange={e => dispatch(setOrderMode(e.target.value))} />
        </div>

      </div>
    </header>
  );
};

export default Header;