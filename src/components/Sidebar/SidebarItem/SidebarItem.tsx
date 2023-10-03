import './SidebarItem.css';

type SidebarItemProps = {
  title: string;
  src: string;
  alt: string;
};

function SidebarItem({ title, src, alt }: SidebarItemProps) {
  return (
    <li className='sidebar__item'>
      {title}
      <img className='sidebar__arrow' src={src} alt={alt} />
    </li>
  );
}

export default SidebarItem;
