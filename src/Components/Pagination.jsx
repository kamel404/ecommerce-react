import React from "react";

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  const getPaginationItems = () => {
    const paginationItems = [];
    const totalPageButtons = 5;

    let startPage = Math.max(currentPage - Math.floor(totalPageButtons / 2), 1);
    let endPage = Math.min(startPage + totalPageButtons - 1, totalPages);

    if (endPage - startPage + 1 < totalPageButtons) {
      startPage = Math.max(endPage - totalPageButtons + 1, 1);
    }

    paginationItems.push(
      <li
        key="prev"
        className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
      >
        <button
          className="page-link"
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>
      </li>
    );

    if (startPage > 1) {
      paginationItems.push(
        <li
          key={1}
          className={`page-item ${currentPage === 1 ? "active" : ""}`}
        >
          <button className="page-link" onClick={() => setCurrentPage(1)}>
            1
          </button>
        </li>
      );
      if (startPage > 2) {
        paginationItems.push(
          <li key="start-ellipsis" className="page-item disabled">
            <span className="page-link">...</span>
          </li>
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      paginationItems.push(
        <li
          key={i}
          className={`page-item ${currentPage === i ? "active" : ""}`}
        >
          <button className="page-link" onClick={() => setCurrentPage(i)}>
            {i}
          </button>
        </li>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        paginationItems.push(
          <li key="end-ellipsis" className="page-item disabled">
            <span className="page-link">...</span>
          </li>
        );
      }
      paginationItems.push(
        <li
          key={totalPages}
          className={`page-item ${currentPage === totalPages ? "active" : ""}`}
        >
          <button
            className="page-link"
            onClick={() => setCurrentPage(totalPages)}
          >
            {totalPages}
          </button>
        </li>
      );
    }

    paginationItems.push(
      <li
        key="next"
        className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}
      >
        <button
          className="page-link"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </li>
    );

    return paginationItems;
  };

  return (
    <nav>
      <ul className="pagination justify-content-center">
        {getPaginationItems()}
      </ul>
    </nav>
  );
};

export default Pagination;
