import './CategoryItem.css';
import Modal from '../../../../components/Modal/Modal';
import CreateCategoryForm from '../../CreateCategoryForm/CreateCategoryForm';
import { Category } from '../../../../types/categoryType';

interface CategoryItemProps {
  category: Category;
}

function CategoryItem({ category }: CategoryItemProps) {
  const srcTest = `http://localhost:3000/${category.img}`;

  // const handleDelete = () => {
  //   console.log('удалить');
  // };

  return (
    <li className="category-item">
      <Modal classBtn="category-item__add-editBtn" titleModal="Редактирование категории">
        <CreateCategoryForm submitBtnName="Редактировать" deleteBtnName="Удалить" />
      </Modal>
      <img src={srcTest} alt="Изображение категории" className="category-item__image"></img>
      <h2 className="category-item__title">{category.name}</h2>
    </li>
  );
}

export default CategoryItem;
