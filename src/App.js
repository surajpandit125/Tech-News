
import Stories from './components/Stories'
import  Pagination from './components/Pagination'
// import React, { useContext } from 'react' 
// import { AppContext } from './components/Context'
import "./App.css";
import Search from './components/Search'


import {UseGlobalContext} from "./components/Context";

function App() {

  return (
    <>
      <Stories/>
      <Search/> 
      <Pagination/>
    </>
  )
}

export default App