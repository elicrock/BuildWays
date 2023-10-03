import './CatalogyItem.css';

interface CatalogItemProps {
  title: string;
  src: string;
  alt?: string;
}

function CatalogyItem({ title, src, alt }: CatalogItemProps) {
  return (
    <li className='catalogy__item'>
      <img className='catalogy__image' src={src} alt={alt}></img>
      <h2 className='catalogy__name'>{title}</h2>
    </li>
  );
}

export default CatalogyItem;
