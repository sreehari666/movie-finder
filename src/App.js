import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Favourites from './pages/Favourites';
import Details from './pages/Details';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/favourites' element={<Favourites/>} />
        <Route path='/details' element={<Details/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
