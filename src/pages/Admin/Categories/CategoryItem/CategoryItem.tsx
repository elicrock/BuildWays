import './CategoryItem.css';
import { memo } from 'react';
import Modal from '../../../../components/Modal/Modal';
import EditCategoryForm from '../EditCategoryForm/EditCategoryForm';
import { Category } from '../../../../types/categoryType';
import useTogglePopup from '../../../../hooks/useTogglePopup';

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = memo(function CategoryItem({ category }: CategoryItemProps) {
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
        <EditCategoryForm submitBtnName="Редактировать" handleCloseModal={handleCloseModal} category={category} />
      </Modal>
      <img src={srcImage} alt="Изображение категории" className="category-item__image"></img>
      <h2 className="category-item__title">{category.name}</h2>
    </li>
  );
});

export default CategoryItem;
