import './App.css';
import { Routes, Route } from 'react-router-dom';
import Catalogy from '../Catalogy/Catalogy';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Basket from '../Basket/Basket';

function App() {
  return (
    <>
      <Routes>
        <Route path='/catalogy' element={<Catalogy />}></Route>
        <Route path='/signup' element={<Register />}></Route>
        <Route path='/signin' element={<Login />}></Route>
        <Route path='/basket' element={<Basket />}></Route>
      </Routes>
    </>
  );
}

export default App;
