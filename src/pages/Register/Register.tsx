import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch } from '../../hooks/redux';
import './Register.css';
import Logo from '../../images/logo-dark.svg';
import { useRegisterUserMutation, useLoginUserMutation } from '../../Api/authApi';
import { setUser } from '../../redux/authSlice';

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

  const password = watch('password', '');

  const handleRegistration: SubmitHandler<RegisterFormData> = async ({ name, email, password }) => {
    try {
      await registerUser({ name, email, password });
      const result = await loginUser({ email, password });
      if ('data' in result) {
        dispatch(setUser(result.data));
      } else {
        console.log(result.error);
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
        <h1 className="auth__title">Регистрация</h1>
        <form className="auth__form" name="register" onSubmit={handleSubmit(handleRegistration)}>
          <label className="auth__label" htmlFor="inputName">
            Имя
            <input
              // disabled={isLoading}
              className="auth__input"
              id="inputName"
              type="text"
              placeholder="Имя"
              required
              minLength={2}
              maxLength={30}
              autoComplete="username"
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
              {...register('confirmPassword', {
                required: 'Поле обязательно для заполнения',
                validate: value => {
                  return value === password || 'Пароли должны совпадать';
                },
              })}
            />
          </label>
          <span className={`auth__error ${errors.confirmPassword ? 'auth__error_active' : ''}`}>
            {errors?.confirmPassword?.message}
          </span>
          <div className="auth__flex-box">
            <span className="auth__server-error"></span>
            <button disabled={!isValid} className="auth__button" type="submit">
              Зарегистрироваться
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
