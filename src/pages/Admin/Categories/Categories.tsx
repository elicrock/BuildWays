import './Categories.css';
import CategoryItem from './CategoryItem/CategoryItem';
import Modal from '../../../components/Modal/Modal';
import CreateCategoryForm from '../CreateCategoryForm/CreateCategoryForm';
import { useAppSelector } from '../../../hooks/redux';
import { Category } from '../../../types/categoryType';
import useTogglePopup from '../../../hooks/useTogglePopup';

function Categories() {
  const { showModal, handleCloseModal, handleOpenModal } = useTogglePopup();
  const myCategories = useAppSelector(state => state.categories);

  return (
    <section className="categories">
      <div className="catagories__flex-box">
        <h2 className="categories__title">Категории товаров</h2>
        <Modal
          text={'Cоздать категорию'}
          classBtn="catagories__createBtn"
          titleModal="Создание категории"
          showModal={showModal}
          handleCloseModal={handleCloseModal}
          handleOpenModal={handleOpenModal}
        >
          <CreateCategoryForm submitBtnName="Создать" handleCloseModal={handleCloseModal} />
        </Modal>
      </div>

      <ul className="categories__list">
        {myCategories
          ? myCategories.map((category: Category) => <CategoryItem key={category.id} category={category} />)
          : 'У вас пока что нет категорий'}
      </ul>
    </section>
  );
}

export default Categories;
