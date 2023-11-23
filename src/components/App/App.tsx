import './App.css';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setUser } from '../../redux/authSlice';
import { useGetUserProfileQuery } from '../../Api/authApi';
import Admin from '../../pages/Admin/Admin';
import Home from '../../pages/Home/Home';
import Catalogy from '../../pages/Catalogy/Catalogy';
import Register from '../../pages/Register/Register';
import Login from '../../pages/Login/Login';
import Basket from '../../pages/Basket/Basket';
import PageNotFound from '../../pages/PageNotFound/PageNotFound';
import ProductPage from '../../pages/ProductPage/ProductPage';
import UserProfile from '../../pages/UserProfile/UserProfile';
import ProtectedClientRouteElement from '../ProtectedRoute/ProtectedRoute';
import Preloader from '../Preloader/Preloader';

function App() {
  const dispatch = useAppDispatch();
  const { data: userProfileData, isError, error, isLoading } = useGetUserProfileQuery();
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);

  useEffect(() => {
    if (userProfileData) {
      dispatch(setUser(userProfileData));
      localStorage.setItem('isLoggedIn', JSON.stringify(true));
    } else if (isError) {
      console.error('Произошла ошибка при получении пользователя', error);
    }
  }, [dispatch, userProfileData, isError, error]);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/basket" element={<ProtectedClientRouteElement element={<Basket />} />} />
        <Route path="/user-profile" element={<ProtectedClientRouteElement element={<UserProfile />} />} />
        <Route path="/catalogy" element={<Catalogy />} />
        <Route path="/product" element={<ProductPage />} />
        {isLoggedIn && userProfileData?.role === 'ADMIN' && <Route path="/admin/*" element={<Admin />} />}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
