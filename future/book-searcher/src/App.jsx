import BookList from './components/BookList/BookList'
import Header from './components/Header/Header'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import BookPage from './components/BookPage/BookPage';

function App() {

  return (
    <BrowserRouter className="App">
      <Header />
      <Routes>
        <Route path='/' element={<BookList />}/>
        <Route path='/book/:id' element={<BookPage/>}/>
      </Routes>      
    </BrowserRouter>
  )
}

export default App
