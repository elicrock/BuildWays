import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import HomeCatalogyList from './HomeCatalogyList/HomeCatalogyList';
import { useAppSelector } from '../../hooks/redux';

function Home() {
  const myCategories = useAppSelector(state => state.categories);
  return (
    <>
      <Header />
      <main className="content">
        <section className="home">
          {myCategories.map(category => (
            <HomeCatalogyList category={category} key={category.id} />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
