import { Link } from 'react-router-dom';
import Logo from '../../images/logo.svg';

function Register() {
  return (
    <main className='auth'>
      <div className='auth__container'>
        <Link to='/'>
          <img className='auth__logo' src={Logo} alt='Логотип сайта' />
        </Link>
        <h1 className='auth__title'>Вход</h1>
        <form className='auth__form' name='register'>
          <label className='auth__label' htmlFor='inputEmail'>
            E-mail
            <input
              className='auth__input'
              id='inputEmail'
              name='email'
              type='email'
              placeholder='E-mail'
              required
              minLength={5}
              maxLength={25}
            />
          </label>
          <span className='auth__error'></span>
          <label className='auth__label' htmlFor='inputPassword'>
            Пароль
            <input
              className='auth__input'
              id='inputPassword'
              name='password'
              type='password'
              placeholder='Пароль'
              required
              minLength={3}
              maxLength={25}
            />
          </label>
          <span className={`auth__error 'auth__error_active'`}></span>

          <div className='auth__flex-box'>
            <span className='auth__server-error'></span>
            <button className={`auth__button  'auth__button_disabled'`} type='submit'>
              Войти
            </button>
            <p className='auth__text'>
              Ещё не зарегистрированы?
              <Link to='/signup' className='auth__link'>
                Регистрация
              </Link>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Register;
