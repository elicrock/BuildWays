// import { useState, useEffect } from 'react';
import Footer from '../../components/FooterProfile/Footer';
import Header from '../../components/Header/Header';
import HomeCatalogyList from './HomeCatalogyList/HomeCatalogyList';
import ProductCardItem from '../../components/ProductCardItem/ProductCardItem';

function Home() {
  return (
    <>
      <Header />
      <main className="content">
        <section className="home">
          <HomeCatalogyList title="Малярные товары">
            <ProductCardItem></ProductCardItem>
            <ProductCardItem></ProductCardItem>
            <ProductCardItem></ProductCardItem>
            <ProductCardItem></ProductCardItem>
            <ProductCardItem></ProductCardItem>
            <ProductCardItem></ProductCardItem>
            <ProductCardItem></ProductCardItem>
            <ProductCardItem></ProductCardItem>
          </HomeCatalogyList>
          <HomeCatalogyList title="Электрооборудование">
            <ProductCardItem></ProductCardItem>
            <ProductCardItem></ProductCardItem>
          </HomeCatalogyList>
          <HomeCatalogyList title="Спецодежда">
            <ProductCardItem></ProductCardItem>
            <ProductCardItem></ProductCardItem>
          </HomeCatalogyList>
          <HomeCatalogyList title="Сезонное">
            <ProductCardItem></ProductCardItem>
            <ProductCardItem></ProductCardItem>
          </HomeCatalogyList>
          <HomeCatalogyList title="Для дома и дачи">
            <ProductCardItem></ProductCardItem>
            <ProductCardItem></ProductCardItem>
          </HomeCatalogyList>
          <HomeCatalogyList title="Инструменты">
            <ProductCardItem></ProductCardItem>
            <ProductCardItem></ProductCardItem>
          </HomeCatalogyList>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
