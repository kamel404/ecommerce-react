import Navbar from './Components/Navbar'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Footer from './Components/Footer';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
  );
}

export default App;
