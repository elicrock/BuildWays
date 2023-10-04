import './App.css';
import { Routes, Route } from 'react-router-dom';
import Catalogy from '../Catalogy/Catalogy';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Header from '../Header/Header';

function App() {
  return (
    <> 
      <Header />
      <Routes>
        <Route path='/catalogy' element={<Catalogy />}></Route>
        <Route path='/signup' element={<Register />}></Route>
        <Route path='/signin' element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
