import './PageNotFound.css';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="page-not-found">
      <h2 className="page-not-found__note">К сожалению, страница не найдена</h2>
      <span className="page-not-found__number">404</span>
      <Link className="page-not-found__link" to="/">
        Вернуться на главную
      </Link>
    </div>
  );
}

export default PageNotFound;
