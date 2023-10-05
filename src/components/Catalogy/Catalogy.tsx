import { ReactNode } from 'react';

import './Catalogy.css';
import CatalogyItem from './CatalogyItem/CatalogyItem';
import PaintingProducts from '../../images/5290615002185.png.webp';
import ElectricalEquipment from '../../images/Bulgarian.png';
import Workwear from '../../images/Rectangle 1399.png';
import Seasonal from '../../images/sadovyi_instrument.jpg';
import Brick from '../../images/fe66c63e25ea9f4f73e490fe41ae1409.jpg';
import Hammer from '../../images/51392379.jpg';
import Header from '../Header/Header';

function Catalogy({ children }: { children?: ReactNode }) {
  return (
    <>
      <Header />
      <section className="catalogy">
        <div className="catalogy__container">
          <h1 className="catalogy__title">Каталог</h1>
          <ul className="catalogy__list">
            <CatalogyItem title="Малярные товары" src={PaintingProducts} alt="Малярные товары" />
            <CatalogyItem title="Электрооборудование" src={ElectricalEquipment} alt="Электрооборудование" />
            <CatalogyItem title="Спецодежда" src={Workwear} alt="Спецодежда" />
            <CatalogyItem title="Сезонное" src={Seasonal} alt="Сезонное" />
            <CatalogyItem title="Для дома и дачи" src={Brick} alt="Для дома и дачи" />
            <CatalogyItem title="Инструменты" src={Hammer} alt="Инструменты" />
          </ul>
        </div>
        {children}
      </section>
    </>
  );
}

export default Catalogy;
