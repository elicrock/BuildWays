import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Logo from '../../images/logo-dark.svg';
import { useLoginUserMutation } from '../../Api/authApi';
import { setError, setUser } from '../../redux/authSlice';

interface LoginFormData {
  email: string;
  password: string;
}

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<LoginFormData>({ mode: 'onChange' });

  const dispatch = useAppDispatch();
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const errorApi = useAppSelector(state => state.auth.error);
  const navigate = useNavigate();
  const inputEmail = watch('email');
  const inputPassword = watch('password');

  useEffect(() => {
    dispatch(setError(''));
  }, [dispatch, inputEmail, inputPassword]);

  const handleLogin: SubmitHandler<LoginFormData> = async data => {
    try {
      const response = await loginUser(data);

      if ('data' in response) {
        dispatch(setUser(response.data));
        navigate('/');
      } else if ('status' in response.error && response.error.status === 401) {
        dispatch(setError('Неправильная почта или пароль'));
      } else {
        dispatch(setError('При авторизации произошла ошибка'));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="auth">
      <div className="auth__container">
        <Link to="/">
          <img className="auth__logo" src={Logo} alt="Логотип сайта" />
        </Link>
        <h1 className="auth__title">Вход</h1>
        <form className="auth__form" name="register" onSubmit={handleSubmit(handleLogin)}>
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
              autoComplete="current-password"
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
          <div className="auth__flex-box">
            <span className="auth__server-error">{errorApi}</span>
            <button className="auth__button" type="submit" disabled={!isValid || isLoading}>
              {isLoading ? 'Вход...' : 'Войти'}
            </button>
            <p className="auth__text">
              Ещё не зарегистрированы?
              <Link to="/signup" className="auth__link">
                Регистрация
              </Link>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Login;
