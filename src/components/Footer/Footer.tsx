import './Footer.css';
import Logo from '../../images/logo.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <nav>
          <ul className="footer__links-list">
            <li className="footer__link-item">Малярные товары</li>
            <li className="footer__link-item">Электрооборудование</li>
            <li className="footer__link-item">Спецодежда</li>
            <li className="footer__link-item">Для дома и дачи</li>
            <li className="footer__link-item">Сезонное</li>
            <li className="footer__link-item">Инструмент</li>
          </ul>
        </nav>
        <nav>
          <ul className="footer__links-list">
            <li>
              <img src={Logo} />
            </li>
            <li className="footer__contact">
              <a className="footer__contact-link" href="https://github.com/elicrock/" target="_blank">
                @Paul
              </a>
            </li>
            <li className="footer__contact">
              <a className="footer__contact-link" href="https://github.com/Garnett163" target="_blank">
                @Xarnett
              </a>
            </li>
            <li>«© 2023 BuildWays»</li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
