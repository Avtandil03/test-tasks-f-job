import BookList from './components/BookList/BookList'
import Header from './components/Header/Header'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import BookPage from './components/BookPage/BookPage';
import StartPage from './components/StartPage/StartPage';

function App() {

  return (
    <BrowserRouter className="App">
      <Header />
      <Routes>
        <Route path='/books' element={<BookList />}/>
        <Route path='/books/*' element={<BookPage/>}/>
        <Route path='/' element={<StartPage/>}/>
      </Routes>      
    </BrowserRouter>
  )
}

export default App
