import './Pagination.css';
import { useState, useEffect, useCallback, memo } from 'react';
import { useAppSelector } from '../../hooks/redux';
import { VISIBLE_PRODUCTS, INITIAL_PAGE, VISIBLE_PAGES } from '../../utils/constants';

interface PaginationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = memo(function Pagination({ currentPage, onPageChange }: PaginationProps) {
  const myProducts = useAppSelector(state => state.products);

  const totalPages = Math.ceil(myProducts.count / VISIBLE_PRODUCTS);
  const [visiblePages, setVisiblePages] = useState([]);

  const updateVisiblePages = useCallback(() => {
    const pages = [];

    const startPage = Math.max(1, currentPage - Math.floor(VISIBLE_PAGES / 2));
    const endPage = Math.min(startPage + VISIBLE_PAGES - 1, totalPages);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    setVisiblePages(pages);
  }, [currentPage, totalPages]);

  useEffect(() => {
    updateVisiblePages();
  }, [currentPage, myProducts.count, updateVisiblePages]);

  function handlePrevPage() {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  }

  function handleNextPage() {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  }

  return (
    <div className="pagination">
      <ul className="pagination__list">
        <button
          className="pagination__button pagination__button-left"
          onClick={handlePrevPage}
          disabled={currentPage === INITIAL_PAGE}
        ></button>
        {/* {totalPages > VISIBLE_PAGES} */}
        {visiblePages.map(pageNumber => (
          <li
            key={pageNumber}
            className={`pagination__item ${pageNumber === currentPage ? 'pagination__item_active' : ''}`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        ))}
        {totalPages > VISIBLE_PAGES && currentPage + Math.floor(VISIBLE_PAGES / 2) < totalPages && (
          <>
            <li className="pagination__item">...</li>
            <li className="pagination__item" onClick={() => onPageChange(totalPages)}>
              {totalPages}
            </li>
          </>
        )}
        <button
          className="pagination__button pagination__button-right"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        ></button>
      </ul>
    </div>
  );
});

export default Pagination;
