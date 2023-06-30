import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Fullcard from './components/Fullcard';






function App() {
 
 return(
  <>
  <Router>
    <Header/>
      <Routes>
      
      <Route exact path="/" element={<Home />} />
        <Route path='/Fullcard/:slug' element={<Fullcard />} /> 
      </Routes>
    </Router>
  </>
 )
}

export default App;
