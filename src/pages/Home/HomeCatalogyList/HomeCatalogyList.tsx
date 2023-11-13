import React, { ReactNode, useState, useEffect } from 'react';
import './HomeCatalogyList.css';

interface HomeCatalogyListProps {
  title: string;
  children?: ReactNode;
}

function HomeCatalogyList({ title, children }: HomeCatalogyListProps) {
  const [visibleCards, setVisibleCards] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(4);
      } else if (window.innerWidth > 768) {
        setVisibleCards(3);
      } else if (window.innerWidth >= 525) {
        setVisibleCards(2);
      } else if (window.innerWidth < 525) {
        setVisibleCards(1);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="home-catalogy-list">
      <div className="home-catalogy-list__box-title">
        <h2 className="home-catalogy-list__title">{title}</h2>
        <button type="button" className="home-catalogy-list__slide-left-btn"></button>
        <button type="button" className="home-catalogy-list__slide-right-btn"></button>
      </div>
      <ul className="home-catalogy-list__list">{React.Children.toArray(children).slice(0, visibleCards)}</ul>
    </div>
  );
}

export default HomeCatalogyList;
