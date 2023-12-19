import './Sidebar.css';
import { memo } from 'react';
import SidebarItem from './SidebarItem/SidebarItem';
import { useAppSelector } from '../../hooks/redux';
import { Category } from '../../types/categoryType';

const Sidebar = memo(function SideBar() {
  const myCategories = useAppSelector(state => state.categories);

  return (
    <ul className="sidebar__list">
      <li className="sidebar__item">Все товары</li>
      {myCategories.map((category: Category) => (
        <SidebarItem key={category.id} title={category?.name} />
      ))}
    </ul>
  );
});

export default Sidebar;
