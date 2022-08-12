import './App.css';
import {useState} from 'react'
import Main from './views/Main';
import Product from './components/Product';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/products" default />
          <Route element={<Product/>} path="/products/:id"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
