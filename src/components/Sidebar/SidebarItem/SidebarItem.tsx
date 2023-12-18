import './SidebarItem.css';

type SidebarItemProps = {
  title: string;
};

function SidebarItem({ title }: SidebarItemProps) {
  return <li className="sidebar__item">{title}</li>;
}

export default SidebarItem;
