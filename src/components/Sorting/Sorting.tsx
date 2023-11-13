import { useState, ChangeEvent } from 'react';
import './Sorting.css';

function Sorting() {
  const [selectedOption, setSelectedOption] = useState('all');

  const handleSortingChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };
  return (
    <form className="sorting">
      <h2 className="sorting__name">Сортировать :</h2>
      <div className="sorting__container">
        <select className="sorting__select" value={selectedOption} onChange={handleSortingChange}>
          <option className="sorting__option" value="all">
            Все товары
          </option>
          <option className="sorting__option" value="asc">
            По возрастанию цены
          </option>
          <option className="sorting__option" value="desc">
            По убыванию цены
          </option>
          <option className="sorting__option" value="new">
            Сначала новые
          </option>
        </select>
      </div>
    </form>
  );
}

export default Sorting;
