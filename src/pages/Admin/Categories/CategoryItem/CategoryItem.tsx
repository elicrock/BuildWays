import './CategoryItem.css';
import Modal from '../../../../components/Modal/Modal';
import CreateCategoryForm from '../../CreateCategoryForm/CreateCategoryForm';
import { Category } from '../../../../types/categoryType';
import useTogglePopup from '../../../../hooks/useTogglePopup';

interface CategoryItemProps {
  category: Category;
}

function CategoryItem({ category }: CategoryItemProps) {
  const { showModal, handleCloseModal, handleOpenModal } = useTogglePopup();
  const srcImage = `http://localhost:3000/${category.img}`;

  return (
    <li className="category-item">
      <Modal
        classBtn="category-item__add-editBtn"
        titleModal="Редактирование категории"
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        handleOpenModal={handleOpenModal}
      >
        <CreateCategoryForm submitBtnName="Редактировать" deleteBtnName="Удалить" handleCloseModal={handleCloseModal} />
      </Modal>
      <img src={srcImage} alt="Изображение категории" className="category-item__image"></img>
      <h2 className="category-item__title">{category.name}</h2>
    </li>
  );
}

export default CategoryItem;
