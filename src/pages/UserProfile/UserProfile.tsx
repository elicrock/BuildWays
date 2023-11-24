import './UserProfile.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useUpdateUserProfileMutation, useLogoutUserMutation } from '../../Api/authApi';
import { setError, setSuccessMessage, setUser, logout } from '../../redux';

type ProfileFormData = {
  name: string;
  email: string;
};

function UserProfile() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isValid },
  } = useForm<ProfileFormData>({ mode: 'onChange' });

  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(state => state.auth.currentUser);
  const errorMessage = useAppSelector(state => state.auth.error);
  const successMessage = useAppSelector(state => state.auth.successMessage);
  const navigate = useNavigate();

  const [updateUserProfile, { isLoading }] = useUpdateUserProfileMutation();
  const [logoutUser] = useLogoutUserMutation();

  const inputName = watch('name');
  const inputEmail = watch('email');
  const isFormChanged = currentUser?.name !== inputName || currentUser?.email !== inputEmail;

  useEffect(() => {
    if (currentUser) {
      setValue('name', currentUser?.name || '');
      setValue('email', currentUser?.email || '');
    }
  }, [currentUser, dispatch, setValue]);

  useEffect(() => {
    dispatch(setError(''));
    dispatch(setSuccessMessage(''));
  }, [dispatch, inputName, inputEmail]);

  const handleEditProfile: SubmitHandler<ProfileFormData> = async ({ name, email }) => {
    try {
      const response = await updateUserProfile({ name, email });
      if ('data' in response) {
        dispatch(setUser({ name, email }));
        dispatch(setSuccessMessage('Данные пользователя успешно обновлены!'));
      } else if ('status' in response.error && response.error.status === 409) {
        dispatch(setError('Пользователь с таким email уже существует!'));
      } else {
        dispatch(setError('Произошла ошибка при обновлении данных'));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await logoutUser();
      if ('data' in response) {
        dispatch(logout());
        navigate('/');
        localStorage.clear();
      } else {
        dispatch(setError('Произошла ошибка при выходе из аккаунта'));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <main className="content">
        <section className="user-profile">
          <h2 className="user-profile__title">Личный кабинет</h2>
          <div className="user-profile__container">
            <div className="user-profile__box-category">
              <p className="user-profile__category">Личная Информация</p>
              <p className="user-profile__category">История заказов</p>
            </div>
            <div className="user-profile__box-form">
              <form className="user-profile__form" onSubmit={handleSubmit(handleEditProfile)}>
                <h3 className="user-profile__form-title">Личные данные</h3>
                <label className="user-profile__label" htmlFor="inputName">
                  Имя
                  <input
                    className="user-profile__input"
                    id="inputName"
                    type="text"
                    placeholder="Имя"
                    required
                    minLength={2}
                    maxLength={25}
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
                <span className={`user-profile__error ${errors.name ? 'user-profile__error_active' : ''}`}>
                  {errors?.name?.message}
                </span>
                <label className="user-profile__label" htmlFor="inputEmail">
                  E-mail
                  <input
                    className="user-profile__input"
                    id="inputEmail"
                    type="email"
                    placeholder="E-mail"
                    required
                    minLength={5}
                    maxLength={25}
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
                <span className={`user-profile__error ${errors.email ? 'user-profile__error_active' : ''}`}>
                  {errors?.email?.message}
                </span>
                <button
                  className="user-profile__submit-btn"
                  type="submit"
                  disabled={!isValid || !isFormChanged || isLoading}
                >
                  {isLoading ? 'Сохранение' : 'Сохранить'}
                </button>
                <span className="user-profile__error-message">{errorMessage}</span>
                <span className="user-profile__success-message">{successMessage}</span>
              </form>
              <button className="user-profile__logoutBtn" onClick={handleLogout}>
                Выйти из аккаунта
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default UserProfile;
