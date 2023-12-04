import './Categories.css';
import { memo } from 'react';
import CategoryItem from './CategoryItem/CategoryItem';
import Modal from '../../../components/Modal/Modal';
import CreateCategoryForm from '../CreateCategoryForm/CreateCategoryForm';

const CategoryItemMemo = memo(CategoryItem);

function Categories() {
  return (
    <section className="categories">
      <div className="catagories__flex-box">
        <h2 className="categories__title">Категории товаров</h2>
        <Modal text={'Cоздать категорию'} classBtn="catagories__createBtn" titleModal="Создание категории">
          <CreateCategoryForm submitBtnName="Создать" />
        </Modal>
      </div>

      <ul className="categories__list">
        <CategoryItemMemo />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </ul>
    </section>
  );
}

export default Categories;
