import { useEffect, useState } from 'react'
import './App.css'
import Content from './components/content/Content'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Hint from './components/hint/Hint'

function App() {

  const [active, setActive] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setActive(false)
    },10000)
  }, [])

  return (
    <div className='App'>
      <Header/>
      {active && <Hint close={() => setActive(false)}/>}
      <Content/>
      <Footer/>
    </div>
  )
}

export default App
