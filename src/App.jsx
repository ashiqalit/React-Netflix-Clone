import { useState } from 'react'
import NavBar from './components/navbar/NavBar'
import './App.css'
import Banner from './components/banner/Banner'
import RowPost from './components/rowPost/RowPost'
import axios from 'axios'

function App() {
  const [state, setState] = useState([])
  return (
    <>
      <NavBar/>
      <Banner/>
      <RowPost/>
    </>
  )
}

export default App
