import './App.css';
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';
import Authors from "./components/Authors";
import Navbar from './components/Navbar';
import Main from './views/Main';
import {useState} from 'react';
import EditForm from './components/EditForm';
import axios from 'axios';

function App() {

  const [page, setPage] = useState("");
  const [authors, setAuthors] = useState([])
  const [errors, setErrors] = useState({})

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Authors/>}/>
          <Route path="/authors/create" element={<Main/>}/>
          <Route path="/authors/edit/:id" element={<EditForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
