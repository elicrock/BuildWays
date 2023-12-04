import { Routes, Route } from 'react-router-dom';
import HeaderAdmin from './HeaderAdmin/HeaderAdmin';
import FooterAdmin from './FooterAdmin/FooterAdmin';
import NavigationPanel from './NavigationPanel/NavigationPanel';
import Main from './Main/Main';
import Categories from './Categories/Categories';
import Products from './Products/Products';
import Feedback from './Feedback/Feedback';
import Interview from './Interview/Interview';

function Admin() {
  return (
    <>
      <HeaderAdmin />
      <main className="content">
        <NavigationPanel />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products" element={<Products />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/interview" element={<Interview />}></Route>
        </Routes>
      </main>
      <FooterAdmin />
    </>
  );
}

export default Admin;
