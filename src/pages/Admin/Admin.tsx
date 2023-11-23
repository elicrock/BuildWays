import { Routes, Route } from 'react-router-dom';
import HeaderAdmin from './HeaderAdmin/HeaderAdmin';
import FooterAdmin from './FooterAdmin/FooterAdmin';
import Main from './Main/Main';
// import Profile from './AdminProfile/AdminProfile';

function Admin() {
  return (
    <>
      <HeaderAdmin />
      <main className="content">
        <Routes>
          <Route path="/" element={<Main />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
        </Routes>
      </main>
      <FooterAdmin />
    </>
  );
}

export default Admin;
