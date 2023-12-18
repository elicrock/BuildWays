import { Category } from '../../../types/categoryType';
import './CatalogyItem.css';

interface CatalogItemProps {
  category: Category;
}

function CatalogyItem({ category }: CatalogItemProps) {
  const srcImage = `http://localhost:3000/${category.img}`;
  return (
    <li className="catalogy__item">
      <img className="catalogy__image" src={srcImage} alt={category.name}></img>
      <h2 className="catalogy__name">{category.name}</h2>
    </li>
  );
}

export default CatalogyItem;
