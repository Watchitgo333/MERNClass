import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Guide from './components/Guide';
import Home from './components/Home';
import StringNumber from './components/StringNumber';
import WordColors from './components/WordColors';



function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Guide/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/:strNum' element={<StringNumber/>}/>
          <Route path="/:word/:wordColor/:bgColor" element={<WordColors/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
