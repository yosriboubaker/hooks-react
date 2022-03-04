import './App.css';
import React, { useState } from 'react'
import MovieList from '../MovieList';
import {Routes, Route} from 'react-router-dom'

import DescMovie from '../DescMovie';

function App() {
 const [movies, setMovies] = useState([])

  return <div > {
    <div className='main'>
    <Routes>
      <Route path='/' element={<MovieList setMovies={setMovies} />} />
      <Route path='/:userId' element={<DescMovie movies={movies} />}/>
      

      </Routes>
        </div>
    } 
    </div>;
}

export default App;