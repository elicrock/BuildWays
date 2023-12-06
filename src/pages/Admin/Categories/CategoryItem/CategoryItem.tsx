import './CategoryItem.css';
import Modal from '../../../../components/Modal/Modal';
import CreateCategoryForm from '../../CreateCategoryForm/CreateCategoryForm';
import { Category } from '../../../../types/categoryType';
import useTogglePopup from '../../../../hooks/useTogglePopup';
import Image from '../../../../images/card-product__image.jpg';

interface CategoryItemProps {
  category: Category;
}

function CategoryItem({ category }: CategoryItemProps) {
  const { showModal, handleCloseModal, handleOpenModal } = useTogglePopup();
  // const srcImage = category.img ? `http://localhost:3000/api/categories${category.img}` : category.img;
  // const srcTest = `http://localhost:3000/images/category/${category.img}`;
  // const handleDelete = () => {
  //   console.log('удалить');
  // };

  return (
    <li className="category-item">
      <div className="category-item__flex-box-up">
        <Modal
          classBtn="category-item__add-editBtn"
          titleModal="Редактирование категории"
          showModal={showModal}
          handleCloseModal={handleCloseModal}
          handleOpenModal={handleOpenModal}
        >
          <CreateCategoryForm submitBtnName="Создать" deleteBtnName="Удалить" handleCloseModal={handleCloseModal} />
        </Modal>
      </div>
      <img src={Image} alt="Изображение категории" className="category-item__image"></img>
      <h2 className="category-item__title">{category.name}</h2>
    </li>
  );
}

export default CategoryItem;
