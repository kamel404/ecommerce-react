import Navbar from './Components/Navbar'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
