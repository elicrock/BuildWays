import './Categories.css';
import CategoryItem from './CategoryItem/CategoryItem';
import Modal from '../../../components/Modal/Modal';

function Categories() {
  return (
    <section className="categories">
      <div className="catagories__flex-box">
        <h2 className="categories__title">Категории товаров</h2>
        <Modal text={'Cоздать категорию'} classBtn="catagories__createBtn" titleModal="Создание категории"></Modal>
      </div>
      <ul className="categories__list">
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </ul>
    </section>
  );
}

export default Categories;
