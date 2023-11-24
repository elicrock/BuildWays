import './FooterAdmin.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <nav>
          <ul className="footer__links-list_admin">
            <h2 className="footer-admin__createdBy">Created by</h2>
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
