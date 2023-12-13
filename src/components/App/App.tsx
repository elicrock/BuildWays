import './App.css';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setUser } from '../../redux/authSlice';
import { useGetUserProfileQuery } from '../../Api/authApi';
import { useGetCategoriesQuery } from '../../Api/categoryApi';
import { useGetProductsQuery } from '../../Api/productApi';
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
import { setCategories } from '../../redux/categorySlice';
import { setProducts } from '../../redux/productSlice';

function App() {
  const dispatch = useAppDispatch();
  const {
    data: userProfileData,
    isError: userIsError,
    error: userError,
    isLoading: isLoadingUser,
  } = useGetUserProfileQuery();
  const {
    data: myCategories,
    isError: categoriesIsError,
    error: categoriesError,
    isLoading: isLoadingCategories,
  } = useGetCategoriesQuery();
  const {
    data: myProducts,
    isError: productsIsError,
    error: productsError,
    isLoading: isLoadingProducts,
  } = useGetProductsQuery();
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
  const currentUser = useAppSelector(state => state.auth.currentUser);

  useEffect(() => {
    if (myCategories) {
      dispatch(setCategories(myCategories));
    } else if (categoriesIsError) {
      console.error('Произошла ошибка при получении категорий', categoriesError);
    }
  }, [categoriesError, categoriesIsError, dispatch, myCategories]);

  useEffect(() => {
    if (myProducts) {
      dispatch(setProducts(myProducts));
    } else if (productsIsError) {
      console.error('Произошла ошибка при получении товаров', productsError);
    }
  }, [dispatch, myProducts, productsError, productsIsError]);

  useEffect(() => {
    if (userProfileData) {
      dispatch(setUser(userProfileData));
      localStorage.setItem('isLoggedIn', JSON.stringify(true));
    } else if (userIsError) {
      console.error('Произошла ошибка при получении пользователя', userError);
      localStorage.removeItem('isLoggedIn');
    }
  }, [dispatch, userProfileData, userIsError, userError]);

  if (isLoadingUser && isLoadingCategories && isLoadingProducts) {
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
        {isLoggedIn && currentUser?.role === 'ADMIN' && <Route path="/admin/*" element={<Admin />} />}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
