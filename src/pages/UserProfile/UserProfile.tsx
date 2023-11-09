import './UserProfile.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
// import React from 'react';

function UserProfile() {
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
              <form className="user-profile__form">
                <h3 className="user-profile__form-title">Личные данные</h3>
                <label className="user-profile__label" htmlFor="inputName">
                  Имя
                  <input className="user-profile__input" id="inputName" name="name" type="text" placeholder="Имя" required minLength={2} maxLength={25} />
                </label>
                <span className={`user-profile__error 'user-profile__error_active' `}></span>
                <label className="user-profile__label" htmlFor="inputEmail">
                  E-mail
                  <input className="user-profile__input" id="inputEmail" name="email" type="email" placeholder="E-mail" required minLength={5} maxLength={25} />
                </label>
                <span className={`user-profile__error 'user-profile__error_active'}`}></span>

                <button className="user-profile__submit-btn" type="submit">
                  Сохранить
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default UserProfile;
