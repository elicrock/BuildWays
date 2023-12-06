import './CategoryItem.css';
import Modal from '../../../../components/Modal/Modal';
import CreateCategoryForm from '../../CreateCategoryForm/CreateCategoryForm';
import { Category } from '../../../../types/categoryType';

interface CategoryItemProps {
  category: Category;
}

function CategoryItem({ category }: CategoryItemProps) {
  // const srcImage = category.img ? `http://localhost:3000/api/categories${category.img}` : category.img;
  const srcTest = `http://localhost:3000/images/category/${category.img}`;
  // const handleDelete = () => {
  //   console.log('удалить');
  // };

  return (
    <li className="category-item">
      <div className="category-item__flex-box-up">
        <Modal classBtn="category-item__add-editBtn" titleModal="Редактирование категории">
          <CreateCategoryForm submitBtnName="Создать" deleteBtnName="Удалить" />
        </Modal>
      </div>
      <img src={srcTest!} alt="Изображение категории" className="category-item__image"></img>
      <h2 className="category-item__title">{category.name}</h2>
    </li>
  );
}

export default CategoryItem;
