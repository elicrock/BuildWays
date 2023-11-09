import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import HomeCatalogyList from './HomeCatalogyList/HomeCatalogyList';

function Home() {
  return (
    <>
      <Header />
      <main className="content">
        <section className="home">
          <HomeCatalogyList title="Малярные товары" />
          <HomeCatalogyList title="Электрооборудование" />
          <HomeCatalogyList title="Спецодежда" />
          <HomeCatalogyList title="Сезонное" />
          <HomeCatalogyList title="Для дома и дачи" />
          <HomeCatalogyList title="Инструменты" />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
