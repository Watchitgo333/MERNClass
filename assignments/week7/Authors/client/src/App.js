import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Authors from "./components/Authors";
import Navbar from './components/Navbar';
import Form from "./components/Form";
import {useState} from 'react';

function App() {

  const [menuItem, setMenuItem] = ("");

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar menuItem={menuItem} setMenuItem={setMenuItem}/>
        <Routes>
          <Route path="/" element={<Authors/>}/>
          <Route path="/authors/create" element={<Form/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
