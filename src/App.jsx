import { useState } from 'react'
import NavBar from './components/navbar/NavBar'
import './App.css'
import Banner from './components/banner/Banner'
import RowPost from './components/rowPost/RowPost'
import axios from 'axios'
import { action, documentary, history, horror, originals, scienceFiction, war } from './urls'

function App() {
  const [state, setState] = useState([])
  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title="Netflix Originals" isSmall/>
      <RowPost url={war} title="War" isSmall/>
      <RowPost url={history} title="History" isSmall/>
      <RowPost url={action} title="Action" isSmall/>
      <RowPost url={documentary} title="Documentary" isSmall/>
      <RowPost url={horror} title="Horror" isSmall/>
      <RowPost url={scienceFiction} title="Science Fiction" isSmall/>
    </div>
  )
}

export default App
