import './HomeCatalogyList.css';
// import React from 'react'

interface HomeCatalogyListProps {
  title: string;
}

function HomeCatalogyList({ title }: HomeCatalogyListProps) {
  return (
    <div>
      <h2>{title}</h2>
      <ul className=""></ul>
    </div>
  );
}

export default HomeCatalogyList;
