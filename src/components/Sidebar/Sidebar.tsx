import './Sidebar.css';
import SidebarItem from './SidebarItem/SidebarItem';
import Arrow from '../../images/arrow-left.svg';

function Sidebar() {
  return (
    <section className='sidebar'>
      <ul className='sidebar__list'>
        <SidebarItem title='Малярные товары' src={Arrow} alt='Стрелка' />
        <SidebarItem title='Электрооборудование' src={Arrow} alt='Стрелка' />
        <SidebarItem title='Спецодежда' src={Arrow} alt='Стрелка' />
        <SidebarItem title='Сезонное' src={Arrow} alt='Стрелка' />
        <SidebarItem title='Для дома и дачи' src={Arrow} alt='Стрелка' />
        <SidebarItem title='Инструменты' src={Arrow} alt='Стрелка' />
      </ul>
    </section>
  );
}

export default Sidebar;
