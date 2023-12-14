import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import Login from './components/Login';
//import Login1 from './components/Login';
//import Register from './components/Register';
import Register1 from './components/Register';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<Register1/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
