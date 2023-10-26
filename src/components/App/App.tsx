import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Catalogy from '../Catalogy/Catalogy';
import Register from '../../pages/Register/Register';
import Login from '../../pages/Login/Login';
import Basket from '../Basket/Basket';
import PageNotFound from '../../pages/PageNotFound/PageNotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogy" element={<Catalogy />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
