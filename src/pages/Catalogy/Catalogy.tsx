import { ReactNode } from 'react';
import './Catalogy.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import CatalogyItem from './CatalogyItem/CatalogyItem';
import { Category } from '../../types/categoryType';
import { useAppSelector } from '../../hooks/redux';

function Catalogy({ children }: { children?: ReactNode }) {
  const myCategories = useAppSelector(state => state.categories);

  return (
    <>
      <Header />
      <main className="content">
        <section className="catalogy">
          <div className="catalogy__container">
            <h1 className="catalogy__title">Каталог</h1>
            <ul className="catalogy__list">
              {myCategories.map((category: Category) => (
                <CatalogyItem category={category} key={category.id} />
              ))}
            </ul>
          </div>
          {children}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Catalogy;
