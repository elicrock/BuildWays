import './Footer.css';
import Logo from '../../images/logo.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <img className="footer__logo" src={Logo} />
        <a className="footer__contact-link" href="https://github.com/elicrock/" target="_blank">
          @Paul
        </a>
        <a className="footer__contact-link" href="https://github.com/Garnett163" target="_blank">
          @Xarnett
        </a>
        «© 2023 BuildWays»
      </div>
    </footer>
  );
}

export default Footer;
