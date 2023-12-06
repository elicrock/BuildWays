import './Categories.css';
// import { memo, useEffect } from 'react';
import CategoryItem from './CategoryItem/CategoryItem';
import Modal from '../../../components/Modal/Modal';
import CreateCategoryForm from '../CreateCategoryForm/CreateCategoryForm';
import { useGetCategoriesQuery } from '../../../Api/categoryApi';
import { Category } from '../../../types/categoryType';

function Categories() {
  const { data: myCategories } = useGetCategoriesQuery();
  // console.log(myCategories);
  // useEffect(() => {
  //   useGetCategoriesQuery();
  // }, [getCategories]);

  return (
    <section className="categories">
      <div className="catagories__flex-box">
        <h2 className="categories__title">Категории товаров</h2>
        <Modal text={'Cоздать категорию'} classBtn="catagories__createBtn" titleModal="Создание категории">
          <CreateCategoryForm submitBtnName="Создать" />
        </Modal>
      </div>

      <ul className="categories__list">
        {myCategories
          ? myCategories.map((category: Category) => <CategoryItem key={category.id} category={category} />)
          : 'У вас пока что нету категорий'}
      </ul>
    </section>
  );
}

export default Categories;
