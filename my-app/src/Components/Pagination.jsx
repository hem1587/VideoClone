// Pagination.js
import React from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  console.log('Pagination component:', totalPages, currentPage);

  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="pagination">
      {pageNumbers.map((page) => (
        <div key={page} className="pagination-item">
          <button
            className={`pagination-button ${currentPage === page ? 'active' : ''}`}
            onClick={() => onPageChange(page - 1)}
          >
            {page}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Pagination;
