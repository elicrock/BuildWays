import './Sidebar.css';
import SidebarItem from './SidebarItem/SidebarItem';
import { useAppSelector } from '../../hooks/redux';
import { Category } from '../../types/categoryType';

function Sidebar() {
  const myCategories = useAppSelector(state => state.categories);

  return (
    <section className="sidebar">
      <ul className="sidebar__list">
        <li className="sidebar__item">Все товары</li>
        {myCategories.map((category: Category) => (
          <SidebarItem key={category.id} title={category?.name} />
        ))}
      </ul>
    </section>
  );
}

export default Sidebar;
