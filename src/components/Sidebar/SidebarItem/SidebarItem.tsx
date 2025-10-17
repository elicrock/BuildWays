import './SidebarItem.css';
import { Category } from '../../../types/categoryType';

type SidebarItemProps = {
  category: Category;
  isActive?: boolean;
  onActiveItemClick: (name: string) => void;
};

function SidebarItem({ category, isActive, onActiveItemClick }: SidebarItemProps) {
  return (
    <li
      className={`sidebar__item ${isActive ? 'sidebar__item_active' : ''}`}
      onClick={() => onActiveItemClick(category.name)}
    >
      {category.name}
    </li>
  );
}

export default SidebarItem;
