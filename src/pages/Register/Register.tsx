import { useState, useEffect } from 'react';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import './Register.css';
import Logo from '../../images/logo-dark.svg';
import { useRegisterUserMutation, useLoginUserMutation } from '../../Api/authApi';
import { setUser } from '../../redux/authSlice';
import { setError, clearError } from '../../redux/errorSlice';
interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<RegisterFormData>({ mode: 'onChange' });
  const dispatch = useAppDispatch();
  const [registerUser] = useRegisterUserMutation();
  const [loginUser] = useLoginUserMutation();
  const errorApi = useAppSelector(state => state.error.message);
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const inputName = watch('name');
  const inputEmail = watch('email');
  const inputPassword = watch('password', '');
  const inputConfirmPassword = watch('confirmPassword', '');

  useEffect(() => {
    dispatch(clearError());
  }, [dispatch, inputName, inputEmail, inputPassword, inputConfirmPassword]);

  const handleRegistration: SubmitHandler<RegisterFormData> = async ({ name, email, password }) => {
    setIsLoading(true);
    try {
      const response = await registerUser({ name, email, password }).unwrap();
      if (response) {
        await loginUser({ email, password });
        dispatch(setUser(response));
        navigate('/');
        localStorage.setItem('isLoggedIn', JSON.stringify(true));
      }
    } catch (error) {
      if (error.status === 409) {
        dispatch(setError('Пользователь с таким email уже существует'));
      } else {
        dispatch(setError('При регистрации пользователя произошла ошибка'));
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <main className="auth">
      <div className="auth__container">
        <Link to="/">
          <img className="auth__logo" src={Logo} alt="Логотип сайта" />
        </Link>
        <h1 className="auth__title">Регистрация</h1>
        <form className="auth__form" name="register" onSubmit={handleSubmit(handleRegistration)}>
          <label className="auth__label" htmlFor="inputName">
            Имя
            <input
              className="auth__input"
              id="inputName"
              type="text"
              placeholder="Имя"
              required
              minLength={2}
              maxLength={30}
              autoComplete="username"
              disabled={isLoading}
              {...register('name', {
                required: 'Поле обязательно для заполнения',
                minLength: {
                  value: 2,
                  message: 'Введите не менее 2 символов',
                },
                maxLength: {
                  value: 30,
                  message: 'Введите менее 30 символов',
                },
                pattern: {
                  value: /^[a-zA-Z\u0430-\u044f\u0410-\u042fёЁ\s]*$/,
                  message: 'Введите корректное имя',
                },
              })}
            />
          </label>
          <span className={`auth__error ${errors.name ? 'auth__error_active' : ''}`}>{errors?.name?.message}</span>
          <label className="auth__label" htmlFor="inputEmail">
            E-mail
            <input
              className="auth__input"
              id="inputEmail"
              type="email"
              placeholder="E-mail"
              required
              minLength={5}
              maxLength={30}
              autoComplete="email"
              disabled={isLoading}
              {...register('email', {
                required: 'Поле обязательно для заполнения',
                pattern: {
                  // value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i,
                  value: /^[a-zA-Z0-9.-]+@[a-zA-Z0-9_]+\.[a-z]{2,6}$/i,
                  message: 'Пожалуйста, укажите корректный электронный адрес',
                },
                minLength: {
                  value: 5,
                  message: 'Введите не менее 5 символов',
                },
                maxLength: {
                  value: 30,
                  message: 'Введите менее 30 символов',
                },
              })}
            />
          </label>
          <span className={`auth__error ${errors.email ? 'auth__error_active' : ''}`}>{errors?.email?.message}</span>
          <label className="auth__label" htmlFor="inputPassword">
            Пароль
            <input
              className="auth__input"
              id="inputPassword"
              type="password"
              placeholder="Пароль"
              required
              minLength={3}
              maxLength={30}
              autoComplete="new-password"
              disabled={isLoading}
              {...register('password', {
                required: 'Поле обязательно для заполнения',
                minLength: {
                  value: 3,
                  message: 'Введите не менее 3 символов',
                },
                maxLength: {
                  value: 30,
                  message: 'Введите менее 30 символов',
                },
              })}
            />
          </label>
          <span className={`auth__error ${errors.password ? 'auth__error_active' : ''}`}>
            {errors?.password?.message}
          </span>
          <label className="auth__label" htmlFor="inputConfirmPassword">
            Подтвердите Пароль
            <input
              className="auth__input"
              id="inputConfirmPassword"
              type="password"
              placeholder="Пароль"
              required
              minLength={3}
              maxLength={30}
              autoComplete="new-password"
              disabled={isLoading}
              {...register('confirmPassword', {
                required: 'Поле обязательно для заполнения',
                validate: value => {
                  return value === inputPassword || 'Пароли должны совпадать';
                },
              })}
            />
          </label>
          <span className={`auth__error ${errors.confirmPassword ? 'auth__error_active' : ''}`}>
            {errors?.confirmPassword?.message}
          </span>
          <div className="auth__flex-box">
            <span className="auth__server-error">{errorApi}</span>
            <button className="auth__button" type="submit" disabled={!isValid || isLoading}>
              {isLoading ? 'Регистрация...' : 'Зарегистрироваться'}
            </button>
            <p className="auth__text">
              Уже зарегистрированы?
              <Link to="/signin" className="auth__link">
                Войти
              </Link>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Register;
