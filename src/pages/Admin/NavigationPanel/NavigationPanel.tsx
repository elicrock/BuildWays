// import React from 'react';
import './NavigationPanel.css';
import { Link } from 'react-router-dom';

function NavigationPanel() {
  return (
    <section className="navigation-panel">
      <div className="navigation-panel__container">
        <nav className="navigation-panel__nav-list">
          <li>
            <Link to="/admin/categories" className="navigation-panel__nav-link">
              Категории товаров
            </Link>
          </li>
          <li>
            <Link to="/admin/products" className="navigation-panel__nav-link">
              Товары
            </Link>
          </li>
          <li>
            <Link to="/admin/feedback" className="navigation-panel__nav-link">
              Обратная связь с клиентом
            </Link>
          </li>
        </nav>
      </div>
    </section>
  );
}

export default NavigationPanel;
