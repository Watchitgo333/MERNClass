import './App.css';
import {useState} from 'react'
import Main from './views/Main';
import Product from './components/Product';
import UpdateForm from './components/UpdateForm';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/products" default />
          <Route element={<Product/>} path="/products/:id"/>
          <Route element={<UpdateForm/>} path="/products/edit/:id"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
