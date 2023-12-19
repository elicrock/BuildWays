import './Sidebar.css';
import { useState, memo, useCallback } from 'react';
import SidebarItem from './SidebarItem/SidebarItem';
import { useAppSelector } from '../../hooks/redux';
import { Category } from '../../types/categoryType';

const Sidebar = memo(function SideBar() {
  const myCategories = useAppSelector(state => state.categories);
  const [activeItem, setActiveItem] = useState<string | null>('Все товары');

  const handleActiveItemClick = useCallback((title: string) => {
    setActiveItem(title);
  }, []);

  return (
    <ul className="sidebar__list">
      <li
        className={`sidebar__item ${activeItem === 'Все товары' ? 'sidebar__item_active' : ''}`}
        onClick={() => handleActiveItemClick('Все товары')}
      >
        Все товары
      </li>
      {myCategories.map((category: Category) => (
        <SidebarItem
          key={category.id}
          category={category}
          isActive={activeItem === category.name}
          onActiveItemClick={handleActiveItemClick}
        />
      ))}
    </ul>
  );
});

export default Sidebar;
