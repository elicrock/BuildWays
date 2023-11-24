import './Categories.css';
import CategoryItem from './CategoryItem/CategoryItem';

function Categories() {
  return (
    <section className="categories">
      <div className="catagories__flex-box">
        <h2 className="categories__title">Категории товаров</h2>
        <button className="catagories__createBtn" type="submit">
          Создать категорию
        </button>
      </div>
      <ul className="categories__list">
        <CategoryItem />
        <CategoryItem />
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
