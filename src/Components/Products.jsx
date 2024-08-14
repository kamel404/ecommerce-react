import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ShowProducts from "./ShowProducts"; // Import the presentational component

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [category, setCategory] = useState("");
  const itemsPerPage = 12;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const url = `https://dummyjson.com/products${
        category ? `/category/${category}` : ""
      }?limit=${itemsPerPage}&skip=${(currentPage - 1) * itemsPerPage}`;
    
      const response = await fetch(url);
      const result = await response.json();
      setData(result.products);
      setFilter(result.products);
      setTotalPages(Math.ceil(result.total / itemsPerPage));
      setLoading(false);
    };

    getProducts();
  }, [category, currentPage]);

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        {[...Array(6)].map((_, index) => (
          <div key={index} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
            <Skeleton height={592} />
          </div>
        ))}
      </>
    );
  };

  const filterProduct = (cat) => {
    setCategory(cat);
    setCurrentPage(1);
  };

  const addProduct = (product) => {
    // Your add to cart logic here
  };

  const Pagination = () => {
    const getPaginationItems = () => {
      const paginationItems = [];
      const totalPageButtons = 5;

      let startPage = Math.max(
        currentPage - Math.floor(totalPageButtons / 2),
        1
      );
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
          className={`page-item ${
            currentPage === totalPages ? "disabled" : ""
          }`}
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

  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">Latest Products</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? (
            <Loading />
          ) : (
            <ShowProducts
              products={filter}
              filterProduct={filterProduct}
              addProduct={addProduct}
            />
          )}
        </div>
        {!loading && <Pagination />}
      </div>
    </>
  );
};

export default Products;
